<?php
// database/factories/CustomerFactory.php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

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
        'Systems',
        'Technologies',
        'Enterprises',
        'International',
        'Co',
        'Ltd',
        'Limited',
        'Partners',
        'Holdings',
        'Corporation'
    ];

    /**
     * Common business types
     */
    protected array $businessTypes = [
        'Manufacturing',
        'Distribution',
        'Retail',
        'Wholesale',
        'Construction',
        'Automotive',
        'Pharmaceutical',
        'Food & Beverage',
        'Electronics',
        'Textile',
        'Chemical',
        'Aerospace',
        'Defense',
        'Medical',
        'Oil & Gas',
        'Mining',
        'Agriculture',
        'Logistics'
    ];

    /**
     * Payment terms options
     */
    protected array $paymentTerms = [
        'net_30',
        'net_60',
        'net_90',
        'cod',
        'prepaid',
        'eom_30',
        '2_10_net_30'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $companyName = $this->generateCompanyName();
        $hasCreditLimit = $this->faker->boolean(70); // 70% chance of having credit limit

        return [
            'customer_code' => $this->generateCustomerCode(),
            'company_name' => $companyName,
            'contact_person' => $this->faker->name(),
            'email' => $this->generateCompanyEmail($companyName),
            'phone' => $this->faker->phoneNumber(),
            'mobile' => $this->faker->optional(0.6)->phoneNumber(),
            'address' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'state' => $this->faker->state(),
            'country' => $this->faker->country(),
            'postal_code' => $this->faker->postcode(),
            'tax_id' => $this->generateTaxId(),
            'payment_terms' => $this->faker->randomElement($this->paymentTerms),
            'credit_limit' => $hasCreditLimit ? $this->generateCreditLimit() : null,
            'notes' => $this->faker->optional(0.4)->sentence(),
            'is_active' => $this->faker->boolean(90), // 90% active
            'created_at' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a unique customer code.
     */
    protected function generateCustomerCode(): string
    {
        $prefix = 'CUST';
        $year = now()->format('Y');
        $unique = str_pad($this->faker->unique()->numberBetween(1, 9999), 4, '0', STR_PAD_LEFT);

        return "{$prefix}-{$year}-{$unique}";
    }

    /**
     * Generate a company name.
     */
    protected function generateCompanyName(): string
    {
        $businessType = $this->faker->randomElement($this->businessTypes);
        $suffix = $this->faker->randomElement($this->companySuffixes);

        return $this->faker->company() . ' ' . $businessType . ' ' . $suffix;
    }

    /**
     * Generate company email.
     */
    protected function generateCompanyEmail(string $companyName): string
    {
        $domain = Str::slug($companyName) . '.com';
        $domain = preg_replace('/[^a-z0-9.]/', '', $domain);

        return 'info@' . $domain;
    }

    /**
     * Generate a tax ID (EIN or VAT).
     */
    protected function generateTaxId(): string
    {
        return $this->faker->numerify('##-#######');
    }

    /**
     * Generate a credit limit based on business size.
     */
    protected function generateCreditLimit(): float
    {
        $tiers = [
            'small' => $this->faker->randomFloat(2, 5000, 25000),
            'medium' => $this->faker->randomFloat(2, 25000, 100000),
            'large' => $this->faker->randomFloat(2, 100000, 500000),
            'enterprise' => $this->faker->randomFloat(2, 500000, 2000000),
        ];

        $tier = $this->faker->randomElement(array_keys($tiers));
        return $tiers[$tier];
    }

    /**
     * Indicate that the customer is active.
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
     * Indicate that the customer is inactive.
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
     * Set credit limit for the customer.
     */
    public function withCreditLimit(?float $limit = null): static
    {
        return $this->state(function (array $attributes) use ($limit) {
            return [
                'credit_limit' => $limit ?? $this->generateCreditLimit(),
            ];
        });
    }

    /**
     * No credit limit (unlimited).
     */
    public function unlimitedCredit(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'credit_limit' => null,
            ];
        });
    }

    /**
     * Small business customer.
     */
    public function smallBusiness(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'company_name' => $this->faker->company() . ' ' . $this->faker->randomElement(['Small Biz', 'Shop', 'Store']),
                'credit_limit' => $this->faker->randomFloat(2, 5000, 25000),
                'payment_terms' => $this->faker->randomElement(['net_30', 'cod']),
            ];
        });
    }

    /**
     * Enterprise customer.
     */
    public function enterprise(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'company_name' => $this->faker->company() . ' ' . $this->faker->randomElement(['Global', 'International', 'Worldwide']),
                'credit_limit' => $this->faker->randomFloat(2, 500000, 2000000),
                'payment_terms' => $this->faker->randomElement(['net_60', 'net_90']),
                'notes' => 'Key account - VIP customer',
            ];
        });
    }

    /**
     * International customer.
     */
    public function international(): static
    {
        $countries = ['Canada', 'Mexico', 'UK', 'Germany', 'France', 'Japan', 'China', 'Australia', 'Brazil'];

        return $this->state(function (array $attributes) use ($countries) {
            return [
                'country' => $this->faker->randomElement($countries),
                'payment_terms' => $this->faker->randomElement(['letter_of_credit', 'wire_transfer', 'net_60']),
                'notes' => 'International customer - Import/Export',
            ];
        });
    }

    /**
     * Customer with COD payment terms.
     */
    public function cashOnDelivery(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'payment_terms' => 'cod',
                'credit_limit' => null,
                'notes' => 'Cash on delivery only',
            ];
        });
    }

    /**
     * Customer with specific payment terms.
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
     * Customer from specific country.
     */
    public function fromCountry(string $country): static
    {
        return $this->state(function (array $attributes) use ($country) {
            return [
                'country' => $country,
            ];
        });
    }

    /**
     * Customer with sales orders.
     */
    public function withSalesOrders(int $count = 3): static
    {
        return $this->afterCreating(function (Customer $customer) use ($count) {
            if (class_exists('\App\Models\SalesOrder')) {
                \App\Models\SalesOrder::factory()
                    ->count($count)
                    ->forCustomer($customer->id)
                    ->create();
            }
        });
    }

    /**
     * Customer with mixed order statuses.
     */
    public function withMixedOrders(): static
    {
        return $this->afterCreating(function (Customer $customer) {
            if (!class_exists('\App\Models\SalesOrder')) {
                return;
            }

            // Create some pending orders
            \App\Models\SalesOrder::factory()
                ->pending()
                ->count(2)
                ->forCustomer($customer->id)
                ->create();

            // Create some approved orders
            \App\Models\SalesOrder::factory()
                ->approved()
                ->count(3)
                ->forCustomer($customer->id)
                ->create();

            // Create some completed orders
            \App\Models\SalesOrder::factory()
                ->completed()
                ->count(5)
                ->forCustomer($customer->id)
                ->create();
        });
    }

    /**
     * Customer with high credit utilization.
     */
    public function highCreditUtilization(float $percentage = 90): static
    {
        return $this->afterCreating(function (Customer $customer) use ($percentage) {
            if (!class_exists('\App\Models\SalesOrder') || !$customer->credit_limit) {
                return;
            }

            $targetUtilization = $customer->credit_limit * ($percentage / 100);

            // Create orders to reach target utilization
            \App\Models\SalesOrder::factory()
                ->approved()
                ->count(3)
                ->forCustomer($customer->id)
                ->sequence(fn($sequence) => [
                    'total_amount' => $targetUtilization / 3
                ])
                ->create();
        });
    }

    /**
     * Customer with specific city/location.
     */
    public function locatedIn(string $city, ?string $state = null): static
    {
        return $this->state(function (array $attributes) use ($city, $state) {
            return [
                'city' => $city,
                'state' => $state ?? $this->faker->state(),
            ];
        });
    }

    /**
     * Customer without tax ID.
     */
    public function withoutTaxId(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'tax_id' => null,
            ];
        });
    }

    /**
     * Customer with specific customer code.
     */
    public function withCode(string $code): static
    {
        return $this->state(function (array $attributes) use ($code) {
            return [
                'customer_code' => $code,
            ];
        });
    }

    /**
     * Customer with contact person.
     */
    public function withContact(?string $name = null): static
    {
        return $this->state(function (array $attributes) use ($name) {
            return [
                'contact_person' => $name ?? $this->faker->name(),
            ];
        });
    }

    /**
     * Wholesale customer.
     */
    public function wholesale(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'company_name' => $this->faker->company() . ' Wholesale ' . $this->faker->randomElement($this->companySuffixes),
                'payment_terms' => 'net_30',
                'credit_limit' => $this->faker->randomFloat(2, 50000, 200000),
                'notes' => 'Wholesale distributor',
            ];
        });
    }

    /**
     * Retail customer.
     */
    public function retail(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'company_name' => $this->faker->company() . ' ' . $this->faker->randomElement(['Store', 'Shop', 'Retail']),
                'payment_terms' => $this->faker->randomElement(['cod', 'prepaid']),
                'credit_limit' => $this->faker->optional(0.3)->randomFloat(2, 1000, 10000),
                'notes' => 'Retail customer',
            ];
        });
    }
}
