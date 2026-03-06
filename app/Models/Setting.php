<?php
// app/Models/Setting.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Carbon;

/**
 * Settings Model
 * 
 * Manages system-wide configuration settings with support for various data types,
 * encryption, and grouping. Provides a flexible key-value store with type casting,
 * caching, and audit logging. Handles default system settings and supports
 * runtime configuration management.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $setting_key
 * @property mixed $setting_value
 * @property string $setting_type
 * @property string $group
 * @property string|null $description
 * @property bool $is_encrypted
 * @property bool $is_system
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read mixed $typed_value
 * @property-read string $group_label
 * @property-read string $type_label
 * @property-read mixed $value
 */
class Setting extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'settings';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'setting_key',
        'setting_value',
        'setting_type',
        'group',
        'description',
        'is_encrypted',
        'is_system'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_encrypted' => 'boolean',
        'is_system' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * --------------------------------------------------------------------------
     * Type Constants
     * --------------------------------------------------------------------------
     */

    /** @var string String type */
    const TYPE_STRING = 'string';

    /** @var string Integer type */
    const TYPE_INTEGER = 'integer';

    /** @var string Boolean type */
    const TYPE_BOOLEAN = 'boolean';

    /** @var string Float type */
    const TYPE_FLOAT = 'float';

    /** @var string JSON type */
    const TYPE_JSON = 'json';

    /** @var string Array type */
    const TYPE_ARRAY = 'array';

    /** @var string Date type */
    const TYPE_DATE = 'date';

    /** @var string Datetime type */
    const TYPE_DATETIME = 'datetime';

    /** @var string Email type */
    const TYPE_EMAIL = 'email';

    /** @var string URL type */
    const TYPE_URL = 'url';

    /** @var string Password type (encrypted) */
    const TYPE_PASSWORD = 'password';

    /**
     * Human-readable type labels.
     *
     * @var array<string, string>
     */
    public static $types = [
        self::TYPE_STRING => 'String',
        self::TYPE_INTEGER => 'Integer',
        self::TYPE_BOOLEAN => 'Boolean',
        self::TYPE_FLOAT => 'Float',
        self::TYPE_JSON => 'JSON',
        self::TYPE_ARRAY => 'Array',
        self::TYPE_DATE => 'Date',
        self::TYPE_DATETIME => 'Datetime',
        self::TYPE_EMAIL => 'Email',
        self::TYPE_URL => 'URL',
        self::TYPE_PASSWORD => 'Password'
    ];

    /**
     * --------------------------------------------------------------------------
     * Group Constants
     * --------------------------------------------------------------------------
     */

    /** @var string General settings group */
    const GROUP_GENERAL = 'general';

    /** @var string Inventory settings group */
    const GROUP_INVENTORY = 'inventory';

    /** @var string Sales settings group */
    const GROUP_SALES = 'sales';

    /** @var string Purchases settings group */
    const GROUP_PURCHASES = 'purchases';

    /** @var string Notifications settings group */
    const GROUP_NOTIFICATIONS = 'notifications';

    /** @var string System settings group */
    const GROUP_SYSTEM = 'system';

    /** @var string Security settings group */
    const GROUP_SECURITY = 'security';

    /** @var string Email settings group */
    const GROUP_EMAIL = 'email';

    /** @var string Backup settings group */
    const GROUP_BACKUP = 'backup';

    /**
     * Human-readable group labels.
     *
     * @var array<string, string>
     */
    public static $groups = [
        self::GROUP_GENERAL => 'General',
        self::GROUP_INVENTORY => 'Inventory',
        self::GROUP_SALES => 'Sales',
        self::GROUP_PURCHASES => 'Purchases',
        self::GROUP_NOTIFICATIONS => 'Notifications',
        self::GROUP_SYSTEM => 'System',
        self::GROUP_SECURITY => 'Security',
        self::GROUP_EMAIL => 'Email',
        self::GROUP_BACKUP => 'Backup'
    ];

    /**
     * --------------------------------------------------------------------------
     * Default System Settings
     * --------------------------------------------------------------------------
     */

    /**
     * Default system settings configuration.
     *
     * @var array<string, array{
     *     type: string,
     *     group: string,
     *     value: mixed,
     *     description: string,
     *     encrypted?: bool
     * }>
     */
    public static $defaults = [
        // General settings
        'company_name' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_GENERAL,
            'value' => 'My Company',
            'description' => 'Company name'
        ],
        'company_email' => [
            'type' => self::TYPE_EMAIL,
            'group' => self::GROUP_GENERAL,
            'value' => 'info@company.com',
            'description' => 'Company email address'
        ],
        'company_phone' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_GENERAL,
            'value' => '',
            'description' => 'Company phone number'
        ],
        'company_address' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_GENERAL,
            'value' => '',
            'description' => 'Company address'
        ],
        'company_tax_id' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_GENERAL,
            'value' => '',
            'description' => 'Company tax ID/VAT number'
        ],

        // Inventory settings
        'inventory_low_stock_threshold' => [
            'type' => self::TYPE_INTEGER,
            'group' => self::GROUP_INVENTORY,
            'value' => 10,
            'description' => 'Low stock threshold percentage'
        ],
        'inventory_enable_batch_tracking' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_INVENTORY,
            'value' => true,
            'description' => 'Enable batch number tracking'
        ],
        'inventory_enable_serial_tracking' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_INVENTORY,
            'value' => true,
            'description' => 'Enable serial number tracking'
        ],
        'inventory_default_valuation_method' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_INVENTORY,
            'value' => 'weighted_average',
            'description' => 'Default inventory valuation method'
        ],

        // Sales settings
        'sales_order_prefix' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SALES,
            'value' => 'SO',
            'description' => 'Sales order number prefix'
        ],
        'sales_enable_auto_allocation' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_SALES,
            'value' => true,
            'description' => 'Auto-allocate inventory on order approval'
        ],
        'sales_default_payment_terms' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SALES,
            'value' => 'net30',
            'description' => 'Default payment terms'
        ],

        // Purchases settings
        'purchase_order_prefix' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_PURCHASES,
            'value' => 'PO',
            'description' => 'Purchase order number prefix'
        ],
        'purchase_enable_auto_reorder' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_PURCHASES,
            'value' => false,
            'description' => 'Enable automatic reordering'
        ],

        // Notifications settings
        'notification_low_stock' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_NOTIFICATIONS,
            'value' => true,
            'description' => 'Notify on low stock'
        ],
        'notification_email' => [
            'type' => self::TYPE_EMAIL,
            'group' => self::GROUP_NOTIFICATIONS,
            'value' => '',
            'description' => 'Notification email address'
        ],

        // System settings
        'system_timezone' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SYSTEM,
            'value' => 'UTC',
            'description' => 'System timezone'
        ],
        'system_date_format' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SYSTEM,
            'value' => 'Y-m-d',
            'description' => 'Date format'
        ],
        'system_time_format' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SYSTEM,
            'value' => 'H:i:s',
            'description' => 'Time format'
        ],
        'system_currency' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SYSTEM,
            'value' => 'USD',
            'description' => 'Default currency'
        ],
        'system_language' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_SYSTEM,
            'value' => 'en',
            'description' => 'Default language'
        ],

        // Security settings
        'security_session_timeout' => [
            'type' => self::TYPE_INTEGER,
            'group' => self::GROUP_SECURITY,
            'value' => 120,
            'description' => 'Session timeout in minutes'
        ],
        'security_max_login_attempts' => [
            'type' => self::TYPE_INTEGER,
            'group' => self::GROUP_SECURITY,
            'value' => 5,
            'description' => 'Maximum login attempts before lockout'
        ],
        'security_lockout_duration' => [
            'type' => self::TYPE_INTEGER,
            'group' => self::GROUP_SECURITY,
            'value' => 30,
            'description' => 'Lockout duration in minutes'
        ],
        'security_two_factor_required' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_SECURITY,
            'value' => false,
            'description' => 'Require two-factor authentication'
        ],

        // Email settings
        'email_smtp_host' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_EMAIL,
            'value' => '',
            'description' => 'SMTP host',
            'encrypted' => true
        ],
        'email_smtp_port' => [
            'type' => self::TYPE_INTEGER,
            'group' => self::GROUP_EMAIL,
            'value' => 587,
            'description' => 'SMTP port'
        ],
        'email_smtp_username' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_EMAIL,
            'value' => '',
            'description' => 'SMTP username',
            'encrypted' => true
        ],
        'email_smtp_password' => [
            'type' => self::TYPE_PASSWORD,
            'group' => self::GROUP_EMAIL,
            'value' => '',
            'description' => 'SMTP password',
            'encrypted' => true
        ],
        'email_encryption' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_EMAIL,
            'value' => 'tls',
            'description' => 'Email encryption (tls/ssl)'
        ],

        // Backup settings
        'backup_enabled' => [
            'type' => self::TYPE_BOOLEAN,
            'group' => self::GROUP_BACKUP,
            'value' => false,
            'description' => 'Enable automatic backups'
        ],
        'backup_frequency' => [
            'type' => self::TYPE_STRING,
            'group' => self::GROUP_BACKUP,
            'value' => 'daily',
            'description' => 'Backup frequency'
        ],
        'backup_retention_days' => [
            'type' => self::TYPE_INTEGER,
            'group' => self::GROUP_BACKUP,
            'value' => 30,
            'description' => 'Backup retention period in days'
        ]
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get all audit logs for this setting.
     *
     * @return MorphMany
     */
    public function auditLogs(): MorphMany
    {
        return $this->morphMany(AuditLog::class, 'record');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to filter by group.
     *
     * @param Builder $query
     * @param string $group
     * @return Builder
     */
    public function scopeByGroup(Builder $query, string $group): Builder
    {
        return $query->where('group', $group);
    }

    /**
     * Scope to filter by key.
     *
     * @param Builder $query
     * @param string $key
     * @return Builder
     */
    public function scopeByKey(Builder $query, string $key): Builder
    {
        return $query->where('setting_key', $key);
    }

    /**
     * Scope to system settings only.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeSystem(Builder $query): Builder
    {
        return $query->where('is_system', true);
    }

    /**
     * Scope to non-system settings only.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNonSystem(Builder $query): Builder
    {
        return $query->where('is_system', false);
    }

    /**
     * Scope to encrypted settings only.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeEncrypted(Builder $query): Builder
    {
        return $query->where('is_encrypted', true);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get typed and decrypted value.
     *
     * @return mixed
     */
    public function getTypedValueAttribute(): mixed
    {
        $value = $this->is_encrypted
            ? Crypt::decryptString($this->setting_value)
            : $this->setting_value;

        return $this->castValue($value);
    }

    /**
     * Get group label.
     *
     * @return string
     */
    public function getGroupLabelAttribute(): string
    {
        return self::$groups[$this->group] ?? ucfirst($this->group);
    }

    /**
     * Get type label.
     *
     * @return string
     */
    public function getTypeLabelAttribute(): string
    {
        return self::$types[$this->setting_type] ?? ucfirst($this->setting_type);
    }

    /**
     * Get value (alias for typed_value).
     *
     * @return mixed
     */
    public function getValueAttribute(): mixed
    {
        return $this->typed_value;
    }

    /**
     * Check if setting is modifiable.
     *
     * @return bool
     */
    public function getIsModifiableAttribute(): bool
    {
        $user = Auth::user();

        return !$this->is_system
            || ($user instanceof User && $user->hasPermission(Role::ALL_PERMISSION));
    }

    /**
     * --------------------------------------------------------------------------
     * Mutators
     * --------------------------------------------------------------------------
     */

    /**
     * Set setting value with encryption if needed.
     *
     * @param mixed $value
     * @return void
     */
    public function setSettingValueAttribute($value): void
    {
        $this->attributes['setting_value'] = $this->is_encrypted
            ? Crypt::encryptString((string) $value)
            : (string) $value;
    }

    /**
     * --------------------------------------------------------------------------
     * Casting Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Cast value based on setting type.
     *
     * @param mixed $value
     * @return mixed
     */
    protected function castValue(mixed $value): mixed
    {
        return match ($this->setting_type) {
            self::TYPE_INTEGER => (int) $value,
            self::TYPE_BOOLEAN => filter_var($value, FILTER_VALIDATE_BOOLEAN),
            self::TYPE_FLOAT => (float) $value,
            self::TYPE_JSON, self::TYPE_ARRAY => $this->castJsonValue($value),
            self::TYPE_DATE => $this->castDateValue($value),
            self::TYPE_DATETIME => $this->castDateTimeValue($value),
            default => (string) $value,
        };
    }

    /**
     * Cast JSON/Array value.
     *
     * @param mixed $value
     * @return mixed
     */
    protected function castJsonValue(mixed $value): mixed
    {
        if (is_string($value)) {
            return json_decode($value, true) ?? $value;
        }
        return $value;
    }

    /**
     * Cast date value.
     *
     * @param mixed $value
     * @return string|null
     */
    protected function castDateValue(mixed $value): ?string
    {
        return $value ? Carbon::parse($value)->toDateString() : null;
    }

    /**
     * cast datetime value.
     *
     * @param mixed $value
     * @return Carbon|null
     */
    protected function castDateTimeValue(mixed $value): ?Carbon
    {
        return $value ? Carbon::parse($value) : null;
    }

    /**
     * Prepare value for database storage.
     *
     * @param mixed $value
     * @return string
     */
    protected function prepareForDatabase(mixed $value): string
    {
        return match ($this->setting_type) {
            self::TYPE_JSON, self::TYPE_ARRAY => json_encode($value),
            self::TYPE_BOOLEAN => $value ? '1' : '0',
            default => (string) $value,
        };
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Update setting value.
     *
     * @param mixed $value
     * @param string|null $description
     * @return bool
     */
    public function updateValue(mixed $value, ?string $description = null): bool
    {
        $oldValue = $this->typed_value;

        $this->setting_value = $this->prepareForDatabase($value);

        if ($description) {
            $this->description = $description;
        }

        $result = $this->save();

        if ($result) {
            $this->logAudit($oldValue, $value);
            $this->clearSettingCache();
        }

        return $result;
    }

    /**
     * Log audit trail for setting change.
     *
     * @param mixed $oldValue
     * @param mixed $newValue
     * @return void
     */
    protected function logAudit(mixed $oldValue, mixed $newValue): void
    {
        AuditLog::log(
            AuditLog::ACTION_UPDATE,
            $this,
            ['setting_value' => $oldValue],
            ['setting_value' => $newValue],
            [
                'field' => 'setting_value',
                'key' => $this->setting_key,
                'description' => "Updated setting: {$this->setting_key}"
            ]
        );
    }

    /**
     * Clear cached settings.
     *
     * @return void
     */
    protected function clearSettingCache(): void
    {
        Cache::forget('system_settings');
        Cache::forget("setting_{$this->setting_key}");
    }

    /**
     * --------------------------------------------------------------------------
     * Static Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get a setting value by key.
     *
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        return Cache::remember("setting_{$key}", 3600, function () use ($key, $default) {
            $setting = self::where('setting_key', $key)->first();

            if (!$setting) {
                return $default;
            }

            return $setting->typed_value;
        });
    }

    /**
     * Set a setting value.
     *
     * @param string $key
     * @param mixed $value
     * @param string|null $description
     * @return bool
     */
    public static function set(string $key, mixed $value, ?string $description = null): bool
    {
        $setting = self::firstOrNew(['setting_key' => $key]);

        if (!$setting->exists) {
            $setting->setting_type = self::inferType($value);
            $setting->group = self::GROUP_GENERAL;
        }

        return $setting->updateValue($value, $description);
    }

    /**
     * Set multiple settings at once.
     *
     * @param array<string, mixed> $settings
     * @return bool
     */
    public static function setMany(array $settings): bool
    {
        $success = true;

        foreach ($settings as $key => $value) {
            if (!self::set($key, $value)) {
                $success = false;
            }
        }

        return $success;
    }

    /**
     * Get all settings in a group.
     *
     * @param string $group
     * @return array<string, mixed>
     */
    public static function getByGroup(string $group): array
    {
        return self::where('group', $group)
            ->get()
            ->mapWithKeys(fn($setting) => [$setting->setting_key => $setting->typed_value])
            ->toArray();
    }

    /**
     * Initialize default system settings.
     *
     * @return void
     */
    public static function initializeDefaults(): void
    {
        foreach (self::$defaults as $key => $config) {
            self::firstOrCreate(
                ['setting_key' => $key],
                [
                    'setting_value' => $config['value'],
                    'setting_type' => $config['type'],
                    'group' => $config['group'],
                    'description' => $config['description'],
                    'is_encrypted' => $config['encrypted'] ?? false,
                    'is_system' => true
                ]
            );
        }
    }

    /**
     * Infer setting type from value.
     *
     * @param mixed $value
     * @return string
     */
    protected static function inferType(mixed $value): string
    {
        return match (true) {
            is_int($value) => self::TYPE_INTEGER,
            is_bool($value) => self::TYPE_BOOLEAN,
            is_float($value) => self::TYPE_FLOAT,
            is_array($value) => self::TYPE_ARRAY,
            is_object($value) => self::TYPE_JSON,
            filter_var($value, FILTER_VALIDATE_EMAIL) => self::TYPE_EMAIL,
            filter_var($value, FILTER_VALIDATE_URL) => self::TYPE_URL,
            default => self::TYPE_STRING,
        };
    }

    /**
     * Clear all cached settings.
     *
     * @return void
     */
    public static function clearSettingsCache(): void
    {
        Cache::forget('system_settings');
    }

    /**
     * Get all settings as cached collection.
     *
     * @return array<string, mixed>
     */
    public static function getCached(): array
    {
        return Cache::remember('system_settings', 3600, function () {
            return self::all()
                ->mapWithKeys(fn($setting) => [$setting->setting_key => $setting->typed_value])
                ->toArray();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Boot Methods
     * --------------------------------------------------------------------------
     */

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted(): void
    {
        // Clear cache on save
        static::saved(function () {
            self::clearSettingsCache();
        });

        // Clear cache on delete
        static::deleted(function () {
            self::clearSettingsCache();
        });

        // Prevent deletion of system settings
        static::deleting(function (self $setting) {
            if ($setting->is_system) {
                throw new \Exception('System settings cannot be deleted.');
            }
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Validation Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Validate setting value against type.
     *
     * @param mixed $value
     * @return bool
     */
    public function validateValue(mixed $value): bool
    {
        return match ($this->setting_type) {
            self::TYPE_INTEGER => is_int($value) || (is_string($value) && ctype_digit($value)),
            self::TYPE_BOOLEAN => is_bool($value) || in_array($value, ['0', '1', 0, 1, true, false], true),
            self::TYPE_FLOAT => is_numeric($value),
            self::TYPE_EMAIL => filter_var($value, FILTER_VALIDATE_EMAIL) !== false,
            self::TYPE_URL => filter_var($value, FILTER_VALIDATE_URL) !== false,
            self::TYPE_DATE => strtotime($value) !== false,
            self::TYPE_DATETIME => strtotime($value) !== false,
            self::TYPE_JSON => is_array($value) || (is_string($value) && json_decode($value) !== null),
            self::TYPE_ARRAY => is_array($value),
            default => true,
        };
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for select dropdown.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'key' => $this->setting_key,
            'value' => $this->typed_value,
            'group' => $this->group_label,
            'description' => $this->description
        ];
    }

    /**
     * Get setting metadata.
     *
     * @return array
     */
    public function getMetadata(): array
    {
        return [
            'key' => $this->setting_key,
            'type' => $this->setting_type,
            'group' => $this->group,
            'is_encrypted' => $this->is_encrypted,
            'is_system' => $this->is_system,
            'modifiable' => $this->is_modifiable
        ];
    }
}
