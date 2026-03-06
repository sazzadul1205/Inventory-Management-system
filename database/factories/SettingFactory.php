<?php
// database/factories/SettingFactory.php

namespace Database\Factories;

use App\Models\Setting;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Setting>
 */
class SettingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Setting::class;

    /**
     * Predefined setting keys with their configurations
     */
    protected array $predefinedSettings = [
        // Company Information
        'company_name' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => true,
        ],
        'company_email' => [
            'type' => Setting::TYPE_EMAIL,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => true,
        ],
        'company_phone' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => true,
        ],
        'company_address' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => true,
        ],
        'company_tax_id' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => true,
        ],
        'company_logo_url' => [
            'type' => Setting::TYPE_URL,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => false,
        ],
        'company_favicon_url' => [
            'type' => Setting::TYPE_URL,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => false,
        ],
        'company_website' => [
            'type' => Setting::TYPE_URL,
            'group' => Setting::GROUP_GENERAL,
            'encrypted' => false,
            'system' => false,
        ],

        // Inventory Settings
        'inventory_low_stock_threshold' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_high_stock_threshold' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_default_valuation_method' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_enable_batch_tracking' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_enable_serial_tracking' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_enable_expiry_tracking' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_auto_reorder' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],
        'inventory_cycle_count_frequency_days' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => false,
        ],
        'inventory_allow_negative_stock' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_INVENTORY,
            'encrypted' => false,
            'system' => true,
        ],

        // Sales Settings
        'sales_order_prefix' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],
        'sales_invoice_prefix' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],
        'sales_default_payment_terms' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],
        'sales_tax_rate_default' => [
            'type' => Setting::TYPE_FLOAT,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],
        'sales_enable_discounts' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],
        'sales_max_discount_percentage' => [
            'type' => Setting::TYPE_FLOAT,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => false,
        ],
        'sales_auto_allocate_inventory' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],
        'sales_order_require_approval' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SALES,
            'encrypted' => false,
            'system' => true,
        ],

        // Purchase Settings
        'purchase_order_prefix' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_PURCHASES,
            'encrypted' => false,
            'system' => true,
        ],
        'purchase_receipt_prefix' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_PURCHASES,
            'encrypted' => false,
            'system' => true,
        ],
        'purchase_default_payment_terms' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_PURCHASES,
            'encrypted' => false,
            'system' => true,
        ],
        'purchase_enable_auto_reorder' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_PURCHASES,
            'encrypted' => false,
            'system' => true,
        ],
        'purchase_reorder_lead_time_days' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_PURCHASES,
            'encrypted' => false,
            'system' => false,
        ],
        'purchase_require_approval' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_PURCHASES,
            'encrypted' => false,
            'system' => true,
        ],

        // Notification Settings
        'notification_low_stock_alert' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => false,
            'system' => true,
        ],
        'notification_low_stock_threshold' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => false,
            'system' => true,
        ],
        'notification_email_recipients' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => false,
            'system' => false,
        ],
        'notification_sms_enabled' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => false,
            'system' => false,
        ],
        'notification_slack_webhook_url' => [
            'type' => Setting::TYPE_URL,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => true,
            'system' => false,
        ],
        'notification_order_confirmation' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => false,
            'system' => true,
        ],
        'notification_shipment_confirmation' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_NOTIFICATIONS,
            'encrypted' => false,
            'system' => true,
        ],

        // System Settings
        'system_timezone' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_date_format' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_time_format' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_currency' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_currency_symbol' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_language' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_items_per_page' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_decimal_places' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_thousand_separator' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],
        'system_decimal_separator' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_SYSTEM,
            'encrypted' => false,
            'system' => true,
        ],

        // Security Settings
        'security_session_timeout' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_max_login_attempts' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_lockout_duration' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_two_factor_enabled' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_password_min_length' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_password_require_special' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_password_require_numbers' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],
        'security_password_require_uppercase' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_SECURITY,
            'encrypted' => false,
            'system' => true,
        ],

        // Email Settings
        'email_smtp_host' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => true,
            'system' => true,
        ],
        'email_smtp_port' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => false,
            'system' => true,
        ],
        'email_smtp_username' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => true,
            'system' => true,
        ],
        'email_smtp_password' => [
            'type' => Setting::TYPE_PASSWORD,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => true,
            'system' => true,
        ],
        'email_encryption' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => false,
            'system' => true,
        ],
        'email_from_address' => [
            'type' => Setting::TYPE_EMAIL,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => false,
            'system' => true,
        ],
        'email_from_name' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_EMAIL,
            'encrypted' => false,
            'system' => true,
        ],

        // Backup Settings
        'backup_enabled' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_BACKUP,
            'encrypted' => false,
            'system' => true,
        ],
        'backup_frequency' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_BACKUP,
            'encrypted' => false,
            'system' => true,
        ],
        'backup_retention_days' => [
            'type' => Setting::TYPE_INTEGER,
            'group' => Setting::GROUP_BACKUP,
            'encrypted' => false,
            'system' => true,
        ],
        'backup_time' => [
            'type' => Setting::TYPE_STRING,
            'group' => Setting::GROUP_BACKUP,
            'encrypted' => false,
            'system' => true,
        ],
        'backup_include_files' => [
            'type' => Setting::TYPE_BOOLEAN,
            'group' => Setting::GROUP_BACKUP,
            'encrypted' => false,
            'system' => true,
        ],

        // Custom fields
        'custom_field_product_1' => [
            'type' => Setting::TYPE_STRING,
            'group' => 'custom_fields',
            'encrypted' => false,
            'system' => false,
        ],
        'custom_field_product_2' => [
            'type' => Setting::TYPE_STRING,
            'group' => 'custom_fields',
            'encrypted' => false,
            'system' => false,
        ],
        'custom_field_customer_1' => [
            'type' => Setting::TYPE_STRING,
            'group' => 'custom_fields',
            'encrypted' => false,
            'system' => false,
        ],
        'dashboard_widgets' => [
            'type' => Setting::TYPE_ARRAY,
            'group' => 'dashboard',
            'encrypted' => false,
            'system' => false,
        ],
        'report_defaults' => [
            'type' => Setting::TYPE_JSON,
            'group' => 'reports',
            'encrypted' => false,
            'system' => false,
        ],
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $key = $this->faker->randomElement(array_keys($this->predefinedSettings));
        $config = $this->predefinedSettings[$key];

        $value = $this->generateValueForType($config['type'], $key);

        return [
            'setting_key' => $key,
            'setting_value' => $value,
            'setting_type' => $config['type'],
            'group' => $config['group'],
            'description' => $this->generateDescription($key),
            'is_encrypted' => $config['encrypted'],
            'is_system' => $config['system'],
            'created_at' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a value based on setting type and key.
     */
    protected function generateValueForType(string $type, string $key): mixed
    {
        return match ($type) {
            Setting::TYPE_STRING => $this->generateStringValue($key),
            Setting::TYPE_INTEGER => $this->generateIntegerValue($key),
            Setting::TYPE_BOOLEAN => $this->faker->boolean(70),
            Setting::TYPE_FLOAT => $this->generateFloatValue($key),
            Setting::TYPE_EMAIL => $this->faker->companyEmail(),
            Setting::TYPE_URL => $this->faker->url(),
            Setting::TYPE_JSON, Setting::TYPE_ARRAY => $this->generateArrayValue($key),
            Setting::TYPE_DATE => $this->faker->date(),
            Setting::TYPE_DATETIME => $this->faker->dateTime(),
            Setting::TYPE_PASSWORD => 'secret_password_' . $this->faker->word(),
            default => $this->faker->sentence(),
        };
    }

    /**
     * Generate string value based on key.
     */
    protected function generateStringValue(string $key): string
    {
        return match ($key) {
            'company_name' => $this->faker->company(),
            'company_phone' => $this->faker->phoneNumber(),
            'company_address' => $this->faker->address(),
            'company_tax_id' => $this->faker->numerify('##-#######'),
            'sales_order_prefix' => 'SO',
            'purchase_order_prefix' => 'PO',
            'sales_invoice_prefix' => 'INV',
            'purchase_receipt_prefix' => 'RCT',
            'sales_default_payment_terms' => $this->faker->randomElement(['net30', 'net45', 'net60', 'due_on_receipt']),
            'purchase_default_payment_terms' => $this->faker->randomElement(['net30', 'net45', 'net60', 'due_on_receipt']),
            'inventory_default_valuation_method' => $this->faker->randomElement(['fifo', 'lifo', 'weighted_average', 'standard_cost']),
            'system_timezone' => $this->faker->timezone(),
            'system_date_format' => $this->faker->randomElement(['Y-m-d', 'm/d/Y', 'd/m/Y', 'd.m.Y']),
            'system_time_format' => $this->faker->randomElement(['H:i:s', 'h:i:s A', 'H:i']),
            'system_currency' => $this->faker->currencyCode(),
            'system_currency_symbol' => $this->faker->randomElement(['$', '€', '£', '¥', '₽']),
            'system_language' => $this->faker->randomElement(['en', 'es', 'fr', 'de', 'it', 'pt']),
            'system_thousand_separator' => $this->faker->randomElement([',', '.', ' ']),
            'system_decimal_separator' => $this->faker->randomElement(['.', ',']),
            'backup_frequency' => $this->faker->randomElement(['hourly', 'daily', 'weekly', 'monthly']),
            'backup_time' => $this->faker->time(),
            'email_smtp_host' => $this->faker->randomElement(['smtp.gmail.com', 'smtp.office365.com', 'smtp.mailgun.org']),
            'email_encryption' => $this->faker->randomElement(['tls', 'ssl', 'none']),
            'email_from_name' => $this->faker->company(),
            default => $this->faker->words(3, true),
        };
    }

    /**
     * Generate integer value based on key.
     */
    protected function generateIntegerValue(string $key): int
    {
        return match ($key) {
            'inventory_low_stock_threshold' => $this->faker->numberBetween(5, 20),
            'inventory_high_stock_threshold' => $this->faker->numberBetween(100, 500),
            'inventory_cycle_count_frequency_days' => $this->faker->numberBetween(30, 90),
            'purchase_reorder_lead_time_days' => $this->faker->numberBetween(3, 21),
            'system_items_per_page' => $this->faker->randomElement([10, 25, 50, 100]),
            'system_decimal_places' => $this->faker->randomElement([0, 2, 3, 4]),
            'security_session_timeout' => $this->faker->randomElement([30, 60, 120, 240]),
            'security_max_login_attempts' => $this->faker->randomElement([3, 5, 10]),
            'security_lockout_duration' => $this->faker->randomElement([15, 30, 60]),
            'security_password_min_length' => $this->faker->randomElement([8, 10, 12, 16]),
            'backup_retention_days' => $this->faker->randomElement([7, 14, 30, 60, 90]),
            'email_smtp_port' => $this->faker->randomElement([25, 465, 587, 2525]),
            default => $this->faker->numberBetween(1, 100),
        };
    }

    /**
     * Generate float value based on key.
     */
    protected function generateFloatValue(string $key): float
    {
        return match ($key) {
            'sales_tax_rate_default' => $this->faker->randomFloat(2, 0, 25),
            'sales_max_discount_percentage' => $this->faker->randomFloat(2, 10, 50),
            default => $this->faker->randomFloat(2, 0.5, 100),
        };
    }

    /**
     * Generate array/JSON value based on key.
     */
    protected function generateArrayValue(string $key): array
    {
        return match ($key) {
            'dashboard_widgets' => [
                'inventory_summary' => $this->faker->boolean(),
                'recent_orders' => $this->faker->boolean(),
                'low_stock_alerts' => $this->faker->boolean(),
                'sales_chart' => $this->faker->boolean(),
                'quick_actions' => $this->faker->boolean(),
            ],
            'report_defaults' => [
                'date_range' => $this->faker->randomElement(['today', 'yesterday', 'this_week', 'this_month', 'last_month']),
                'format' => $this->faker->randomElement(['pdf', 'excel', 'csv']),
                'include_charts' => $this->faker->boolean(),
            ],
            default => [
                'option1' => $this->faker->word(),
                'option2' => $this->faker->word(),
                'enabled' => $this->faker->boolean(),
            ],
        };
    }

    /**
     * Generate description based on key.
     */
    protected function generateDescription(string $key): string
    {
        return ucwords(str_replace('_', ' ', $key));
    }

    /**
     * Indicate that the setting is system critical.
     */
    public function system(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_system' => true,
            ];
        });
    }

    /**
     * Indicate that the setting is user-defined.
     */
    public function userDefined(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_system' => false,
            ];
        });
    }

    /**
     * Indicate that the setting is encrypted.
     */
    public function encrypted(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_encrypted' => true,
            ];
        });
    }

    /**
     * Set a specific key.
     */
    public function withKey(string $key): static
    {
        return $this->state(function (array $attributes) use ($key) {
            return [
                'setting_key' => $key,
            ];
        });
    }

    /**
     * Set a specific group.
     */
    public function inGroup(string $group): static
    {
        return $this->state(function (array $attributes) use ($group) {
            return [
                'group' => $group,
            ];
        });
    }

    /**
     * Set a specific type.
     */
    public function ofType(string $type): static
    {
        return $this->state(function (array $attributes) use ($type) {
            return [
                'setting_type' => $type,
            ];
        });
    }

    /**
     * Set a specific value.
     */
    public function withValue(mixed $value): static
    {
        return $this->state(function (array $attributes) use ($value) {
            return [
                'setting_value' => $value,
            ];
        });
    }

    /**
     * Create a company information setting.
     */
    public function companyInfo(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'group' => Setting::GROUP_GENERAL,
                'is_system' => true,
            ];
        });
    }

    /**
     * Create an inventory setting.
     */
    public function inventorySetting(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'group' => Setting::GROUP_INVENTORY,
                'is_system' => true,
            ];
        });
    }

    /**
     * Create an email setting (encrypted).
     */
    public function emailSetting(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'group' => Setting::GROUP_EMAIL,
                'is_encrypted' => true,
            ];
        });
    }
}
