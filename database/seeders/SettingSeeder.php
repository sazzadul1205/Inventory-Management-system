<?php
// database/seeders/SettingSeeder.php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key checks temporarily
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // Truncate the table
        Setting::truncate();

        // Enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Initializing system settings...');
        $this->command->getOutput()->progressStart(100);

        // Initialize all default settings
        $this->initializeDefaultSettings();

        // Create additional custom settings
        $this->createCustomSettings();

        // Create user preferences
        $this->createUserPreferences();

        $this->command->getOutput()->progressFinish();

        // Display statistics
        $this->displayStatistics();

        // Clear settings cache
        Setting::clearSettingsCache();
    }

    /**
     * Initialize all default system settings.
     */
    protected function initializeDefaultSettings(): void
    {
        $this->command->info("\nInitializing default system settings...");

        Setting::initializeDefaults();

        $this->command->getOutput()->progressAdvance(30);
    }

    /**
     * Create additional custom settings.
     */
    protected function createCustomSettings(): void
    {
        $this->command->info("\nCreating custom settings...");

        // 1. Warehouse settings
        $this->createWarehouseSettings();

        // 2. Barcode settings
        $this->createBarcodeSettings();

        // 3. Print settings
        $this->createPrintSettings();

        // 4. Integration settings
        $this->createIntegrationSettings();

        // 5. API settings
        $this->createApiSettings();

        // 6. Audit settings
        $this->createAuditSettings();

        // 7. Performance settings
        $this->createPerformanceSettings();

        // 8. Theme settings
        $this->createThemeSettings();

        // 9. Notification templates
        $this->createNotificationTemplates();

        // 10. Import/Export settings
        $this->createImportExportSettings();

        // 11. Location/zone settings
        $this->createLocationSettings();

        // 12. Supplier settings
        $this->createSupplierSettings();

        // 13. Customer settings
        $this->createCustomerSettings();

        // 14. Tax settings
        $this->createTaxSettings();

        // 15. Shipping settings
        $this->createShippingSettings();
    }

    /**
     * Create warehouse settings.
     */
    protected function createWarehouseSettings(): void
    {
        $this->command->info('  - Creating warehouse settings...');

        $settings = [
            'warehouse_enable_zones' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable warehouse zones',
            ],
            'warehouse_enable_bin_locations' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable bin locations',
            ],
            'warehouse_default_receiving_zone' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'RECEIVING',
                'description' => 'Default receiving zone',
            ],
            'warehouse_default_shipping_zone' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'SHIPPING',
                'description' => 'Default shipping zone',
            ],
            'warehouse_default_quarantine_zone' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'QUARANTINE',
                'description' => 'Default quarantine zone',
            ],
            'warehouse_pick_method' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'wave',
                'description' => 'Picking method (wave/zone/batch)',
            ],
            'warehouse_enable_cycle_counting' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable cycle counting',
            ],
        ];

        $this->createSettingsInGroup($settings, 'warehouse', false);
    }

    /**
     * Create barcode settings.
     */
    protected function createBarcodeSettings(): void
    {
        $this->command->info('  - Creating barcode settings...');

        $settings = [
            'barcode_format' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'CODE128',
                'description' => 'Barcode format',
            ],
            'barcode_width' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 2,
                'description' => 'Barcode width',
            ],
            'barcode_height' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 50,
                'description' => 'Barcode height',
            ],
            'barcode_show_text' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Show text below barcode',
            ],
            'barcode_product_prefix' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'PRD',
                'description' => 'Product barcode prefix',
            ],
            'barcode_location_prefix' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'LOC',
                'description' => 'Location barcode prefix',
            ],
            'barcode_enable_scan_validation' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Validate scanned barcodes',
            ],
        ];

        $this->createSettingsInGroup($settings, 'barcode', false);
    }

    /**
     * Create print settings.
     */
    protected function createPrintSettings(): void
    {
        $this->command->info('  - Creating print settings...');

        $settings = [
            'print_paper_size' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'letter',
                'description' => 'Default paper size',
            ],
            'print_orientation' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'portrait',
                'description' => 'Default orientation',
            ],
            'print_include_logo' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Include logo on prints',
            ],
            'print_picking_slip_format' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'standard',
                'description' => 'Picking slip format',
            ],
            'print_packing_slip_format' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'standard',
                'description' => 'Packing slip format',
            ],
            'print_invoice_template' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'standard',
                'description' => 'Invoice template',
            ],
            'print_label_printer' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'Zebra ZT410',
                'description' => 'Default label printer',
            ],
        ];

        $this->createSettingsInGroup($settings, 'printing', false);
    }

    /**
     * Create integration settings.
     */
    protected function createIntegrationSettings(): void
    {
        $this->command->info('  - Creating integration settings...');

        $settings = [
            'integration_quickbooks_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Enable QuickBooks integration',
            ],
            'integration_quickbooks_client_id' => [
                'type' => Setting::TYPE_STRING,
                'value' => '',
                'description' => 'QuickBooks Client ID',
                'encrypted' => true,
            ],
            'integration_quickbooks_client_secret' => [
                'type' => Setting::TYPE_PASSWORD,
                'value' => '',
                'description' => 'QuickBooks Client Secret',
                'encrypted' => true,
            ],
            'integration_shopify_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Enable Shopify integration',
            ],
            'integration_shopify_api_key' => [
                'type' => Setting::TYPE_STRING,
                'value' => '',
                'description' => 'Shopify API Key',
                'encrypted' => true,
            ],
            'integration_shopify_store_url' => [
                'type' => Setting::TYPE_URL,
                'value' => '',
                'description' => 'Shopify Store URL',
            ],
            'integration_amazon_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Enable Amazon integration',
            ],
        ];

        $this->createSettingsInGroup($settings, 'integrations', false);
    }

    /**
     * Create API settings.
     */
    protected function createApiSettings(): void
    {
        $this->command->info('  - Creating API settings...');

        $settings = [
            'api_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable API access',
            ],
            'api_rate_limit_per_minute' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 60,
                'description' => 'API rate limit per minute',
            ],
            'api_key_expiry_days' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 365,
                'description' => 'API key expiry in days',
            ],
            'api_enable_webhooks' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable webhooks',
            ],
            'api_webhook_retry_attempts' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 3,
                'description' => 'Webhook retry attempts',
            ],
            'api_debug_mode' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'API debug mode',
            ],
        ];

        $this->createSettingsInGroup($settings, 'api', false);
    }

    /**
     * Create audit settings.
     */
    protected function createAuditSettings(): void
    {
        $this->command->info('  - Creating audit settings...');

        $settings = [
            'audit_log_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable audit logging',
            ],
            'audit_log_retention_days' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 90,
                'description' => 'Audit log retention days',
            ],
            'audit_log_level' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'detailed',
                'description' => 'Audit log level',
            ],
            'audit_track_login_attempts' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Track login attempts',
            ],
            'audit_track_inventory_changes' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Track inventory changes',
            ],
        ];

        $this->createSettingsInGroup($settings, 'audit', false);
    }

    /**
     * Create performance settings.
     */
    protected function createPerformanceSettings(): void
    {
        $this->command->info('  - Creating performance settings...');

        $settings = [
            'performance_cache_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable caching',
            ],
            'performance_cache_ttl' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 3600,
                'description' => 'Cache TTL in seconds',
            ],
            'performance_query_logging' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Enable query logging',
            ],
            'performance_slow_query_threshold' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 1000,
                'description' => 'Slow query threshold (ms)',
            ],
            'performance_max_export_rows' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 10000,
                'description' => 'Maximum export rows',
            ],
        ];

        $this->createSettingsInGroup($settings, 'performance', false);
    }

    /**
     * Create theme settings.
     */
    protected function createThemeSettings(): void
    {
        $this->command->info('  - Creating theme settings...');

        $settings = [
            'theme_primary_color' => [
                'type' => Setting::TYPE_STRING,
                'value' => '#2563eb',
                'description' => 'Primary color',
            ],
            'theme_secondary_color' => [
                'type' => Setting::TYPE_STRING,
                'value' => '#4f46e5',
                'description' => 'Secondary color',
            ],
            'theme_sidebar_color' => [
                'type' => Setting::TYPE_STRING,
                'value' => '#1e293b',
                'description' => 'Sidebar color',
            ],
            'theme_dark_mode' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Enable dark mode',
            ],
            'theme_compact_mode' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Enable compact mode',
            ],
            'theme_font_size' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'medium',
                'description' => 'Font size',
            ],
        ];

        $this->createSettingsInGroup($settings, 'theme', false);
    }

    /**
     * Create notification templates.
     */
    protected function createNotificationTemplates(): void
    {
        $this->command->info('  - Creating notification templates...');

        $settings = [
            'email_template_low_stock' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'Low stock alert: {{product}} has {{quantity}} units remaining.',
                'description' => 'Low stock email template',
            ],
            'email_template_order_confirmation' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'Order #{{order}} has been confirmed. Total: {{total}}',
                'description' => 'Order confirmation template',
            ],
            'email_template_shipment_confirmation' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'Order #{{order}} has been shipped. Tracking: {{tracking}}',
                'description' => 'Shipment confirmation template',
            ],
            'sms_template_low_stock' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'Low stock: {{product}}',
                'description' => 'Low stock SMS template',
            ],
        ];

        $this->createSettingsInGroup($settings, 'notification_templates', false);
    }

    /**
     * Create import/export settings.
     */
    protected function createImportExportSettings(): void
    {
        $this->command->info('  - Creating import/export settings...');

        $settings = [
            'import_csv_delimiter' => [
                'type' => Setting::TYPE_STRING,
                'value' => ',',
                'description' => 'CSV delimiter',
            ],
            'import_csv_enclosure' => [
                'type' => Setting::TYPE_STRING,
                'value' => '"',
                'description' => 'CSV enclosure',
            ],
            'import_max_file_size' => [
                'type' => Setting::TYPE_INTEGER,
                'value' => 10240,
                'description' => 'Max import file size (KB)',
            ],
            'export_default_format' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'xlsx',
                'description' => 'Default export format',
            ],
            'export_include_headers' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Include headers in export',
            ],
            'import_validate_data' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Validate import data',
            ],
        ];

        $this->createSettingsInGroup($settings, 'import_export', false);
    }

    /**
     * Create location settings.
     */
    protected function createLocationSettings(): void
    {
        $this->command->info('  - Creating location settings...');

        $settings = [
            'location_format' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'zone-aisle-rack-shelf-bin',
                'description' => 'Location format',
            ],
            'location_separator' => [
                'type' => Setting::TYPE_STRING,
                'value' => '-',
                'description' => 'Location separator',
            ],
            'location_enable_zones' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable zones',
            ],
            'location_enable_aisles' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable aisles',
            ],
            'location_enable_racks' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable racks',
            ],
            'location_enable_shelves' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable shelves',
            ],
            'location_enable_bins' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable bins',
            ],
        ];

        $this->createSettingsInGroup($settings, 'location', false);
    }

    /**
     * Create supplier settings.
     */
    protected function createSupplierSettings(): void
    {
        $this->command->info('  - Creating supplier settings...');

        $settings = [
            'supplier_require_tax_id' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Require supplier tax ID',
            ],
            'supplier_default_payment_terms' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'net30',
                'description' => 'Default supplier payment terms',
            ],
            'supplier_enable_rating' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable supplier rating',
            ],
            'supplier_auto_generate_code' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Auto-generate supplier codes',
            ],
            'supplier_code_prefix' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'SUP',
                'description' => 'Supplier code prefix',
            ],
        ];

        $this->createSettingsInGroup($settings, 'supplier', false);
    }

    /**
     * Create customer settings.
     */
    protected function createCustomerSettings(): void
    {
        $this->command->info('  - Creating customer settings...');

        $settings = [
            'customer_require_tax_id' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Require customer tax ID',
            ],
            'customer_default_payment_terms' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'net30',
                'description' => 'Default customer payment terms',
            ],
            'customer_enable_credit_limit' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable credit limits',
            ],
            'customer_default_credit_limit' => [
                'type' => Setting::TYPE_FLOAT,
                'value' => 5000,
                'description' => 'Default credit limit',
            ],
            'customer_auto_generate_code' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Auto-generate customer codes',
            ],
            'customer_code_prefix' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'CUST',
                'description' => 'Customer code prefix',
            ],
        ];

        $this->createSettingsInGroup($settings, 'customer', false);
    }

    /**
     * Create tax settings.
     */
    protected function createTaxSettings(): void
    {
        $this->command->info('  - Creating tax settings...');

        $settings = [
            'tax_enabled' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable tax calculation',
            ],
            'tax_inclusive_pricing' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => false,
                'description' => 'Prices include tax',
            ],
            'tax_rounding_method' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'round',
                'description' => 'Tax rounding method',
            ],
            'tax_apply_to_shipping' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Apply tax to shipping',
            ],
            'tax_calculation_order' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'before_discount',
                'description' => 'Tax calculation order',
            ],
        ];

        $this->createSettingsInGroup($settings, 'tax', false);
    }

    /**
     * Create shipping settings.
     */
    protected function createShippingSettings(): void
    {
        $this->command->info('  - Creating shipping settings...');

        $settings = [
            'shipping_enable_carrier_integration' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable carrier integration',
            ],
            'shipping_default_carrier' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'UPS',
                'description' => 'Default shipping carrier',
            ],
            'shipping_default_service' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'Ground',
                'description' => 'Default shipping service',
            ],
            'shipping_auto_calculate' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Auto-calculate shipping',
            ],
            'shipping_free_shipping_threshold' => [
                'type' => Setting::TYPE_FLOAT,
                'value' => 100,
                'description' => 'Free shipping threshold',
            ],
            'shipping_enable_tracking_notifications' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable tracking notifications',
            ],
        ];

        $this->createSettingsInGroup($settings, 'shipping', false);
    }

    /**
     * Create user preferences.
     */
    protected function createUserPreferences(): void
    {
        $this->command->info('  - Creating user preferences...');

        $settings = [
            'user_default_dashboard' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'default',
                'description' => 'Default dashboard',
            ],
            'user_enable_shortcuts' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Enable keyboard shortcuts',
            ],
            'user_show_help_tips' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Show help tips',
            ],
            'user_auto_save_filters' => [
                'type' => Setting::TYPE_BOOLEAN,
                'value' => true,
                'description' => 'Auto-save filters',
            ],
            'user_default_view_mode' => [
                'type' => Setting::TYPE_STRING,
                'value' => 'grid',
                'description' => 'Default view mode',
            ],
        ];

        $this->createSettingsInGroup($settings, 'user_preferences', false);
    }

    /**
     * Create settings in a specific group.
     */
    protected function createSettingsInGroup(array $settings, string $group, bool $isSystem = true): void
    {
        foreach ($settings as $key => $config) {
            Setting::firstOrCreate(
                ['setting_key' => $key],
                [
                    'setting_value' => $config['value'],
                    'setting_type' => $config['type'],
                    'group' => $group,
                    'description' => $config['description'],
                    'is_encrypted' => $config['encrypted'] ?? false,
                    'is_system' => $isSystem,
                ]
            );

            $this->command->getOutput()->progressAdvance(1);
        }
    }

    /**
     * Display statistics after seeding.
     */
    protected function displayStatistics(): void
    {
        $this->command->info("\nSettings Statistics:");

        $totalSettings = Setting::count();
        $systemSettings = Setting::system()->count();
        $userSettings = Setting::nonSystem()->count();
        $encryptedSettings = Setting::encrypted()->count();

        $this->command->table(
            ['Metric', 'Value'],
            [
                ['Total Settings', $totalSettings],
                ['System Settings', $systemSettings],
                ['User-Defined Settings', $userSettings],
                ['Encrypted Settings', $encryptedSettings],
            ]
        );

        // Show settings by group
        $this->command->info("\nSettings by Group:");
        $byGroup = Setting::select('group', DB::raw('count(*) as count'))
            ->groupBy('group')
            ->orderBy('count', 'desc')
            ->get();

        $this->command->table(
            ['Group', 'Count'],
            $byGroup->map(function ($item) {
                return [
                    ucwords(str_replace('_', ' ', $item->group)),
                    $item->count,
                ];
            })->toArray()
        );

        // Test retrieving a sample setting
        $sampleKey = 'company_name';
        $sampleValue = Setting::get($sampleKey);

        $this->command->info("\nSample Setting: {$sampleKey} = {$sampleValue}");
    }
}
