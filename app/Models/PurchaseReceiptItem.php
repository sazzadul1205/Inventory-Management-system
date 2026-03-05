<?php
// app/Models/PurchaseReceiptItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Purchase Receipt Item Model
 * 
 * Represents an individual line item within a purchase receipt. Tracks the receipt
 * of specific products, including quantities, locations, and tracking information
 * such as batch numbers, serial numbers, and expiry dates. Provides the link between
 * purchase orders and actual inventory receipt.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $purchase_receipt_id
 * @property int $purchase_order_item_id
 * @property int $product_id
 * @property int|null $location_id
 * @property int $quantity_received
 * @property string|null $batch_number
 * @property string|null $serial_number
 * @property \Carbon\Carbon|null $expiry_date
 * @property float $unit_cost
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read PurchaseReceipt $purchaseReceipt
 * @property-read PurchaseOrderItem $purchaseOrderItem
 * @property-read Product $product
 * @property-read Location|null $location
 * @property-read float $total_cost
 * @property-read bool $is_expirable
 * @property-read bool $is_expired
 * @property-read int|null $days_until_expiry
 * @property-read string $location_path
 * @property-read array $tracking_info
 */
class PurchaseReceiptItem extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'purchase_receipt_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'purchase_receipt_id',
        'purchase_order_item_id',
        'product_id',
        'location_id',
        'quantity_received',
        'batch_number',
        'serial_number',
        'expiry_date',
        'unit_cost',
        'notes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity_received' => 'integer',
        'unit_cost' => 'decimal:2',
        'expiry_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'quantity_received' => 0,
        'unit_cost' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent purchase receipt.
     *
     * @return BelongsTo
     */
    public function purchaseReceipt(): BelongsTo
    {
        return $this->belongsTo(PurchaseReceipt::class);
    }

    /**
     * Get the original purchase order item.
     *
     * @return BelongsTo
     */
    public function purchaseOrderItem(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrderItem::class);
    }

    /**
     * Get the product that was received.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the location where the product was stored.
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
     * Scope to filter items expiring before a date.
     *
     * @param Builder $query
     * @param string $date
     * @return Builder
     */
    public function scopeExpiringBefore(Builder $query, string $date): Builder
    {
        return $query->where('expiry_date', '<=', $date)
            ->whereNotNull('expiry_date');
    }

    /**
     * Scope to filter expired items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeExpired(Builder $query): Builder
    {
        return $query->where('expiry_date', '<', now())
            ->whereNotNull('expiry_date');
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
     * Scope to filter by receipt date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeReceivedBetween(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereHas('purchaseReceipt', function ($q) use ($startDate, $endDate) {
            $q->whereBetween('receipt_date', [$startDate, $endDate]);
        });
    }

    /**
     * Scope to include items with tracking information.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithTracking(Builder $query): Builder
    {
        return $query->where(function ($q) {
            $q->whereNotNull('batch_number')
                ->orWhereNotNull('serial_number')
                ->orWhereNotNull('expiry_date');
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Calculate total cost for this receipt item.
     *
     * @return float
     */
    public function getTotalCostAttribute(): float
    {
        return $this->quantity_received * ($this->unit_cost ?? 0);
    }

    /**
     * Check if this item has expiry tracking.
     *
     * @return bool
     */
    public function getIsExpirableAttribute(): bool
    {
        return $this->expiry_date !== null;
    }

    /**
     * Check if this item has expired.
     *
     * @return bool
     */
    public function getIsExpiredAttribute(): bool
    {
        return $this->expiry_date && $this->expiry_date->isPast();
    }

    /**
     * Get days until expiry.
     *
     * @return int|null
     */
    public function getDaysUntilExpiryAttribute(): ?int
    {
        if (!$this->expiry_date) {
            return null;
        }

        $diff = now()->diffInDays($this->expiry_date, false);
        return $diff > 0 ? $diff : 0;
    }

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
     * Get tracking information as an array.
     *
     * @return array<string, mixed>
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

        if ($this->expiry_date) {
            $info['expiry'] = $this->expiry_date->format('Y-m-d');
            $info['expiry_status'] = $this->expiry_status;
        }

        return $info;
    }

    /**
     * Get expiry status text.
     *
     * @return string|null
     */
    public function getExpiryStatusAttribute(): ?string
    {
        if (!$this->expiry_date) {
            return null;
        }

        if ($this->is_expired) {
            return 'Expired';
        }

        $days = $this->days_until_expiry;

        if ($days <= 30) {
            return "Expires in {$days} days";
        }

        return 'Valid';
    }

    /**
     * Get receipt date from parent receipt.
     *
     * @return string|null
     */
    public function getReceiptDateAttribute(): ?string
    {
        return $this->purchaseReceipt?->receipt_date?->format('Y-m-d');
    }

    /**
     * Get the unit cost with currency formatting.
     *
     * @return string
     */
    public function getFormattedUnitCostAttribute(): string
    {
        return '$' . number_format($this->unit_cost, 2);
    }

    /**
     * Get the total cost with currency formatting.
     *
     * @return string
     */
    public function getFormattedTotalCostAttribute(): string
    {
        return '$' . number_format($this->total_cost, 2);
    }

    /**
     * Get the item summary.
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
            'quantity' => $this->quantity_received,
            'unit_cost' => $this->unit_cost,
            'total_cost' => $this->total_cost,
            'location' => $this->location_path,
            'tracking' => $this->tracking_info,
            'receipt_number' => $this->purchaseReceipt->receipt_number,
            'receipt_date' => $this->receipt_date
        ];
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
        return $this->hasBatchTracking() || 
               $this->hasSerialTracking() || 
               $this->is_expirable;
    }

    /**
     * Validate tracking data based on product settings.
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

        if ($product->is_expirable && !$this->expiry_date) {
            throw new \Exception('Expiry date is required for this product.');
        }

        return true;
    }

    /**
     * Move this item to a different location.
     *
     * @param int $newLocationId
     * @return bool
     */
    public function moveToLocation(int $newLocationId): bool
    {
        if ($this->location_id == $newLocationId) {
            return true;
        }

        $this->location_id = $newLocationId;
        return $this->save();
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

        // Update inventory movements if needed (could be expanded)
        static::saved(function (self $item) {
            // Future: Update related inventory movements if tracking data changes
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get receipt summary for a product.
     *
     * @param int $productId
     * @param int $days
     * @return array
     */
    public static function getProductReceiptSummary(int $productId, int $days = 30): array
    {
        $items = self::forProduct($productId)
            ->whereHas('purchaseReceipt', function ($q) use ($days) {
                $q->where('receipt_date', '>=', now()->subDays($days));
            })
            ->get();

        return [
            'total_quantity' => $items->sum('quantity_received'),
            'total_cost' => $items->sum('total_cost'),
            'receipt_count' => $items->count(),
            'average_unit_cost' => $items->sum('quantity_received') > 0
                ? round($items->sum('total_cost') / $items->sum('quantity_received'), 2)
                : 0,
            'by_location' => $items->groupBy('location_id')
               ->map(function ($locationItems) {
                    return [
                        'quantity' => $locationItems->sum('quantity_received'),
                        'value' => $locationItems->sum('total_cost')
                    ];
                })
        ];
    }

    /**
     * Get expiring items summary.
     *
     * @param int $daysThreshold
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function getExpiringItems(int $daysThreshold = 30): \Illuminate\Database\Eloquent\Collection
    {
        return self::with(['product', 'location', 'purchaseReceipt'])
            ->whereNotNull('expiry_date')
            ->where('expiry_date', '<=', now()->addDays($daysThreshold))
            ->where('expiry_date', '>', now())
            ->orderBy('expiry_date')
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for inventory adjustment.
     *
     * @return array
     */
    public function toInventoryArray(): array
    {
        return [
            'product_id' => $this->product_id,
            'warehouse_id' => $this->purchaseReceipt->warehouse_id,
            'location_id' => $this->location_id,
            'batch_number' => $this->batch_number,
            'serial_number' => $this->serial_number,
            'expiry_date' => $this->expiry_date?->format('Y-m-d'),
            'quantity' => $this->quantity_received,
            'unit_cost' => $this->unit_cost
        ];
    }

    /**
     * Get the age of this receipt item.
     *
     * @return int|null Days since receipt
     */
    public function getAgeInDaysAttribute(): ?int
    {
        return $this->purchaseReceipt?->receipt_date?->diffInDays(now());
    }
}
