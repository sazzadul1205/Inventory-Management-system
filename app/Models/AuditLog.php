<?php
// app/Models/AuditLog.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class AuditLog extends Model
{
    use HasFactory;

    protected $table = 'audit_logs';

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'action',
        'table_name',
        'record_id',
        'old_values',
        'new_values',
        'changes',
        'ip_address',
        'user_agent',
        'session_id',
        'request_method',
        'request_url',
        'description'
    ];

    protected $casts = [
        'old_values' => 'array',
        'new_values' => 'array',
        'changes' => 'array',
        'created_at' => 'datetime'
    ];

    // Action constants
    const ACTION_CREATE = 'create';
    const ACTION_UPDATE = 'update';
    const ACTION_DELETE = 'delete';
    const ACTION_VIEW = 'view';
    const ACTION_LOGIN = 'login';
    const ACTION_LOGOUT = 'logout';
    const ACTION_EXPORT = 'export';
    const ACTION_IMPORT = 'import';
    const ACTION_DOWNLOAD = 'download';
    const ACTION_PRINT = 'print';
    const ACTION_APPROVE = 'approve';
    const ACTION_REJECT = 'reject';
    const ACTION_CANCEL = 'cancel';
    const ACTION_COMPLETE = 'complete';
    const ACTION_RESTORE = 'restore';
    const ACTION_BACKUP = 'backup';
    const ACTION_RESTORE_BACKUP = 'restore_backup';
    const ACTION_SETTING_CHANGE = 'setting_change';
    const ACTION_PERMISSION_CHANGE = 'permission_change';
    const ACTION_PASSWORD_CHANGE = 'password_change';
    const ACTION_PROFILE_UPDATE = 'profile_update';

    public static $actions = [
        self::ACTION_CREATE => 'Create',
        self::ACTION_UPDATE => 'Update',
        self::ACTION_DELETE => 'Delete',
        self::ACTION_VIEW => 'View',
        self::ACTION_LOGIN => 'Login',
        self::ACTION_LOGOUT => 'Logout',
        self::ACTION_EXPORT => 'Export',
        self::ACTION_IMPORT => 'Import',
        self::ACTION_DOWNLOAD => 'Download',
        self::ACTION_PRINT => 'Print',
        self::ACTION_APPROVE => 'Approve',
        self::ACTION_REJECT => 'Reject',
        self::ACTION_CANCEL => 'Cancel',
        self::ACTION_COMPLETE => 'Complete',
        self::ACTION_RESTORE => 'Restore',
        self::ACTION_BACKUP => 'Backup',
        self::ACTION_RESTORE_BACKUP => 'Restore Backup',
        self::ACTION_SETTING_CHANGE => 'Setting Change',
        self::ACTION_PERMISSION_CHANGE => 'Permission Change',
        self::ACTION_PASSWORD_CHANGE => 'Password Change',
        self::ACTION_PROFILE_UPDATE => 'Profile Update'
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Scopes
    public function scopeByUser($query, $userId)
    {
        return $query->where('user_id', $userId);
    }

    public function scopeByAction($query, $action)
    {
        return $query->where('action', $action);
    }

    public function scopeByTable($query, $tableName)
    {
        return $query->where('table_name', $tableName);
    }

    public function scopeByRecord($query, $tableName, $recordId)
    {
        return $query->where('table_name', $tableName)
            ->where('record_id', $recordId);
    }

    public function scopeByDateRange($query, $startDate, $endDate)
    {
        return $query->whereBetween('created_at', [$startDate, $endDate]);
    }

    public function scopeByIpAddress($query, $ipAddress)
    {
        return $query->where('ip_address', $ipAddress);
    }

    public function scopeToday($query)
    {
        return $query->whereDate('created_at', now()->toDateString());
    }

    public function scopeThisWeek($query)
    {
        return $query->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()]);
    }

    public function scopeThisMonth($query)
    {
        return $query->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year);
    }

    public function scopeWithChanges($query)
    {
        return $query->whereNotNull('changes');
    }

    // Accessors
    public function getActionLabelAttribute(): string
    {
        return self::$actions[$this->action] ?? $this->action;
    }

    public function getChangesSummaryAttribute(): array
    {
        if (!$this->changes) {
            return [];
        }

        $summary = [];
        foreach ($this->changes as $field => $change) {
            $summary[] = [
                'field' => $field,
                'old' => $change['old'] ?? null,
                'new' => $change['new'] ?? null
            ];
        }

        return $summary;
    }

    public function getFormattedChangesAttribute(): string
    {
        if (!$this->changes) {
            return '';
        }

        $lines = [];
        foreach ($this->changes as $field => $change) {
            $old = is_array($change['old'] ?? null) ? json_encode($change['old']) : ($change['old'] ?? 'null');
            $new = is_array($change['new'] ?? null) ? json_encode($change['new']) : ($change['new'] ?? 'null');
            $lines[] = "{$field}: {$old} → {$new}";
        }

        return implode("\n", $lines);
    }

    public function getTableLabelAttribute(): string
    {
        return ucwords(str_replace('_', ' ', $this->table_name ?? ''));
    }

    // Methods
    public static function log(
        string $action,
        $model,
        $oldValues = null,
        $newValues = null,
        array $extra = []
    ): self {
        $tableName = $model instanceof Model ? $model->getTable() : ($extra['table'] ?? null);
        $recordId = $model instanceof Model ? $model->id : ($extra['record_id'] ?? null);

        // Calculate changes for update actions
        $changes = null;
        if ($action === self::ACTION_UPDATE && $oldValues && $newValues) {
            $changes = self::calculateChanges($oldValues, $newValues);
        }

        $log = new self([
            'user_id' => Auth::id(),
            'action' => $action,
            'table_name' => $tableName,
            'record_id' => $recordId,
            'old_values' => $oldValues ? (array) $oldValues : null,
            'new_values' => $newValues ? (array) $newValues : null,
            'changes' => $changes,
            'ip_address' => Request::ip(),
            'user_agent' => Request::userAgent(),
            'session_id' => session()->getId(),
            'request_method' => Request::method(),
            'request_url' => Request::fullUrl(),
            'description' => $extra['description'] ?? null,
            'created_at' => now()
        ]);

        $log->save();

        return $log;
    }

    public static function logAction(
        string $action,
        string $description,
        ?string $tableName = null,
        ?int $recordId = null
    ): self {
        return self::log($action, null, null, null, [
            'table' => $tableName,
            'record_id' => $recordId,
            'description' => $description
        ]);
    }

    public static function logLogin($userId, bool $success = true): self
    {
        return self::logAction(
            $success ? self::ACTION_LOGIN : 'login_failed',
            $success ? 'User logged in' : 'Failed login attempt',
            'users',
            $userId
        );
    }

    public static function logLogout($userId): self
    {
        return self::logAction(
            self::ACTION_LOGOUT,
            'User logged out',
            'users',
            $userId
        );
    }

    public static function logExport(string $tableName, array $criteria = []): self
    {
        return self::logAction(
            self::ACTION_EXPORT,
            'Exported data from ' . $tableName . ($criteria ? ' with filters' : ''),
            $tableName
        );
    }

    public static function logImport(string $tableName, int $recordCount): self
    {
        return self::logAction(
            self::ACTION_IMPORT,
            "Imported {$recordCount} records into {$tableName}",
            $tableName
        );
    }

    protected static function calculateChanges($oldValues, $newValues): array
    {
        $oldValues = (array) $oldValues;
        $newValues = (array) $newValues;

        $changes = [];
        $allKeys = array_unique(array_merge(array_keys($oldValues), array_keys($newValues)));

        foreach ($allKeys as $key) {
            $old = $oldValues[$key] ?? null;
            $new = $newValues[$key] ?? null;

            // Skip timestamps and internal fields
            if (in_array($key, ['created_at', 'updated_at', 'deleted_at'])) {
                continue;
            }

            // Compare values
            if ($old !== $new) {
                // Handle JSON/array comparison
                if (is_array($old) && is_array($new)) {
                    if (json_encode($old) !== json_encode($new)) {
                        $changes[$key] = ['old' => $old, 'new' => $new];
                    }
                } elseif ($old != $new) {
                    $changes[$key] = ['old' => $old, 'new' => $new];
                }
            }
        }

        return $changes;
    }

    // Statistics methods
    public static function getUserActivityStats(int $userId, $days = 30): array
    {
        $logs = self::byUser($userId)
            ->where('created_at', '>=', now()->subDays($days))
            ->get();

        return [
            'total_actions' => $logs->count(),
            'by_action' => $logs->groupBy('action')->map->count(),
            'by_date' => $logs->groupBy(function ($log) {
                return $log->created_at->toDateString();
            })->map->count(),
            'most_common_action' => $logs->groupBy('action')->sortDesc()->keys()->first(),
            'last_login' => $logs->where('action', self::ACTION_LOGIN)->last()?->created_at,
            'last_action' => $logs->first()?->created_at
        ];
    }

    public static function getTableActivityStats(string $tableName, $days = 30): array
    {
        $logs = self::byTable($tableName)
            ->where('created_at', '>=', now()->subDays($days))
            ->get();

        return [
            'total_actions' => $logs->count(),
            'creates' => $logs->where('action', self::ACTION_CREATE)->count(),
            'updates' => $logs->where('action', self::ACTION_UPDATE)->count(),
            'deletes' => $logs->where('action', self::ACTION_DELETE)->count(),
            'views' => $logs->where('action', self::ACTION_VIEW)->count(),
            'exports' => $logs->where('action', self::ACTION_EXPORT)->count(),
            'unique_users' => $logs->pluck('user_id')->unique()->count(),
            'by_user' => $logs->groupBy('user_id')->map->count()
        ];
    }

    public static function getSystemActivitySummary($days = 7): array
    {
        $logs = self::where('created_at', '>=', now()->subDays($days))->get();

        return [
            'total_actions' => $logs->count(),
            'unique_users' => $logs->pluck('user_id')->unique()->count(),
            'by_action' => $logs->groupBy('action')->map->count(),
            'by_table' => $logs->groupBy('table_name')->map->count(),
            'peak_hours' => $logs->groupBy(function ($log) {
                return $log->created_at->format('H');
            })->map->count(),
            'most_active_user' => $logs->groupBy('user_id')->map->count()->sortDesc()->keys()->first(),
            'most_active_table' => $logs->groupBy('table_name')->map->count()->sortDesc()->keys()->first()
        ];
    }
}
