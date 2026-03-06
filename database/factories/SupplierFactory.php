<?php
// database/factories/SupplierFactory.php

namespace Database\Factories;

use App\Models\Product;
use App\Models\PurchaseOrder;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Supplier::class;

    /**
     * Common company suffixes
     */
    protected array $companySuffixes = [
        'Inc',
        'LLC',
        'Corp',
        'Industries',
        'Group',
        'Solutions',
        'Supplies',
        'Distributors',
        'Wholesale',
        'International',
        'Co',
        'Ltd',
        'Limited',
        'Enterprises',
        'Trading',
        'Imports',
        'Manufacturing',
        'Components',
        'Parts',
        'Materials'
    ];

    /**
     * Business types for supplier names
     */
    protected array $businessTypes = [
        'Industrial',
        'Electrical',
        'Mechanical',
        'Chemical',
        'Pharmaceutical',
        'Automotive',
        'Aerospace',
        'Medical',
        'Construction',
        'Packaging',
        'Raw Materials',
        'Finished Goods',
        'Electronics',
        'Hardware',
        'Plastics',
        'Metals',
        'Textiles',
        'Food',
        'Beverage',
        'Laboratory'
    ];

    /**
     * Payment terms options
     */
    protected array $paymentTerms = [
        'Net 30',
        'Net 45',
        'Net 60',
        'Due on Receipt',
        '2/10 Net 30',
        '1/10 Net 30',
        'COD',
        'Prepaid',
        'Letter of Credit',
        'Wire Transfer',
        'Net 15',
        'Net 90',
        'EOM 30'
    ];

    /**
     * Countries with their states/provinces for realistic data
     */
    protected array $countriesWithStates = [
        'USA' => ['CA', 'TX', 'NY', 'FL', 'IL', 'OH', 'PA', 'MI', 'NJ', 'NC'],
        'Canada' => ['ON', 'QC', 'BC', 'AB', 'MB', 'SK', 'NS', 'NB'],
        'Mexico' => ['CDMX', 'JAL', 'NLE', 'MEX', 'PUE'],
        'China' => ['GD', 'ZJ', 'JS', 'SH', 'BJ', 'SD'],
        'Germany' => ['BY', 'NW', 'BW', 'NI', 'HE'],
        'Japan' => ['TYO', 'OSA', 'AIC', 'HKD', 'FUK'],
        'UK' => ['ENG', 'SCT', 'WLS', 'NIR'],
        'India' => ['MH', 'KA', 'TN', 'DL', 'GJ'],
        'Brazil' => ['SP', 'RJ', 'MG', 'RS', 'PR'],
        'Italy' => ['LOM', 'LAZ', 'VEN', 'EMR', 'PIE']
    ];

    /**
     * Cities by country
     */
    protected array $citiesByCountry = [
        'USA' => ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
        'Canada' => ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City'],
        'Mexico' => ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'Leon'],
        'China' => ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Tianjin', 'Chongqing'],
        'Germany' => ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart'],
        'Japan' => ['Tokyo', 'Osaka', 'Nagoya', 'Yokohama', 'Fukuoka', 'Sapporo'],
        'UK' => ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool'],
        'India' => ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune'],
        'Brazil' => ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador'],
        'Italy' => ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa']
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $country = $this->faker->randomElement(array_keys($this->countriesWithStates));
        $states = $this->countriesWithStates[$country];
        $cities = $this->citiesByCountry[$country] ?? [$this->faker->city()];

        $hasRating = $this->faker->boolean(70); // 70% chance of having rating

        return [
            'supplier_code' => $this->generateSupplierCode(),
            'company_name' => $this->generateCompanyName(),
            'contact_person' => $this->faker->name(),
            'email' => $this->generateSupplierEmail(),
            'phone' => $this->faker->phoneNumber(),
            'mobile' => $this->faker->optional(0.5)->phoneNumber(),
            'address' => $this->faker->streetAddress(),
            'city' => $this->faker->randomElement($cities),
            'state' => $this->faker->randomElement($states),
            'country' => $country,
            'postal_code' => $this->faker->postcode(),
            'tax_id' => $this->generateTaxId($country),
            'payment_terms' => $this->faker->randomElement($this->paymentTerms),
            'lead_time_days' => $this->faker->numberBetween(1, 45),
            'rating' => $hasRating ? $this->faker->randomFloat(2, 3.0, 5.0) : null,
            'notes' => $this->faker->optional(0.3)->sentence(),
            'is_active' => $this->faker->boolean(90), // 90% active
            'created_at' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique supplier code.
     */
    protected function generateSupplierCode(): string
    {
        $prefix = 'SUP';
        $year = now()->format('Y');
        $random = $this->faker->unique()->numberBetween(1000, 9999);

        return "{$prefix}-{$year}-{$random}";
    }

    /**
     * Generate a company name.
     */
    protected function generateCompanyName(): string
    {
        $businessType = $this->faker->randomElement($this->businessTypes);
        $suffix = $this->faker->randomElement($this->companySuffixes);

        $formats = [
            "{$businessType} {$suffix}",
            "{$this->faker->lastName()} {$businessType} {$suffix}",
            "{$this->faker->city()} {$businessType} {$suffix}",
            "{$businessType} & Co. {$suffix}",
            "{$this->faker->company()} {$businessType}",
        ];

        return $this->faker->randomElement($formats);
    }

    /**
     * Generate supplier email.
     */
    protected function generateSupplierEmail(): string
    {
        $domains = ['supplier.com', 'industrial.com', 'materials.com', 'supply.com', 'parts.com'];
        $domain = $this->faker->randomElement($domains);

        return 'sales@' . strtolower(preg_replace('/[^a-z0-9]/', '', $this->company_name ?? 'supplier')) . '.' . $domain;
    }

    /**
     * Generate tax ID based on country.
     */
    protected function generateTaxId(string $country): string
    {
        return match ($country) {
            'USA' => $this->faker->numerify('##-#######'),
            'Canada' => $this->faker->bothify('?#########'),
            'UK' => $this->faker->bothify('GB### #### ##'),
            'Germany' => $this->faker->numerify('DE#########'),
            'Japan' => $this->faker->numerify('########'),
            default => $this->faker->bothify('??-#########'),
        };
    }

    /**
     * Indicate that the supplier is active.
     */
    public function active(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => true,
            ];
        });
    }

    /**
     * Indicate that the supplier is inactive.
     */
    public function inactive(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => false,
            ];
        });
    }

    /**
     * Set high rating (preferred supplier).
     */
    public function preferred(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'rating' => $this->faker->randomFloat(2, 4.5, 5.0),
                'notes' => 'Preferred supplier - high quality',
            ];
        });
    }

    /**
     * Set average rating.
     */
    public function averageRating(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'rating' => $this->faker->randomFloat(2, 3.0, 3.9),
            ];
        });
    }

    /**
     * Set low rating.
     */
    public function lowRating(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'rating' => $this->faker->randomFloat(2, 1.0, 2.9),
                'notes' => 'Performance issues - monitor closely',
            ];
        });
    }

    /**
     * Set fast delivery (low lead time).
     */
    public function fastDelivery(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'lead_time_days' => $this->faker->numberBetween(1, 3),
            ];
        });
    }

    /**
     * Set standard delivery.
     */
    public function standardDelivery(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'lead_time_days' => $this->faker->numberBetween(5, 10),
            ];
        });
    }

    /**
     * Set slow delivery.
     */
    public function slowDelivery(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'lead_time_days' => $this->faker->numberBetween(15, 30),
            ];
        });
    }

    /**
     * Set specific country.
     */
    public function fromCountry(string $country): static
    {
        $states = $this->countriesWithStates[$country] ?? ['State'];
        $cities = $this->citiesByCountry[$country] ?? [$this->faker->city()];

        return $this->state(function (array $attributes) use ($country, $states, $cities) {
            return [
                'country' => $country,
                'state' => $this->faker->randomElement($states),
                'city' => $this->faker->randomElement($cities),
            ];
        });
    }

    /**
     * Set domestic supplier (USA).
     */
    public function domestic(): static
    {
        return $this->fromCountry('USA');
    }

    /**
     * Set international supplier.
     */
    public function international(): static
    {
        $countries = array_keys($this->countriesWithStates);
        $country = $this->faker->randomElement(array_diff($countries, ['USA']));

        return $this->fromCountry($country);
    }

    /**
     * Set specific payment terms.
     */
    public function withPaymentTerms(string $terms): static
    {
        return $this->state(function (array $attributes) use ($terms) {
            return [
                'payment_terms' => $terms,
            ];
        });
    }

    /**
     * Set specific lead time.
     */
    public function withLeadTime(int $days): static
    {
        return $this->state(function (array $attributes) use ($days) {
            return [
                'lead_time_days' => $days,
            ];
        });
    }

    /**
     * Create supplier with products.
     */
    public function withProducts(int $count = 5): static
    {
        return $this->afterCreating(function (Supplier $supplier) use ($count) {
            if (class_exists('ProductSupplier')) {
                $products = Product::inRandomOrder()->limit($count)->get();

                foreach ($products as $index => $product) {
                    $supplier->products()->attach($product->id, [
                        'supplier_sku' => $this->faker->optional(0.7)->bothify('SUP-####-??'),
                        'unit_cost' => $this->faker->randomFloat(2, 1, 500),
                        'minimum_order_quantity' => $this->faker->numberBetween(1, 100),
                        'lead_time_days' => $this->faker->numberBetween(1, 30),
                        'is_preferred' => $index === 0, // First product is preferred
                    ]);
                }
            }
        });
    }

    /**
     * Create supplier with preferred products only.
     */
    public function withPreferredProducts(int $count = 3): static
    {
        return $this->afterCreating(function (Supplier $supplier) use ($count) {
            if (class_exists('ProductSupplier')) {
                $products = Product::inRandomOrder()->limit($count)->get();

                foreach ($products as $product) {
                    $supplier->products()->attach($product->id, [
                        'supplier_sku' => $this->faker->bothify('PREF-####-??'),
                        'unit_cost' => $this->faker->randomFloat(2, 10, 200),
                        'minimum_order_quantity' => $this->faker->numberBetween(1, 20),
                        'lead_time_days' => $this->faker->numberBetween(1, 7),
                        'is_preferred' => true,
                    ]);
                }
            }
        });
    }

    /**
     * Create supplier with purchase orders.
     */
    public function withPurchaseOrders(int $count = 5): static
    {
        return $this->afterCreating(function (Supplier $supplier) use ($count) {
            if (class_exists('PurchaseOrder')) {
                for ($i = 0; $i < $count; $i++) {
                    PurchaseOrder::factory()
                        ->forSupplier($supplier->id)
                        ->create();
                }
            }
        });
    }

    /**
     * Create supplier with mixed performance history.
     */
    public function withHistory(): static
    {
        return $this->afterCreating(function (Supplier $supplier) {
            if (class_exists('PurchaseOrder')) {
                // Create orders over time to build performance history
                for ($month = 1; $month <= 6; $month++) {
                    $orderCount = rand(1, 3);

                    for ($i = 0; $i < $orderCount; $i++) {
                        $orderDate = now()->subMonths($month)->addDays(rand(1, 20));
                        $expectedDate = (clone $orderDate)->addDays($supplier->lead_time_days);

                        // 80% on-time, 20% late
                        $isLate = $this->faker->boolean(20);
                        $actualDate = $isLate
                            ? (clone $expectedDate)->addDays(rand(1, 5))
                            : $expectedDate;

                        PurchaseOrder::factory()
                            ->forSupplier($supplier->id)
                            ->state([
                                'order_date' => $orderDate,
                                'expected_delivery_date' => $expectedDate,
                                'actual_delivery_date' => $actualDate,
                                'status' => PurchaseOrder::STATUS_RECEIVED,
                            ])
                            ->create();
                    }
                }

                // Update rating based on performance
                $supplier->updateRating();
            }
        });
    }

    /**
     * Create a fully loaded supplier.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (Supplier $supplier) {
            if (class_exists('ProductSupplier')) {
                $products = Product::inRandomOrder()->limit(rand(5, 15))->get();

                foreach ($products as $index => $product) {
                    $supplier->products()->attach($product->id, [
                        'supplier_sku' => $this->faker->optional(0.7)->bothify('SUP-####-??'),
                        'unit_cost' => $this->faker->randomFloat(2, 1, 500),
                        'minimum_order_quantity' => $this->faker->numberBetween(1, 100),
                        'lead_time_days' => $this->faker->numberBetween(1, 30),
                        'is_preferred' => $index === 0,
                    ]);
                }
            }

            if (class_exists('PurchaseOrder')) {
                for ($i = 0; $i < rand(3, 8); $i++) {
                    PurchaseOrder::factory()
                        ->forSupplier($supplier->id)
                        ->create();
                }
            }

            if ($this->faker->boolean(60) && class_exists('ProductSupplier')) {
                $preferredProducts = Product::inRandomOrder()->limit(rand(1, 3))->get();

                foreach ($preferredProducts as $product) {
                    $supplier->products()->attach($product->id, [
                        'supplier_sku' => $this->faker->bothify('PREF-####-??'),
                        'unit_cost' => $this->faker->randomFloat(2, 10, 200),
                        'minimum_order_quantity' => $this->faker->numberBetween(1, 20),
                        'lead_time_days' => $this->faker->numberBetween(1, 7),
                        'is_preferred' => true,
                    ]);
                }
            }
        });
    }
}
