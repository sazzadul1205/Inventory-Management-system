<?php
// database/seeders/DatabaseSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

// Page Related Seeders
use Database\Seeders\PageRelatedSeeders\{
    PageSeeders,
    PageSectionsSeeder,
};

use Database\Seeders\PageRelatedSeeders\SectionVariantSeeder\{
    FAQPageSectionVariantSeeder,
    HomePageSectionVariantSeeder,
    NewsPageSectionVariantSeeder,
    BlogPageSectionVariantSeeder,
    ContactPageSectionVariantSeeder,
    AboutUsPageSectionVariantSeeder,
    ServicesPageSectionVariantSeeder,
    FeaturesPageSectionVariantSeeder,
    PartnersPageSectionVariantSeeder,
    HowItWorksPageSectionVariantSeeder,
    IndustriesPageSectionVariantSeeder,
    WhyChooseUsPageSectionVariantSeeder,
    PricingPlansPageSectionVariantSeeder,
    TestimonialsPageSectionVariantSeeder,
    SuccessStoriesPageSectionVariantSeeder,
};

class DatabaseSeeder extends Seeder
{
    /**
     * Available seeding options
     */
    private const SEEDING_OPTIONS = [
        'all' => '🚀 Seed Everything (Pages + Data)',
        'pages' => '📄 Seed Only Pages & Sections',
        'data' => '📦 Seed Only Data (Products, Orders, etc.)',
        'cancel' => '❌ Cancel',
    ];

    /**
     * Available data seeding options
     */
    private const DATA_SEEDING_OPTIONS = [
        'all_data' => '📦 Seed All Data',
        'selective' => '🎯 Select Specific Data',
        'skip' => '⏭️  Skip',
    ];

    /**
     * Available selective data categories
     */
    private const SELECTIVE_DATA_CATEGORIES = [
        '1' => ['name' => '🏢 Foundation (Settings, Roles)', 'seeders' => ['SettingSeeder', 'RoleSeeder']],
        '2' => ['name' => '👤 Core (Users, Departments)', 'seeders' => ['UserSeeder', 'DepartmentSeeder']],
        '3' => ['name' => '🏭 Warehouse & Locations', 'seeders' => ['WarehouseSeeder', 'LocationSeeder']],
        '4' => ['name' => '📦 Product Catalog', 'seeders' => ['CategorySeeder', 'ProductSeeder']],
        '5' => ['name' => '🤝 Suppliers & Customers', 'seeders' => ['SupplierSeeder', 'CustomerSeeder']],
        '6' => ['name' => '🔗 Product-Supplier Relationships', 'seeders' => ['ProductSupplierSeeder']],
        '7' => ['name' => '📊 Inventory', 'seeders' => ['InventorySeeder']],
        '8' => ['name' => '🔄 Stock Operations', 'seeders' => ['StockCountSeeder', 'StockCountItemSeeder', 'StockTransferSeeder', 'StockTransferItemSeeder']],
        '9' => ['name' => '📋 Orders & Fulfillment', 'seeders' => [
            'PurchaseOrderSeeder',
            'PurchaseOrderItemSeeder',
            'PurchaseReceiptSeeder',
            'PurchaseReceiptItemSeeder',
            'SalesOrderSeeder',
            'SalesOrderItemSeeder',
            'ShipmentSeeder',
            'ShipmentItemSeeder'
        ]],
        '10' => ['name' => '📝 Movements & Logs', 'seeders' => ['InventoryMovementSeeder', 'AuditLogSeeder']],
    ];

