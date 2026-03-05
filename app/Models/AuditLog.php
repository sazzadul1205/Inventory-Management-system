<?php
// app/Models/AuditLog.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Log;

/**
 * Audit Log Model
 * 
 * Handles comprehensive system activity logging with detailed tracking of user actions,
 * data changes, and system events. Provides extensive querying capabilities and
 * statistical analysis for monitoring and compliance purposes.
 * 
 * @package App\Models
 * @property int $id
 * @property int|null $user_id
 * @property string $action
 * @property string|null $table_name
 * @property int|null $record_id
 * @property array|null $old_values
 * @property array|null $new_values
 * @property array|null $changes
 * @property string|null $ip_address
 * @property string|null $user_agent
 * @property string|null $session_id
 * @property string|null $request_method
 * @property string|null $request_url
 * @property string|null $description
 * @property \DateTime $created_at
 */
class AuditLog extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'audit_logs';

    /** @var bool Disable Laravel's default timestamps */
    public $timestamps = false;

    /** @var array<string> Mass assignable attributes */
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

    /** @var array<string, string> Attribute casting definitions */
    protected $casts = [
        'old_values' => 'array',
        'new_values' => 'array',
        'changes' => 'array',
        'created_at' => 'datetime'
    ];

    /**
     * --------------------------------------------------------------------------
     * Action Constants
     * --------------------------------------------------------------------------
     */

    /** @var string CRUD operations */
    const ACTION_CREATE = 'create';
    const ACTION_UPDATE = 'update';
    const ACTION_DELETE = 'delete';
    const ACTION_VIEW = 'view';
    const ACTION_RESTORE = 'restore';

    /** @var string Authentication events */
    const ACTION_LOGIN = 'login';
    const ACTION_LOGOUT = 'logout';
    const ACTION_PASSWORD_CHANGE = 'password_change';
    const ACTION_PROFILE_UPDATE = 'profile_update';

    /** @var string Data operations */
    const ACTION_EXPORT = 'export';
    const ACTION_IMPORT = 'import';
    const ACTION_DOWNLOAD = 'download';
    const ACTION_PRINT = 'print';

    /** @var string Workflow actions */
    const ACTION_APPROVE = 'approve';
    const ACTION_REJECT = 'reject';
    const ACTION_CANCEL = 'cancel';
    const ACTION_COMPLETE = 'complete';

    /** @var string System operations */
    const ACTION_BACKUP = 'backup';
    const ACTION_RESTORE_BACKUP = 'restore_backup';
    const ACTION_SETTING_CHANGE = 'setting_change';
    const ACTION_PERMISSION_CHANGE = 'permission_change';

    /**
     * Human-readable action labels
     * 
     * @var array<string, string>
     */
    public static $actions = [
        self::ACTION_CREATE => 'Create',
        self::ACTION_UPDATE => 'Update',
        self::ACTION_DELETE => 'Delete',
        self::ACTION_VIEW => 'View',
        self::ACTION_RESTORE => 'Restore',
        self::ACTION_LOGIN => 'Login',
        self::ACTION_LOGOUT => 'Logout',
        self::ACTION_PASSWORD_CHANGE => 'Password Change',
        self::ACTION_PROFILE_UPDATE => 'Profile Update',
        self::ACTION_EXPORT => 'Export',
        self::ACTION_IMPORT => 'Import',
        self::ACTION_DOWNLOAD => 'Download',
        self::ACTION_PRINT => 'Print',
        self::ACTION_APPROVE => 'Approve',
        self::ACTION_REJECT => 'Reject',
        self::ACTION_CANCEL => 'Cancel',
        self::ACTION_COMPLETE => 'Complete',
        self::ACTION_BACKUP => 'Backup',
        self::ACTION_RESTORE_BACKUP => 'Restore Backup',
        self::ACTION_SETTING_CHANGE => 'Setting Change',
        self::ACTION_PERMISSION_CHANGE => 'Permission Change',
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the user who performed the action
     * 
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the parent auditable model (polymorphic relationship)
     * 
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function auditable()
    {
        return $this->morphTo();
    }

    /**
     * --------------------------------------------------------------------------
     * Query Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Filter logs by user
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int $userId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByUser($query, int $userId)
    {
        return $query->where('user_id', $userId);
    }

    /**
     * Filter logs by action type
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $action
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByAction($query, string $action)
    {
        return $query->where('action', $action);
    }

    /**
     * Filter logs by table name
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $tableName
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByTable($query, string $tableName)
    {
        return $query->where('table_name', $tableName);
    }

    /**
     * Filter logs by specific record
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $tableName
     * @param int $recordId
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByRecord($query, string $tableName, int $recordId)
    {
        return $query->where('table_name', $tableName)
            ->where('record_id', $recordId);
    }

    /**
     * Filter logs by date range
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByDateRange($query, string $startDate, string $endDate)
    {
        return $query->whereBetween('created_at', [$startDate, $endDate]);
    }

    /**
     * Filter logs by IP address
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $ipAddress
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByIpAddress($query, string $ipAddress)
    {
        return $query->where('ip_address', $ipAddress);
    }

    /**
     * Get today's logs
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeToday($query)
    {
        return $query->whereDate('created_at', now()->toDateString());
    }

    /**
     * Get this week's logs
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeThisWeek($query)
    {
        return $query->whereBetween('created_at', [
            now()->startOfWeek(),
            now()->endOfWeek()
        ]);
    }

    /**
     * Get this month's logs
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeThisMonth($query)
    {
        return $query->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year);
    }

    /**
     * Get logs with changes
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWithChanges($query)
    {
        return $query->whereNotNull('changes');
    }

    /**
     * Delete old logs (for cleanup jobs)
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param int $days
     * @return mixed
     */
    public function scopeCleanup($query, int $days = 90)
    {
        return $query->where('created_at', '<', now()->subDays($days))->delete();
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors & Mutators
     * --------------------------------------------------------------------------
     */

    /**
     * Get human-readable action label
     * 
     * @return string
     */
    public function getActionLabelAttribute(): string
    {
        return self::$actions[$this->action] ?? ucfirst($this->action);
    }

    /**
     * Get summarized changes as array
     * 
     * @return array<int, array{field: string, old: mixed, new: mixed}>
     */
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

    /**
     * Get formatted changes as readable string
     * 
     * @return string
     */
    public function getFormattedChangesAttribute(): string
    {
        if (!$this->changes) {
            return '';
        }

        $lines = [];
        foreach ($this->changes as $field => $change) {
            $old = $this->formatChangeValue($change['old'] ?? null);
            $new = $this->formatChangeValue($change['new'] ?? null);
            $lines[] = "{$field}: {$old} → {$new}";
        }

        return implode("\n", $lines);
    }

    /**
     * Get human-readable table name
     * 
     * @return string
     */
    public function getTableLabelAttribute(): string
    {
        return $this->table_name
            ? ucwords(str_replace('_', ' ', $this->table_name))
            : '';
    }

    /**
     * --------------------------------------------------------------------------
     * Logging Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Main logging method - creates a new audit log entry
     * 
     * @param string $action The action being performed
     * @param mixed $model The model instance or null for non-model actions
     * @param mixed|null $oldValues Previous values (for updates)
     * @param mixed|null $newValues New values (for updates)
     * @param array<string, mixed> $extra Additional data (description, table, record_id)
     * @return self
     */
    public static function log(
        string $action,
        $model = null,
        $oldValues = null,
        $newValues = null,
        array $extra = []
    ): self {
        try {
            $tableName = $model instanceof Model
                ? $model->getTable()
                : ($extra['table'] ?? null);

            $recordId = $model instanceof Model
                ? $model->id
                : ($extra['record_id'] ?? null);

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
        } catch (\Exception $e) {
            Log::error('Failed to create audit log: ' . $e->getMessage());
            // Return a new instance to prevent fatal errors in production
            return new self();
        }
    }

    /**
     * Log a simple action without model data
     * 
     * @param string $action
     * @param string $description
     * @param string|null $tableName
     * @param int|null $recordId
     * @return self
     */
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

    /**
     * Log login attempt
     * 
     * @param int $userId
     * @param bool $success
     * @return self
     */
    public static function logLogin(int $userId, bool $success = true): self
    {
        return self::logAction(
            $success ? self::ACTION_LOGIN : 'login_failed',
            $success ? 'User logged in successfully' : 'Failed login attempt',
            'users',
            $userId
        );
    }

    /**
     * Log logout event
     * 
     * @param int $userId
     * @return self
     */
    public static function logLogout(int $userId): self
    {
        return self::logAction(
            self::ACTION_LOGOUT,
            'User logged out',
            'users',
            $userId
        );
    }

    /**
     * Log data export
     * 
     * @param string $tableName
     * @param array<string, mixed> $criteria
     * @return self
     */
    public static function logExport(string $tableName, array $criteria = []): self
    {
        $description = 'Exported data from ' . $tableName;
        if (!empty($criteria)) {
            $description .= ' with filters: ' . json_encode($criteria);
        }

        return self::logAction(
            self::ACTION_EXPORT,
            $description,
            $tableName
        );
    }

    /**
     * Log data import
     * 
     * @param string $tableName
     * @param int $recordCount
     * @return self
     */
    public static function logImport(string $tableName, int $recordCount): self
    {
        return self::logAction(
            self::ACTION_IMPORT,
            "Imported {$recordCount} records into {$tableName}",
            $tableName
        );
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get user activity statistics
     * 
     * @param int $userId
     * @param int $days
     * @return array{
     *     total_actions: int,
     *     by_action: \Illuminate\Support\Collection,
     *     by_date: \Illuminate\Support\Collection,
     *     most_common_action: string|null,
     *     last_login: \DateTime|null,
     *     last_action: \DateTime|null
     * }
     */
    public static function getUserActivityStats(int $userId, int $days = 30): array
    {
        $logs = self::byUser($userId)
            ->where('created_at', '>=', now()->subDays($days))
            ->orderBy('created_at', 'desc')
            ->get();

        return [
            'total_actions' => $logs->count(),
            'by_action' => $logs->groupBy('action')->map->count(),
            'by_date' => $logs->groupBy(fn($log) => $log->created_at->toDateString())->map->count(),
            'most_common_action' => $logs->groupBy('action')->sortDesc()->keys()->first(),
            'last_login' => $logs->where('action', self::ACTION_LOGIN)->first()?->created_at,
            'last_action' => $logs->first()?->created_at
        ];
    }

    /**
     * Get table activity statistics
     * 
     * @param string $tableName
     * @param int $days
     * @return array{
     *     total_actions: int,
     *     creates: int,
     *     updates: int,
     *     deletes: int,
     *     views: int,
     *     exports: int,
     *     unique_users: int,
     *     by_user: \Illuminate\Support\Collection
     * }
     */
    public static function getTableActivityStats(string $tableName, int $days = 30): array
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

    /**
     * Get system activity summary
     * 
     * @param int $days
     * @return array{
     *     total_actions: int,
     *     unique_users: int,
     *     by_action: \Illuminate\Support\Collection,
     *     by_table: \Illuminate\Support\Collection,
     *     peak_hours: \Illuminate\Support\Collection,
     *     most_active_user: int|null,
     *     most_active_table: string|null
     * }
     */
    public static function getSystemActivitySummary(int $days = 7): array
    {
        $logs = self::where('created_at', '>=', now()->subDays($days))->get();

        return [
            'total_actions' => $logs->count(),
            'unique_users' => $logs->pluck('user_id')->unique()->count(),
            'by_action' => $logs->groupBy('action')->map->count(),
            'by_table' => $logs->groupBy('table_name')->map->count(),
            'peak_hours' => $logs->groupBy(fn($log) => $log->created_at->format('H'))->map->count(),
            'most_active_user' => $logs->groupBy('user_id')->map->count()->sortDesc()->keys()->first(),
            'most_active_table' => $logs->groupBy('table_name')->map->count()->sortDesc()->keys()->first()
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Protected Helper Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Calculate changes between old and new values
     * 
     * @param mixed $oldValues
     * @param mixed $newValues
     * @return array<string, array{old: mixed, new: mixed}>
     */
    protected static function calculateChanges($oldValues, $newValues): array
    {
        $oldValues = (array) $oldValues;
        $newValues = (array) $newValues;

        $changes = [];
        $allKeys = array_unique(array_merge(array_keys($oldValues), array_keys($newValues)));

        $ignoredFields = ['created_at', 'updated_at', 'deleted_at'];

        foreach ($allKeys as $key) {
            if (in_array($key, $ignoredFields)) {
                continue;
            }

            $old = $oldValues[$key] ?? null;
            $new = $newValues[$key] ?? null;

            if (self::valuesHaveChanged($old, $new)) {
                $changes[$key] = ['old' => $old, 'new' => $new];
            }
        }

        return $changes;
    }

    /**
     * Check if values have changed
     * 
     * @param mixed $old
     * @param mixed $new
     * @return bool
     */
    protected static function valuesHaveChanged($old, $new): bool
    {
        // Handle arrays/JSON
        if (is_array($old) && is_array($new)) {
            return json_encode($old) !== json_encode($new);
        }

        // Handle objects
        if (is_object($old) && is_object($new)) {
            return serialize($old) !== serialize($new);
        }

        // Handle scalar values
        return $old !== $new;
    }

    /**
     * Format a change value for display
     * 
     * @param mixed $value
     * @return string
     */
    protected function formatChangeValue($value): string
    {
        if (is_null($value)) {
            return 'null';
        }

        if (is_array($value) || is_object($value)) {
            return json_encode($value);
        }

        if (is_bool($value)) {
            return $value ? 'true' : 'false';
        }

        return (string) $value;
    }
}
