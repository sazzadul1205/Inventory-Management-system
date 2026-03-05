<?php
// app/Models/Setting.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class Setting extends Model
{
    use HasFactory;

    protected $table = 'settings';

    protected $fillable = [
        'setting_key',
        'setting_value',
        'setting_type',
        'group',
        'description',
        'is_encrypted',
        'is_system'
    ];

    protected $casts = [
        'is_encrypted' => 'boolean',
        'is_system' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Type constants
    const TYPE_STRING = 'string';
    const TYPE_INTEGER = 'integer';
    const TYPE_BOOLEAN = 'boolean';
    const TYPE_FLOAT = 'float';
    const TYPE_JSON = 'json';
    const TYPE_ARRAY = 'array';
    const TYPE_DATE = 'date';
    const TYPE_DATETIME = 'datetime';
    const TYPE_EMAIL = 'email';
    const TYPE_URL = 'url';
    const TYPE_PASSWORD = 'password';

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

    // Group constants
    const GROUP_GENERAL = 'general';
    const GROUP_INVENTORY = 'inventory';
    const GROUP_SALES = 'sales';
    const GROUP_PURCHASES = 'purchases';
    const GROUP_NOTIFICATIONS = 'notifications';
    const GROUP_SYSTEM = 'system';
    const GROUP_SECURITY = 'security';
    const GROUP_EMAIL = 'email';
    const GROUP_BACKUP = 'backup';

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

    // Default system settings
    public static $defaults = [
        'company_name' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_GENERAL, 'value' => 'My Company', 'description' => 'Company name'],
        'company_email' => ['type' => self::TYPE_EMAIL, 'group' => self::GROUP_GENERAL, 'value' => 'info@company.com', 'description' => 'Company email address'],
        'company_phone' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_GENERAL, 'value' => '', 'description' => 'Company phone number'],
        'company_address' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_GENERAL, 'value' => '', 'description' => 'Company address'],
        'company_tax_id' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_GENERAL, 'value' => '', 'description' => 'Company tax ID/VAT number'],

        'inventory_low_stock_threshold' => ['type' => self::TYPE_INTEGER, 'group' => self::GROUP_INVENTORY, 'value' => 10, 'description' => 'Low stock threshold percentage'],
        'inventory_enable_batch_tracking' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_INVENTORY, 'value' => true, 'description' => 'Enable batch number tracking'],
        'inventory_enable_serial_tracking' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_INVENTORY, 'value' => true, 'description' => 'Enable serial number tracking'],
        'inventory_default_valuation_method' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_INVENTORY, 'value' => 'weighted_average', 'description' => 'Default inventory valuation method'],

        'sales_order_prefix' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SALES, 'value' => 'SO', 'description' => 'Sales order number prefix'],
        'sales_enable_auto_allocation' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_SALES, 'value' => true, 'description' => 'Auto-allocate inventory on order approval'],
        'sales_default_payment_terms' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SALES, 'value' => 'net30', 'description' => 'Default payment terms'],

        'purchase_order_prefix' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_PURCHASES, 'value' => 'PO', 'description' => 'Purchase order number prefix'],
        'purchase_enable_auto_reorder' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_PURCHASES, 'value' => false, 'description' => 'Enable automatic reordering'],

        'notification_low_stock' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_NOTIFICATIONS, 'value' => true, 'description' => 'Notify on low stock'],
        'notification_email' => ['type' => self::TYPE_EMAIL, 'group' => self::GROUP_NOTIFICATIONS, 'value' => '', 'description' => 'Notification email address'],

        'system_timezone' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SYSTEM, 'value' => 'UTC', 'description' => 'System timezone'],
        'system_date_format' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SYSTEM, 'value' => 'Y-m-d', 'description' => 'Date format'],
        'system_time_format' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SYSTEM, 'value' => 'H:i:s', 'description' => 'Time format'],
        'system_currency' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SYSTEM, 'value' => 'USD', 'description' => 'Default currency'],
        'system_language' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_SYSTEM, 'value' => 'en', 'description' => 'Default language'],

        'security_session_timeout' => ['type' => self::TYPE_INTEGER, 'group' => self::GROUP_SECURITY, 'value' => 120, 'description' => 'Session timeout in minutes'],
        'security_max_login_attempts' => ['type' => self::TYPE_INTEGER, 'group' => self::GROUP_SECURITY, 'value' => 5, 'description' => 'Maximum login attempts before lockout'],
        'security_lockout_duration' => ['type' => self::TYPE_INTEGER, 'group' => self::GROUP_SECURITY, 'value' => 30, 'description' => 'Lockout duration in minutes'],
        'security_two_factor_required' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_SECURITY, 'value' => false, 'description' => 'Require two-factor authentication'],

        'email_smtp_host' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_EMAIL, 'value' => '', 'description' => 'SMTP host', 'encrypted' => true],
        'email_smtp_port' => ['type' => self::TYPE_INTEGER, 'group' => self::GROUP_EMAIL, 'value' => 587, 'description' => 'SMTP port'],
        'email_smtp_username' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_EMAIL, 'value' => '', 'description' => 'SMTP username', 'encrypted' => true],
        'email_smtp_password' => ['type' => self::TYPE_PASSWORD, 'group' => self::GROUP_EMAIL, 'value' => '', 'description' => 'SMTP password', 'encrypted' => true],
        'email_encryption' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_EMAIL, 'value' => 'tls', 'description' => 'Email encryption (tls/ssl)'],

        'backup_enabled' => ['type' => self::TYPE_BOOLEAN, 'group' => self::GROUP_BACKUP, 'value' => false, 'description' => 'Enable automatic backups'],
        'backup_frequency' => ['type' => self::TYPE_STRING, 'group' => self::GROUP_BACKUP, 'value' => 'daily', 'description' => 'Backup frequency'],
        'backup_retention_days' => ['type' => self::TYPE_INTEGER, 'group' => self::GROUP_BACKUP, 'value' => 30, 'description' => 'Backup retention period in days']
    ];

    // Relationships
    public function auditLogs()
    {
        return $this->morphMany(AuditLog::class, 'record');
    }

    // Scopes
    public function scopeByGroup($query, $group)
    {
        return $query->where('group', $group);
    }

    public function scopeByKey($query, $key)
    {
        return $query->where('setting_key', $key);
    }

    public function scopeSystem($query)
    {
        return $query->where('is_system', true);
    }

    public function scopeNonSystem($query)
    {
        return $query->where('is_system', false);
    }

    public function scopeEncrypted($query)
    {
        return $query->where('is_encrypted', true);
    }

    // Accessors
    public function getTypedValueAttribute()
    {
        $value = $this->is_encrypted ? Crypt::decryptString($this->setting_value) : $this->setting_value;

        return $this->castValue($value);
    }

    public function getGroupLabelAttribute(): string
    {
        return self::$groups[$this->group] ?? $this->group;
    }

    public function getTypeLabelAttribute(): string
    {
        return self::$types[$this->setting_type] ?? $this->setting_type;
    }

    // Mutators
    public function setSettingValueAttribute($value)
    {
        $this->attributes['setting_value'] = $this->is_encrypted ?
            Crypt::encryptString($value) :
            $value;
    }

    // Methods
    protected function castValue($value)
    {
        switch ($this->setting_type) {
            case self::TYPE_INTEGER:
                return (int) $value;
            case self::TYPE_BOOLEAN:
                return filter_var($value, FILTER_VALIDATE_BOOLEAN);
            case self::TYPE_FLOAT:
                return (float) $value;
            case self::TYPE_JSON:
            case self::TYPE_ARRAY:
                return is_string($value) ? json_decode($value, true) : $value;
            case self::TYPE_DATE:
                return $value ? \Carbon\Carbon::parse($value)->toDateString() : null;
            case self::TYPE_DATETIME:
                return $value ? \Carbon\Carbon::parse($value) : null;
            default:
                return $value;
        }
    }

    protected function prepareForDatabase($value)
    {
        switch ($this->setting_type) {
            case self::TYPE_JSON:
            case self::TYPE_ARRAY:
                return json_encode($value);
            case self::TYPE_BOOLEAN:
                return $value ? '1' : '0';
            default:
                return (string) $value;
        }
    }

    public function updateValue($value, ?string $description = null): bool
    {
        $oldValue = $this->typed_value;

        $this->setting_value = $this->prepareForDatabase($value);

        if ($description) {
            $this->description = $description;
        }

        $result = $this->save();

        if ($result) {
            AuditLog::log(
                'update',
                $this,
                $oldValue,
                $value,
                ['field' => 'setting_value', 'key' => $this->setting_key]
            );
        }

        return $result;
    }

    // Static methods
    public static function get(string $key, $default = null)
    {
        $setting = self::where('setting_key', $key)->first();

        if (!$setting) {
            return $default;
        }

        return $setting->typed_value;
    }

    public static function set(string $key, $value, ?string $description = null): bool
    {
        $setting = self::firstOrNew(['setting_key' => $key]);

        if (!$setting->exists) {
            $setting->setting_type = self::inferType($value);
            $setting->group = self::GROUP_GENERAL;
        }

        return $setting->updateValue($value, $description);
    }

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

    public static function getByGroup(string $group): array
    {
        return self::where('group', $group)
            ->get()
            ->mapWithKeys(function ($setting) {
                return [$setting->setting_key => $setting->typed_value];
            })
            ->toArray();
    }

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

    protected static function inferType($value): string
    {
        if (is_int($value)) {
            return self::TYPE_INTEGER;
        } elseif (is_bool($value)) {
            return self::TYPE_BOOLEAN;
        } elseif (is_float($value)) {
            return self::TYPE_FLOAT;
        } elseif (is_array($value)) {
            return self::TYPE_ARRAY;
        } elseif (is_object($value)) {
            return self::TYPE_JSON;
        } elseif (filter_var($value, FILTER_VALIDATE_EMAIL)) {
            return self::TYPE_EMAIL;
        } elseif (filter_var($value, FILTER_VALIDATE_URL)) {
            return self::TYPE_URL;
        } else {
            return self::TYPE_STRING;
        }
    }

    /**
     * Get setting value with type casting
     */
    public function getValueAttribute()
    {
        return $this->typed_value;
    }

    /**
     * Clear cached settings
     */
    public static function clearCache(): void
    {
        cache()->forget('system_settings');
    }

    /**
     * Get all settings as cached collection
     */
    public static function getCached(): array
    {
        return cache()->remember('system_settings', 3600, function () {
            return self::all()->mapWithKeys(function ($setting) {
                return [$setting->setting_key => $setting->typed_value];
            })->toArray();
        });
    }
}