    /**
     * Page section variant seeders in correct order
     */
    private const PAGE_VARIANT_SEEDERS = [
        FAQPageSectionVariantSeeder::class,
        BlogPageSectionVariantSeeder::class,
        HomePageSectionVariantSeeder::class,
        NewsPageSectionVariantSeeder::class,
        ContactPageSectionVariantSeeder::class,
        AboutUsPageSectionVariantSeeder::class,
        PartnersPageSectionVariantSeeder::class,
        ServicesPageSectionVariantSeeder::class,
        FeaturesPageSectionVariantSeeder::class,
        HowItWorksPageSectionVariantSeeder::class,
        IndustriesPageSectionVariantSeeder::class,
        WhyChooseUsPageSectionVariantSeeder::class,
        PricingPlansPageSectionVariantSeeder::class,
        TestimonialsPageSectionVariantSeeder::class,
        SuccessStoriesPageSectionVariantSeeder::class,
    ];

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->validateProductionEnvironment();

        $this->displayHeader();

        $choice = $this->getSeedingChoice();

        if ($choice === 'cancel') {
            $this->command->info('❌ Seeding cancelled.');
            return;
        }

        $this->command->newLine();

        $this->executeSeedingStrategy($choice);

        $this->displayCompletionMessage();
    }

    /**
     * Validate production environment seeding
     */
    private function validateProductionEnvironment(): void
    {
        if (!App::environment('production')) {
            return;
        }

        $confirm = $this->command->confirm(
            '⚠️  You are in PRODUCTION environment! Seeding will modify your database. Are you sure you want to continue?'
        );

        if (!$confirm) {
            $this->command->error('❌ Seeding cancelled.');
            exit(0);
        }
    }

    /**
     * Display header with styling
     */
    private function displayHeader(): void
    {
        $this->command->newLine();
        $this->command->info('🎯 Database Seeder Menu');
        $this->command->line('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }

    /**
     * Display completion message
     */
    private function displayCompletionMessage(): void
    {
        $this->command->newLine();
        $this->command->info('✅ Database seeding completed successfully!');
        $this->command->newLine();
    }

    /**
     * Get seeding choice from user
     */
    private function getSeedingChoice(): string
    {
        return $this->command->choice(
            'What would you like to seed?',
            self::SEEDING_OPTIONS,
            'all'
        );
    }

    /**
     * Execute seeding based on chosen strategy
     */
    private function executeSeedingStrategy(string $choice): void
    {
        match ($choice) {
            'all' => $this->seedAll(),
            'pages' => $this->seedPagesAndSections(),
            'data' => $this->seedData(),
            default => null,
        };
    }

    /**
     * Seed everything
     */
    private function seedAll(): void
    {
        $this->seedPagesAndSections();
        $this->seedData();
    }

    /**
     * Seed Pages and Sections only
     */
    private function seedPagesAndSections(): void
    {
        $this->command->info('📄 Seeding Pages and Sections...');
        $this->command->line('──────────────────────────────────────');

        $confirm = $this->command->confirm('Do you want to seed Pages?', true);

        if (!$confirm) {
            $this->command->warn('⚠️  Skipped Pages and Sections seeding.');
            return;
        }

        $this->callSafely(PageSeeders::class);
        $this->callSafely(PageSectionsSeeder::class);

        $this->seedPageVariants();

        $this->command->info('✅ Pages and Sections seeded successfully!');
    }

    /**
     * Seed all page variant seeders
     */
    private function seedPageVariants(): void
    {
        foreach (self::PAGE_VARIANT_SEEDERS as $seeder) {
            $this->callSafely($seeder);
        }
    }

    /**
     * Seed Data (Products, Orders, etc.)
     */
    private function seedData(): void
    {
        $this->command->info('📦 Seeding Data (Products, Orders, etc.)...');
        $this->command->line('──────────────────────────────────────────');

        $confirm = $this->command->confirm('Do you want to seed all data?', true);

        if (!$confirm) {
            $this->command->warn('⚠️  Skipped Data seeding.');
            return;
        }

        $seedOption = $this->command->choice(
            'What data would you like to seed?',
            self::DATA_SEEDING_OPTIONS,
            'all_data'
        );

        match ($seedOption) {
            'skip' => $this->command->warn('⚠️  Skipped Data seeding.'),
            'selective' => $this->seedSelectiveData(),
            default => $this->seedAllData(),
        };
    }

    /**
     * Seed all data in correct order
     */
    private function seedAllData(): void
    {
        $dataSeeders = $this->getOrderedDataSeeders();

        foreach ($dataSeeders as $step => $seeders) {
            $this->command->info($step);

            foreach ($seeders as $seeder) {
                $this->callSafely($seeder);
            }
        }
    }

    /**
     * Get ordered data seeders with descriptive steps
     */
    private function getOrderedDataSeeders(): array
    {
        return [
            '📦 Seeding foundation data...' => [
                SettingSeeder::class,
                RoleSeeder::class,
            ],
            '🏗️  Seeding core structure...' => [
                UserSeeder::class,
                DepartmentSeeder::class,
            ],
            '🏭 Seeding warehouse structure...' => [
                WarehouseSeeder::class,
                LocationSeeder::class,
            ],
            '📦 Seeding product catalog...' => [
                CategorySeeder::class,
                ProductSeeder::class,
            ],
            '🤝 Seeding suppliers and customers...' => [
                SupplierSeeder::class,
                CustomerSeeder::class,
            ],
            '🔗 Seeding product-supplier relationships...' => [
                ProductSupplierSeeder::class,
            ],
            '📊 Seeding inventory...' => [
                InventorySeeder::class,
            ],
            '🔄 Seeding stock operations...' => [
                StockCountSeeder::class,
                StockCountItemSeeder::class,
                StockTransferSeeder::class,
                StockTransferItemSeeder::class,
            ],
            '📋 Seeding orders and fulfillment...' => [
                PurchaseOrderSeeder::class,
                PurchaseOrderItemSeeder::class,
                PurchaseReceiptSeeder::class,
                PurchaseReceiptItemSeeder::class,
                SalesOrderSeeder::class,
                SalesOrderItemSeeder::class,
                ShipmentSeeder::class,
                ShipmentItemSeeder::class,
            ],
            '📝 Seeding movements and logs...' => [
                InventoryMovementSeeder::class,
                AuditLogSeeder::class,
            ],
        ];
    }

    /**
     * Seed selective data with interactive prompts
     */
    private function seedSelectiveData(): void
    {
        $selectedCategories = $this->getSelectedCategories();

        if (empty($selectedCategories) || in_array('all', $selectedCategories)) {
            $this->seedAllData();
            return;
        }

        foreach ($selectedCategories as $categoryKey) {
            if (!isset(self::SELECTIVE_DATA_CATEGORIES[$categoryKey])) {
                continue;
            }

            $category = self::SELECTIVE_DATA_CATEGORIES[$categoryKey];
            $this->command->info($category['name']);

            foreach ($category['seeders'] as $seeder) {
                $this->callSafely($seeder);
            }
        }
    }

    /**
     * Get selected categories from user input
     */
    private function getSelectedCategories(): array
    {
        $choices = $this->command->choice(
            'Select which data to seed (comma separated numbers or type "all")',
            $this->buildSelectiveDataOptions(),
            'all',
            null,
            true // Multiple selections allowed
        );

        // Convert to array if string
        if (is_string($choices)) {
            $choices = array_map('trim', explode(',', $choices));
        }

        return $choices;
    }

    /**
     * Build selective data options array for choice menu
     */
    private function buildSelectiveDataOptions(): array
    {
        $options = [];

        foreach (self::SELECTIVE_DATA_CATEGORIES as $key => $category) {
            $options[$key] = $category['name'];
        }

        $options['all'] = '📦 Seed All Data';

        return $options;
    }

    /**
     * Safely call a seeder if it exists
     */
    private function callSafely(string $seederClass): void
    {
        if (!class_exists($seederClass)) {
            $this->command->warn("⚠️  Seeder not found: {$seederClass}");
            return;
        }

        try {
            $this->call($seederClass);
        } catch (\Exception $e) {
            $this->command->error("❌ Failed to seed: {$seederClass}");
            $this->command->error("   Error: {$e->getMessage()}");

            if ($this->command->confirm('Continue with remaining seeders?', true)) {
                return;
            }

            throw $e;
        }
    }
}
