<?php
// database/factories/ProductFactory.php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use App\Models\Inventory;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Product categories mapping
     */
    protected array $categoryMap = [];

    /**
     * Product brands
     */
    protected array $brands = [
        'Electronics' => [
            'Samsung',
            'LG',
            'Sony',
            'Panasonic',
            'Philips',
            'Toshiba',
            'Sharp',
            'Dell',
            'HP',
            'Lenovo',
            'Apple',
            'Asus',
            'Acer',
            'MSI',
            'Intel',
            'AMD',
            'NVIDIA',
            'Corsair',
            'Logitech',
            'Microsoft',
            'Canon',
            'Nikon'
        ],
        'Furniture' => [
            'IKEA',
            'Ashley',
            'La-Z-Boy',
            'Herman Miller',
            'Steelcase',
            'HON',
            'Sauder',
            'Bush',
            'Whalen',
            'Flash',
            'Office Depot',
            'Staples'
        ],
        'Automotive' => [
            'Bosch',
            'Denso',
            'Delphi',
            'Valeo',
            'Continental',
            'ZF',
            'Magna',
            'Aisin',
            'Bridgestone',
            'Michelin',
            'Goodyear',
            'Firestone'
        ],
        'Tools' => [
            'DeWalt',
            'Milwaukee',
            'Makita',
            'Bosch',
            'Stanley',
            'Craftsman',
            'Ryobi',
            'Ridgid',
            'Black & Decker',
            'Porter-Cable',
            'Skil'
        ],
        'Office Supplies' => [
            '3M',
            'Avery',
            'Fellowes',
            'Swingline',
            'Post-it',
            'Sharpie',
            'Paper Mate',
            'BIC',
            'Pentel',
            'Staples',
            'Office Depot'
        ],
        'Default' => [
            'Generic',
            'Premium',
            'Pro',
            'Standard',
            'Deluxe',
            'Economy',
            'Elite',
            'Basic',
            'Advanced',
            'Professional'
        ]
    ];

    /**
     * Product prefixes for SKU generation
     */
    protected array $skuPrefixes = [
        'ELE',
        'FUR',
        'AUT',
        'TL',
        'OFF',
        'MED',
        'PHA',
        'CHE',
        'FAB',
        'PKG',
        'RAW',
        'FIN',
        'SPR',
        'CON',
        'HARD',
        'SOFT',
        'NET',
        'CBL',
        'BAT',
        'SNS'
    ];

    /**
     * Unit of measure options
     */
    protected array $unitMeasures = [
        'piece' => 'Piece',
        'box' => 'Box',
        'case' => 'Case',
        'pallet' => 'Pallet',
        'kg' => 'Kilogram',
        'g' => 'Gram',
        'lb' => 'Pound',
        'oz' => 'Ounce',
        'm' => 'Meter',
        'cm' => 'Centimeter',
        'ft' => 'Foot',
        'in' => 'Inch',
        'l' => 'Liter',
        'ml' => 'Milliliter',
        'gal' => 'Gallon',
        'pair' => 'Pair',
        'set' => 'Set',
        'pack' => 'Pack',
        'dozen' => 'Dozen',
        'roll' => 'Roll',
        'sheet' => 'Sheet',
        'ream' => 'Ream'
    ];

    /**
     * Weight units
     */
    protected array $weightUnits = ['kg', 'g', 'lb', 'oz'];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = Category::inRandomOrder()->first() ?? Category::factory()->create();
        $name = $this->generateProductName($category->name ?? 'General');

        return [
            'sku' => $this->generateSku($name),
            'barcode' => $this->faker->optional(0.8)->ean13(),
            'name' => $name,
            'description' => $this->generateDescription($name),
            'category_id' => $category->id,
            'brand' => $this->generateBrand($category->name ?? 'Default'),
            'unit_of_measure' => $this->faker->randomElement(array_keys($this->unitMeasures)),
            'minimum_stock' => $this->faker->numberBetween(0, 20),
            'maximum_stock' => $this->faker->numberBetween(50, 500),
            'reorder_point' => $this->faker->numberBetween(5, 30),
            'reorder_quantity' => $this->faker->numberBetween(10, 100),
            'weight' => $this->faker->optional(0.7)->randomFloat(2, 0.1, 50),
            'weight_unit' => $this->faker->optional(0.7)->randomElement($this->weightUnits),
            'dimensions' => $this->generateDimensions(),
            'is_active' => $this->faker->boolean(90),
            'is_serial_tracked' => $this->faker->boolean(15),
            'is_batch_tracked' => $this->faker->boolean(25),
            'is_expirable' => $this->faker->boolean(20),
            'image_url' => $this->faker->optional(0.3)->imageUrl(400, 400, 'product'),
            'notes' => $this->faker->optional(0.3)->sentence(),
            'created_at' => $this->faker->dateTimeBetween('-3 years', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }

    /**
     * Generate a product name based on category.
     */
    protected function generateProductName(string $category): string
    {
        $templates = [
            'Electronics' => [
                'Smart {product} X{gen}',
                '{brand} {product} Pro',
                'Ultra {product} {gen}K',
                '{product} Elite',
                '{brand} {product} Plus',
                'Premium {product}'
            ],
            'Furniture' => [
                '{style} {product} {color}',
                'Ergonomic {product}',
                'Executive {product}',
                'Modern {product} {material}',
                '{product} with {feature}'
            ],
            'Automotive' => [
                'Performance {product}',
                '{brand} {product}',
                'Heavy Duty {product}',
                'Premium {product} Grade',
                'Professional {product}'
            ],
            'Office Supplies' => [
                '{product} {pack_size}',
                'Heavy Duty {product}',
                'Eco-Friendly {product}',
                '{product} {color}',
                'Premium {product} Set'
            ],
        ];

        $products = $this->getProductsForCategory($category);
        $template = $this->faker->randomElement($templates[$category] ?? $templates['Office Supplies']);

        $replacements = [
            '{product}' => $this->faker->randomElement($products),
            '{brand}' => $this->faker->randomElement($this->brands[$category] ?? $this->brands['Default']),
            '{gen}' => $this->faker->randomElement(['2', '3', '4', '5', '6', '7', '8', '9', '10']),
            '{color}' => $this->faker->colorName(),
            '{material}' => $this->faker->randomElement(['Wood', 'Metal', 'Plastic', 'Glass', 'Leather']),
            '{style}' => $this->faker->randomElement(['Modern', 'Classic', 'Contemporary', 'Rustic']),
            '{feature}' => $this->faker->randomElement(['Storage', 'Adjustable', 'Folding', 'Portable']),
            '{pack_size}' => $this->faker->randomElement(['Pack', 'Box', 'Set', 'Bundle']),
        ];

        return str_replace(array_keys($replacements), array_values($replacements), $template);
    }

    /**
     * Get product types for a category.
     */
    protected function getProductsForCategory(string $category): array
    {
        return match ($category) {
            'Electronics' => ['TV', 'Monitor', 'Laptop', 'Tablet', 'Phone', 'Headphone', 'Speaker', 'Camera', 'Printer'],
            'Furniture' => ['Chair', 'Desk', 'Table', 'Cabinet', 'Shelf', 'Bookcase', 'Drawer', 'Bench'],
            'Automotive' => ['Filter', 'Brake Pad', 'Battery', 'Spark Plug', 'Wiper', 'Belt', 'Hose', 'Sensor'],
            'Office Supplies' => ['Pen', 'Paper', 'Folder', 'Notebook', 'Stapler', 'Tape', 'Clip', 'Marker'],
            default => ['Item', 'Product', 'Supply', 'Material', 'Component', 'Part'],
        };
    }

    /**
     * Generate brand based on category.
     */
    protected function generateBrand(string $category): ?string
    {
        if (!$this->faker->boolean(70)) {
            return null; // 30% chance of no brand
        }

        $brands = $this->brands[$category] ?? $this->brands['Default'];
        return $this->faker->randomElement($brands);
    }

    /**
     * Generate a unique SKU.
     */
    protected function generateSku(string $productName): string
    {
        $prefix = $this->faker->randomElement($this->skuPrefixes);
        $words = explode(' ', $productName);
        $code = '';

        foreach ($words as $word) {
            $code .= strtoupper(substr(preg_replace('/[^a-zA-Z]/', '', $word), 0, 1));
        }

        $code = substr($code, 0, 3);
        if (strlen($code) < 3) {
            $code = str_pad($code, 3, 'X');
        }

        $number = $this->faker->unique()->numberBetween(1000, 9999);

        return "{$prefix}-{$code}-{$number}";
    }

    /**
     * Generate product description.
     */
    protected function generateDescription(string $productName): string
    {
        $templates = [
            "High-quality {product} for professional use.",
            "Premium {product} with excellent durability.",
            "Reliable {product} for everyday use.",
            "Industrial grade {product} meeting strict standards.",
            "Versatile {product} suitable for various applications.",
            "Top-rated {product} with customer satisfaction guarantee.",
            "Durable {product} designed for long-lasting performance.",
            "Professional {product} with advanced features.",
            "Cost-effective {product} without compromising quality.",
            "Innovative {product} with modern design.",
        ];

        $features = [
            " ergonomic design",
            " durable construction",
            "easy installation",
            " low maintenance",
            "energy efficiency",
            "safety certified",
            " weather resistant",
            "corrosion proof",
            "lightweight design"
        ];

        $template = $this->faker->randomElement($templates);
        $description = str_replace('{product}', $productName, $template);

        if ($this->faker->boolean(60)) {
            $description .= " Features" . $this->faker->randomElement($features) . ".";
        }

        return $description;
    }

    /**
     * Generate dimensions string.
     */
    protected function generateDimensions(): ?string
    {
        if (!$this->faker->boolean(60)) {
            return null;
        }

        $length = $this->faker->randomFloat(1, 1, 100);
        $width = $this->faker->randomFloat(1, 1, 100);
        $height = $this->faker->randomFloat(1, 1, 100);
        $unit = $this->faker->randomElement(['cm', 'in', 'mm']);

        return "{$length} x {$width} x {$height} {$unit}";
    }

    /**
     * Indicate that the product is active.
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
     * Indicate that the product is inactive.
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
     * Indicate serial tracked product.
     */
    public function serialTracked(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_serial_tracked' => true,
                'is_batch_tracked' => false,
                'is_expirable' => false,
            ];
        });
    }

    /**
     * Indicate batch tracked product.
     */
    public function batchTracked(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_batch_tracked' => true,
                'is_serial_tracked' => false,
                'is_expirable' => $this->faker->boolean(50),
            ];
        });
    }

    /**
     * Indicate expirable product.
     */
    public function expirable(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'is_expirable' => true,
                'is_batch_tracked' => true, // Expirable requires batch tracking
                'is_serial_tracked' => false,
            ];
        });
    }

    /**
     * Indicate product with high value/low volume.
     */
    public function highValue(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'minimum_stock' => 1,
                'maximum_stock' => 10,
                'reorder_point' => 2,
                'reorder_quantity' => 2,
                'is_serial_tracked' => true,
                'notes' => 'High value item - handle with care',
            ];
        });
    }

    /**
     * Indicate product with bulk storage.
     */
    public function bulkItem(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'minimum_stock' => 100,
                'maximum_stock' => 10000,
                'reorder_point' => 500,
                'reorder_quantity' => 1000,
                'unit_of_measure' => 'pallet',
                'is_serial_tracked' => false,
                'is_batch_tracked' => $this->faker->boolean(60),
            ];
        });
    }

    /**
     * Indicate fast-moving product.
     */
    public function fastMoving(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'minimum_stock' => 50,
                'maximum_stock' => 1000,
                'reorder_point' => 100,
                'reorder_quantity' => 200,
                'notes' => 'Fast-moving item - ensure adequate stock',
            ];
        });
    }

    /**
     * Indicate slow-moving product.
     */
    public function slowMoving(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'minimum_stock' => 1,
                'maximum_stock' => 50,
                'reorder_point' => 5,
                'reorder_quantity' => 10,
                'notes' => 'Slow-moving item - order carefully',
            ];
        });
    }

    /**
     * Set product category.
     */
    public function inCategory(int $categoryId): static
    {
        return $this->state(function (array $attributes) use ($categoryId) {
            return [
                'category_id' => $categoryId,
            ];
        });
    }

    /**
     * Set specific SKU.
     */
    public function withSku(string $sku): static
    {
        return $this->state(function (array $attributes) use ($sku) {
            return [
                'sku' => $sku,
            ];
        });
    }

    /**
     * Set specific name.
     */
    public function named(string $name): static
    {
        return $this->state(function (array $attributes) use ($name) {
            return [
                'name' => $name,
            ];
        });
    }

    /**
     * Create product with suppliers.
     */
    public function withSuppliers(int $count = 2): static
    {
        return $this->afterCreating(function (Product $product) use ($count) {
            if (class_exists('Supplier')) {
                $suppliers = Supplier::inRandomOrder()->limit($count)->get();

                if ($suppliers->isEmpty()) {
                    $suppliers = Supplier::factory()->count($count)->create();
                }

                foreach ($suppliers as $index => $supplier) {
                    $product->suppliers()->attach($supplier->id, [
                        'supplier_sku' => $this->faker->optional(0.7)->bothify('SUP-####-??'),
                        'unit_cost' => $this->faker->randomFloat(2, 1, 100),
                        'minimum_order_quantity' => $this->faker->numberBetween(1, 50),
                        'lead_time_days' => $this->faker->numberBetween(2, 30),
                        'is_preferred' => $index === 0, // First supplier is preferred
                    ]);
                }
            }
        });
    }

    /**
     * Create product with inventory.
     */
    public function withInventory(int $locations = 3): static
    {
        return $this->afterCreating(function (Product $product) use ($locations) {
            if (class_exists('Inventory')) {
                Inventory::factory()
                    ->count($locations)
                    ->forProduct($product->id)
                    ->create();
            }
        });
    }

    /**
     * Create product with all relationships.
     */
    public function fullyLoaded(): static
    {
        return $this->afterCreating(function (Product $product) {
            // Add suppliers
            if (class_exists('Supplier')) {
                $suppliers = Supplier::inRandomOrder()->limit(rand(1, 3))->get();
                foreach ($suppliers as $index => $supplier) {
                    $product->suppliers()->attach($supplier->id, [
                        'supplier_sku' => $this->faker->optional(0.7)->bothify('SUP-####-??'),
                        'unit_cost' => $this->faker->randomFloat(2, 1, 100),
                        'minimum_order_quantity' => $this->faker->numberBetween(1, 50),
                        'lead_time_days' => $this->faker->numberBetween(2, 30),
                        'is_preferred' => $index === 0,
                    ]);
                }
            }

            // Add inventory
            if (class_exists('Inventory')) {
                Inventory::factory()
                    ->count(rand(2, 5))
                    ->forProduct($product->id)
                    ->create();
            }
        });
    }
}
