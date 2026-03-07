<?php
// database/seeders/CustomerSeeder.php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Traits\ChecksDependencies;

class CustomerSeeder extends Seeder
{
    use ChecksDependencies;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       // DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Customer::truncate();
         // DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $this->command->info('Creating customers...');
        $this->command->getOutput()->progressStart(100);

        $this->createEnterpriseCustomers();
        $this->createWholesaleCustomers();
        $this->createRetailCustomers();
        $this->createInternationalCustomers();
        $this->createSmallBusinessCustomers();
        $this->createInactiveCustomers();
        $this->createCustomersWithOrders();

        $this->command->getOutput()->progressFinish();

        $this->command->info('Customers created: ' . Customer::count());
    }

    /**
     * Create enterprise-level customers.
     */
    protected function createEnterpriseCustomers(): void
    {
        $enterpriseCustomers = [
            [
                'company_name' => 'Global Manufacturing Inc',
                'contact' => 'John Smith',
                'city' => 'New York',
                'state' => 'NY',
                'credit_limit' => 1500000,
            ],
            [
                'company_name' => 'TechCorp International',
                'contact' => 'Sarah Johnson',
                'city' => 'San Francisco',
                'state' => 'CA',
                'credit_limit' => 2500000,
            ],
            [
                'company_name' => 'Industrial Solutions Group',
                'contact' => 'Michael Chen',
                'city' => 'Chicago',
                'state' => 'IL',
                'credit_limit' => 1000000,
            ],
            [
                'company_name' => 'Aerospace Dynamics Ltd',
                'contact' => 'Robert Williams',
                'city' => 'Seattle',
                'state' => 'WA',
                'credit_limit' => 3000000,
            ],
            [
                'company_name' => 'PharmaHealth Corporation',
                'contact' => 'Emily Davis',
                'city' => 'Boston',
                'state' => 'MA',
                'credit_limit' => 2000000,
            ],
        ];

        foreach ($enterpriseCustomers as $customer) {
            Customer::factory()
                ->enterprise()
                ->withContact($customer['contact'])
                ->locatedIn($customer['city'], $customer['state'])
                ->withCreditLimit($customer['credit_limit'])
                ->withMixedOrders()
                ->create([
                    'company_name' => $customer['company_name'],
                ]);

            $this->command->getOutput()->progressAdvance(5);
        }

        // Create additional random enterprise customers
        Customer::factory()
            ->enterprise()
            ->count(10)
            ->withMixedOrders()
            ->create();

        $this->command->getOutput()->progressAdvance(10);
    }

    /**
     * Create wholesale customers.
     */
    protected function createWholesaleCustomers(): void
    {
        $wholesaleCustomers = [
            [
                'name' => 'Midwest Distributors LLC',
                'city' => 'Detroit',
                'state' => 'MI',
                'credit_limit' => 150000,
            ],
            [
                'name' => 'West Coast Supply Co',
                'city' => 'Los Angeles',
                'state' => 'CA',
                'credit_limit' => 200000,
            ],
            [
                'name' => 'Southern Wholesale Group',
                'city' => 'Atlanta',
                'state' => 'GA',
                'credit_limit' => 175000,
            ],
            [
                'name' => 'Northeast Distributors',
                'city' => 'Philadelphia',
                'state' => 'PA',
                'credit_limit' => 125000,
            ],
            [
                'name' => 'Gulf Coast Supply',
                'city' => 'Houston',
                'state' => 'TX',
                'credit_limit' => 225000,
            ],
        ];

        foreach ($wholesaleCustomers as $customer) {
            Customer::factory()
                ->wholesale()
                ->locatedIn($customer['city'], $customer['state'])
                ->withCreditLimit($customer['credit_limit'])
                ->withSalesOrders(rand(5, 15))
                ->create([
                    'company_name' => $customer['name'],
                ]);

            $this->command->getOutput()->progressAdvance(3);
        }

        // Create additional random wholesale customers
        Customer::factory()
            ->wholesale()
            ->count(20)
            ->withSalesOrders(rand(3, 8))
            ->create();

        $this->command->getOutput()->progressAdvance(20);
    }

    /**
     * Create retail customers.
     */
    protected function createRetailCustomers(): void
    {
        $retailChains = [
            ['name' => 'City Hardware Stores', 'count' => 5],
            ['name' => 'Main Street Retail', 'count' => 3],
            ['name' => 'Corner Shop Group', 'count' => 4],
            ['name' => 'Family Value Stores', 'count' => 6],
            ['name' => 'Downtown Markets', 'count' => 3],
        ];

        foreach ($retailChains as $chain) {
            for ($i = 0; $i < $chain['count']; $i++) {
                Customer::factory()
                    ->retail()
                    ->withSalesOrders(rand(2, 5))
                    ->create([
                        'company_name' => $chain['name'] . ' #' . ($i + 1),
                    ]);

                $this->command->getOutput()->progressAdvance(1);
            }
        }

        // Create additional random retail customers
        Customer::factory()
            ->retail()
            ->count(30)
            ->withSalesOrders(rand(1, 4))
            ->create();

        $this->command->getOutput()->progressAdvance(30);
    }

    /**
     * Create international customers.
     */
    protected function createInternationalCustomers(): void
    {
        $internationalCustomers = [
            ['country' => 'Canada', 'city' => 'Toronto', 'credit_limit' => 500000],
            ['country' => 'Mexico', 'city' => 'Mexico City', 'credit_limit' => 300000],
            ['country' => 'UK', 'city' => 'London', 'credit_limit' => 750000],
            ['country' => 'Germany', 'city' => 'Berlin', 'credit_limit' => 600000],
            ['country' => 'Japan', 'city' => 'Tokyo', 'credit_limit' => 1000000],
            ['country' => 'China', 'city' => 'Shanghai', 'credit_limit' => 800000],
            ['country' => 'Australia', 'city' => 'Sydney', 'credit_limit' => 450000],
            ['country' => 'Brazil', 'city' => 'Sao Paulo', 'credit_limit' => 350000],
        ];

        foreach ($internationalCustomers as $customer) {
            Customer::factory()
                ->international()
                ->fromCountry($customer['country'])
                ->locatedIn($customer['city'])
                ->withCreditLimit($customer['credit_limit'])
                ->withSalesOrders(rand(2, 6))
                ->create();

            $this->command->getOutput()->progressAdvance(2);
        }

        // Create additional random international customers
        Customer::factory()
            ->international()
            ->count(15)
            ->withSalesOrders(rand(1, 4))
            ->create();

        $this->command->getOutput()->progressAdvance(15);
    }

    /**
     * Create small business customers.
     */
    protected function createSmallBusinessCustomers(): void
    {
        $smallBusinesses = [
            ['name' => 'Main Street Bakery', 'city' => 'Portland', 'state' => 'OR'],
            ['name' => 'Corner Garage', 'city' => 'Phoenix', 'state' => 'AZ'],
            ['name' => 'Neighborhood Market', 'city' => 'Denver', 'state' => 'CO'],
            ['name' => 'Family Restaurant', 'city' => 'Miami', 'state' => 'FL'],
            ['name' => 'Local Bookstore', 'city' => 'Nashville', 'state' => 'TN'],
            ['name' => 'Downtown Coffee', 'city' => 'Seattle', 'state' => 'WA'],
            ['name' => 'City Bike Shop', 'city' => 'Minneapolis', 'state' => 'MN'],
            ['name' => 'Community Pharmacy', 'city' => 'Cleveland', 'state' => 'OH'],
        ];

        foreach ($smallBusinesses as $business) {
            Customer::factory()
                ->smallBusiness()
                ->locatedIn($business['city'], $business['state'])
                ->withSalesOrders(rand(1, 3))
                ->create([
                    'company_name' => $business['name'],
                ]);

            $this->command->getOutput()->progressAdvance(1);
        }

        // Create additional random small businesses
        Customer::factory()
            ->smallBusiness()
            ->count(25)
            ->withSalesOrders(rand(1, 2))
            ->create();

        $this->command->getOutput()->progressAdvance(25);
    }

    /**
     * Create inactive customers.
     */
    protected function createInactiveCustomers(): void
    {
        // Create inactive customers with no recent orders
        Customer::factory()
            ->inactive()
            ->count(10)
            ->create();

        $this->command->getOutput()->progressAdvance(10);

        // Create customers with high credit utilization
        Customer::factory()
            ->active()
            ->withCreditLimit(100000)
            ->count(5)
            ->highCreditUtilization(95)
            ->create();

        $this->command->getOutput()->progressAdvance(5);
    }

    /**
     * Create customers with specific order patterns.
     */
    protected function createCustomersWithOrders(): void
    {
        // VIP customers (many orders)
        Customer::factory()
            ->enterprise()
            ->count(3)
            ->withMixedOrders()
            ->create();

        $this->command->getOutput()->progressAdvance(3);

        // New customers (few orders)
        Customer::factory()
            ->active()
            ->count(8)
            ->withSalesOrders(rand(1, 2))
            ->create();

        $this->command->getOutput()->progressAdvance(8);

        // Cash customers (COD only)
        Customer::factory()
            ->cashOnDelivery()
            ->count(6)
            ->withSalesOrders(rand(2, 4))
            ->create();

        $this->command->getOutput()->progressAdvance(6);

        // Customers without credit limit
        Customer::factory()
            ->unlimitedCredit()
            ->count(8)
            ->withSalesOrders(rand(3, 7))
            ->create();

        $this->command->getOutput()->progressAdvance(8);

        // Customers with specific payment terms
        $paymentTerms = ['net_30', 'net_60', 'net_90'];
        foreach ($paymentTerms as $terms) {
            Customer::factory()
                ->withPaymentTerms($terms)
                ->count(5)
                ->withSalesOrders(rand(2, 5))
                ->create();

            $this->command->getOutput()->progressAdvance(5);
        }
    }
}
