<?php
// app/Models/ShipmentItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Shipment Item Model
 * 
 * Represents an individual line item within a shipment. Tracks which products
 * were shipped, including quantities, locations, and tracking information
 * such as batch numbers and serial numbers. Provides the link between shipments,
 * sales orders, and actual inventory movement.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $shipment_id
 * @property int $sales_order_item_id
 * @property int $product_id
 * @property int|null $location_id
 * @property int $quantity_shipped
 * @property string|null $batch_number
 * @property string|null $serial_number
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read Shipment $shipment
 * @property-read SalesOrderItem $salesOrderItem
 * @property-read Product $product
 * @property-read Location|null $location
 * @property-read string $location_path
 * @property-read string $product_info
 * @property-read array $tracking_info
 * @property-read float $line_value
 */
class ShipmentItem extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'shipment_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'shipment_id',
        'sales_order_item_id',
        'product_id',
        'location_id',
        'quantity_shipped',
        'batch_number',
        'serial_number',
        'notes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity_shipped' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'quantity_shipped' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent shipment.
     *
     * @return BelongsTo
     */
    public function shipment(): BelongsTo
    {
        return $this->belongsTo(Shipment::class);
    }

    /**
     * Get the original sales order item.
     *
     * @return BelongsTo
     */
    public function salesOrderItem(): BelongsTo
    {
        return $this->belongsTo(SalesOrderItem::class);
    }

    /**
     * Get the product that was shipped.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the location from which the product was shipped.
     *
     * @return BelongsTo
     */
    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to filter by product.
     *
     * @param Builder $query
     * @param int $productId
     * @return Builder
     */
    public function scopeForProduct(Builder $query, int $productId): Builder
    {
        return $query->where('product_id', $productId);
    }

    /**
     * Scope to filter by batch number.
     *
     * @param Builder $query
     * @param string $batchNumber
     * @return Builder
     */
    public function scopeWithBatch(Builder $query, string $batchNumber): Builder
    {
        return $query->where('batch_number', $batchNumber);
    }

    /**
     * Scope to filter by serial number.
     *
     * @param Builder $query
     * @param string $serialNumber
     * @return Builder
     */
    public function scopeWithSerial(Builder $query, string $serialNumber): Builder
    {
        return $query->where('serial_number', $serialNumber);
    }

    /**
     * Scope to filter items with tracking information.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithTracking(Builder $query): Builder
    {
        return $query->where(function ($q) {
            $q->whereNotNull('batch_number')
                ->orWhereNotNull('serial_number');
        });
    }

    /**
     * Scope to filter by location.
     *
     * @param Builder $query
     * @param int $locationId
     * @return Builder
     */
    public function scopeAtLocation(Builder $query, int $locationId): Builder
    {
        return $query->where('location_id', $locationId);
    }

    /**
     * Scope to filter by shipment date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeShippedBetween(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereHas('shipment', function ($q) use ($startDate, $endDate) {
            $q->whereBetween('shipped_date', [$startDate, $endDate]);
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the full location path.
     *
     * @return string
     */
    public function getLocationPathAttribute(): string
    {
        return $this->location
            ? $this->location->full_location_path
            : 'Not assigned';
    }

    /**
     * Get comprehensive product information including tracking data.
     *
     * @return string
     */
    public function getProductInfoAttribute(): string
    {
        $info = $this->product->name;
        $tracking = [];

        if ($this->batch_number) {
            $tracking[] = "Batch: {$this->batch_number}";
        }

        if ($this->serial_number) {
            $tracking[] = "SN: {$this->serial_number}";
        }

        if (!empty($tracking)) {
            $info .= ' (' . implode(', ', $tracking) . ')';
        }

        return $info;
    }

    /**
     * Get tracking information as an array.
     *
     * @return array<string, string>
     */
    public function getTrackingInfoAttribute(): array
    {
        $info = [];

        if ($this->batch_number) {
            $info['batch'] = $this->batch_number;
        }

        if ($this->serial_number) {
            $info['serial'] = $this->serial_number;
        }

        return $info;
    }

    /**
     * Calculate the line value (quantity * unit price).
     *
     * @return float
     */
    public function getLineValueAttribute(): float
    {
        return $this->quantity_shipped * ($this->salesOrderItem->unit_price ?? 0);
    }

    /**
     * Check if this item has batch tracking.
     *
     * @return bool
     */
    public function getHasBatchAttribute(): bool
    {
        return !is_null($this->batch_number);
    }

    /**
     * Check if this item has serial tracking.
     *
     * @return bool
     */
    public function getHasSerialAttribute(): bool
    {
        return !is_null($this->serial_number);
    }

    /**
     * Get item summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'product' => [
                'id' => $this->product_id,
                'name' => $this->product->name,
                'sku' => $this->product->sku
            ],
            'quantity' => $this->quantity_shipped,
            'location' => $this->location_path,
            'tracking' => $this->tracking_info,
            'value' => $this->line_value,
            'shipment_number' => $this->shipment->shipment_number,
            'shipped_date' => $this->shipment->shipped_date?->format('Y-m-d')
        ];
    }

    /**
     * Get the unit price from the sales order item.
     *
     * @return float
     */
    public function getUnitPriceAttribute(): float
    {
        return $this->salesOrderItem->unit_price ?? 0;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if this item has batch tracking.
     *
     * @return bool
     */
    public function hasBatchTracking(): bool
    {
        return !is_null($this->batch_number);
    }

    /**
     * Check if this item has serial tracking.
     *
     * @return bool
     */
    public function hasSerialTracking(): bool
    {
        return !is_null($this->serial_number);
    }

    /**
     * Check if this item has any tracking.
     *
     * @return bool
     */
    public function hasTracking(): bool
    {
        return $this->hasBatchTracking() || $this->hasSerialTracking();
    }

    /**
     * Validate tracking data against product requirements.
     *
     * @return bool
     * @throws \Exception
     */
    public function validateTracking(): bool
    {
        $product = $this->product;

        if ($product->is_batch_tracked && !$this->batch_number) {
            throw new \Exception('Batch number is required for this product.');
        }

        if ($product->is_serial_tracked && !$this->serial_number) {
            throw new \Exception('Serial number is required for this product.');
        }

        return true;
    }

    /**
     * Update location information.
     *
     * @param int $locationId
     * @return bool
     */
    public function updateLocation(int $locationId): bool
    {
        if ($this->location_id == $locationId) {
            return true;
        }

        $this->location_id = $locationId;
        return $this->save();
    }

    /**
     * Get inventory record for this shipment item.
     *
     * @return Inventory|null
     */
    public function getInventoryRecord(): ?Inventory
    {
        return Inventory::where('product_id', $this->product_id)
            ->where('warehouse_id', $this->shipment->warehouse_id)
            ->where('location_id', $this->location_id)
            ->where('batch_number', $this->batch_number)
            ->where('serial_number', $this->serial_number)
            ->first();
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
        // Validate tracking data before saving
        static::saving(function (self $item) {
            // Only validate if product relationship is loaded
            if ($item->product) {
                try {
                    $item->validateTracking();
                } catch (\Exception $e) {
                    return false;
                }
            }

            return true;
        });

        // Record inventory movement after creation
        static::created(function (self $item) {
            // The inventory movement is already recorded in the SalesOrder->ship method
            // This could be enhanced for additional logging if needed
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get product shipping summary.
     *
     * @param int $productId
     * @param int $days
     * @return array
     */
    public static function getProductShippingSummary(int $productId, int $days = 30): array
    {
        $items = self::forProduct($productId)
            ->whereHas('shipment', function ($q) use ($days) {
                $q->where('shipped_date', '>=', now()->subDays($days));
            })
            ->get();

        return [
            'total_shipped' => $items->sum('quantity_shipped'),
            'total_value' => $items->sum('line_value'),
            'shipment_count' => $items->count(),
            'average_per_shipment' => $items->count() > 0
                ? round($items->avg('quantity_shipped'), 2)
                : 0,
            'by_location' => $items->groupBy('location_id')
                ->map(fn($locationItems) => [
                    'quantity' => $locationItems->sum('quantity_shipped'),
                    'value' => $locationItems->sum('line_value')
                ])
        ];
    }

    /**
     * Get items requiring tracking validation.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function getItemsNeedingTrackingValidation(): \Illuminate\Database\Eloquent\Collection
    {
        return self::with(['product', 'shipment'])
            ->whereHas('product', function ($q) {
                $q->where('is_batch_tracked', true)
                    ->orWhere('is_serial_tracked', true);
            })
            ->where(function ($q) {
                $q->whereNull('batch_number')
                    ->orWhereNull('serial_number');
            })
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for shipment documentation.
     *
     * @return array
     */
    public function toDocumentArray(): array
    {
        return [
            'product_name' => $this->product->name,
            'product_sku' => $this->product->sku,
            'quantity' => $this->quantity_shipped,
            'batch' => $this->batch_number,
            'serial' => $this->serial_number,
            'location' => $this->location_path
        ];
    }

    /**
     * Get the age of this shipment item.
     *
     * @return int|null Days since shipment
     */
    public function getAgeInDaysAttribute(): ?int
    {
        return $this->shipment?->shipped_date?->diffInDays(now());
    }

    /**
     * Get a unique identifier for traceability.
     *
     * @return string
     */
    public function getTraceabilityIdAttribute(): string
    {
        $parts = [
            "SHIP:{$this->shipment_id}",
            "SO:{$this->salesOrderItem->sales_order_id}",
            "PROD:{$this->product_id}"
        ];

        if ($this->batch_number) {
            $parts[] = "BATCH:{$this->batch_number}";
        }

        if ($this->serial_number) {
            $parts[] = "S/N:{$this->serial_number}";
        }

        return implode(' | ', $parts);
    }
}
