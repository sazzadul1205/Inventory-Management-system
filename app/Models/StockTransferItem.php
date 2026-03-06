<?php
// app/Models/StockTransferItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Stock Transfer Item Model
 * 
 * Represents an individual line item within a stock transfer between warehouses.
 * Tracks quantities requested, shipped, and received, along with location and
 * tracking information. Provides comprehensive status tracking and progress
 * metrics for each transferred item.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property int $stock_transfer_id
 * @property int $product_id
 * @property int|null $from_location_id
 * @property int|null $to_location_id
 * @property int $quantity_requested
 * @property int $quantity_shipped
 * @property int $quantity_received
 * @property string|null $batch_number
 * @property string|null $serial_number
 * @property float|null $unit_cost
 * @property string|null $notes
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read StockTransfer $stockTransfer
 * @property-read Product $product
 * @property-read Location|null $fromLocation
 * @property-read Location|null $toLocation
 * @property-read string $status
 * @property-read string $status_label
 * @property-read array $progress
 * @property-read int $remaining_to_ship
 * @property-read int $remaining_to_receive
 * @property-read bool $is_fully_shipped
 * @property-read bool $is_fully_received
 * @property-read float $total_cost
 * @property-read string $from_location_path
 * @property-read string $to_location_path
 * @property-read string $product_info
 * @property-read array $summary
 */
class StockTransferItem extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'stock_transfer_items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'stock_transfer_id',
        'product_id',
        'from_location_id',
        'to_location_id',
        'quantity_requested',
        'quantity_shipped',
        'quantity_received',
        'batch_number',
        'serial_number',
        'unit_cost',
        'notes'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity_requested' => 'integer',
        'quantity_shipped' => 'integer',
        'quantity_received' => 'integer',
        'unit_cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'quantity_requested' => 1,
        'quantity_shipped' => 0,
        'quantity_received' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Virtual Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Item awaiting shipment */
    const STATUS_PENDING = 'pending';

    /** @var string Item has been shipped */
    const STATUS_SHIPPED = 'shipped';

    /** @var string Item partially received */
    const STATUS_PARTIALLY_RECEIVED = 'partially_received';

    /** @var string Item fully received */
    const STATUS_RECEIVED = 'received';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    protected static $statusLabels = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_PARTIALLY_RECEIVED => 'Partially Received',
        self::STATUS_RECEIVED => 'Received'
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the parent stock transfer.
     *
     * @return BelongsTo
     */
    public function stockTransfer(): BelongsTo
    {
        return $this->belongsTo(StockTransfer::class);
    }

    /**
     * Get the product being transferred.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the source location.
     *
     * @return BelongsTo
     */
    public function fromLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'from_location_id');
    }

    /**
     * Get the destination location.
     *
     * @return BelongsTo
     */
    public function toLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'to_location_id');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to pending items (not shipped).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePending(Builder $query): Builder
    {
        return $query->where('quantity_shipped', 0);
    }

    /**
     * Scope to shipped items (not received).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeShipped(Builder $query): Builder
    {
        return $query->where('quantity_shipped', '>', 0)
            ->where('quantity_received', 0);
    }

    /**
     * Scope to partially received items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePartiallyReceived(Builder $query): Builder
    {
        return $query->where('quantity_received', '>', 0)
            ->whereRaw('quantity_received < quantity_requested');
    }

    /**
     * Scope to fully received items.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeReceived(Builder $query): Builder
    {
        return $query->whereRaw('quantity_received >= quantity_requested');
    }

    /**
     * Scope to items needing action (not fully received).
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeNeedsAction(Builder $query): Builder
    {
        return $query->whereRaw('quantity_received < quantity_requested');
    }

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
     * Scope to filter by source location.
     *
     * @param Builder $query
     * @param int $locationId
     * @return Builder
     */
    public function scopeFromLocation(Builder $query, int $locationId): Builder
    {
        return $query->where('from_location_id', $locationId);
    }

    /**
     * Scope to filter by destination location.
     *
     * @param Builder $query
     * @param int $locationId
     * @return Builder
     */
    public function scopeToLocation(Builder $query, int $locationId): Builder
    {
        return $query->where('to_location_id', $locationId);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get the current status based on quantities.
     *
     * @return string
     */
    public function getStatusAttribute(): string
    {
        return match (true) {
            $this->quantity_received >= $this->quantity_requested => self::STATUS_RECEIVED,
            $this->quantity_received > 0 => self::STATUS_PARTIALLY_RECEIVED,
            $this->quantity_shipped > 0 => self::STATUS_SHIPPED,
            default => self::STATUS_PENDING,
        };
    }

    /**
     * Get human-readable status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return self::$statusLabels[$this->status] ?? ucfirst($this->status);
    }

    /**
     * Get shipping/receiving progress.
     *
     * @return array<string, mixed>
     */
    public function getProgressAttribute(): array
    {
        $shippedPercentage = $this->quantity_requested > 0
            ? round(($this->quantity_shipped / $this->quantity_requested) * 100, 2)
            : 0;

        $receivedPercentage = $this->quantity_requested > 0
            ? round(($this->quantity_received / $this->quantity_requested) * 100, 2)
            : 0;

        return [
            'shipped' => $this->quantity_shipped,
            'received' => $this->quantity_received,
            'requested' => $this->quantity_requested,
            'shipped_percentage' => $shippedPercentage,
            'received_percentage' => $receivedPercentage
        ];
    }

    /**
     * Get remaining quantity to ship.
     *
     * @return int
     */
    public function getRemainingToShipAttribute(): int
    {
        return max(0, $this->quantity_requested - $this->quantity_shipped);
    }

    /**
     * Get remaining quantity to receive.
     *
     * @return int
     */
    public function getRemainingToReceiveAttribute(): int
    {
        return max(0, $this->quantity_shipped - $this->quantity_received);
    }

    /**
     * Check if item is fully shipped.
     *
     * @return bool
     */
    public function getIsFullyShippedAttribute(): bool
    {
        return $this->quantity_shipped >= $this->quantity_requested;
    }

    /**
     * Check if item is fully received.
     *
     * @return bool
     */
    public function getIsFullyReceivedAttribute(): bool
    {
        return $this->quantity_received >= $this->quantity_requested;
    }

    /**
     * Calculate total cost of requested quantity.
     *
     * @return float
     */
    public function getTotalCostAttribute(): float
    {
        return ($this->unit_cost ?? 0) * $this->quantity_requested;
    }

    /**
     * Get the full source location path.
     *
     * @return string
     */
    public function getFromLocationPathAttribute(): string
    {
        return $this->fromLocation
            ? $this->fromLocation->full_location_path
            : 'Not assigned';
    }

    /**
     * Get the full destination location path.
     *
     * @return string
     */
    public function getToLocationPathAttribute(): string
    {
        return $this->toLocation
            ? $this->toLocation->full_location_path
            : 'Not assigned';
    }

    /**
     * Get comprehensive product information with tracking.
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
            'from_location' => $this->from_location_path,
            'to_location' => $this->to_location_path,
            'quantities' => [
                'requested' => $this->quantity_requested,
                'shipped' => $this->quantity_shipped,
                'received' => $this->quantity_received,
                'remaining_to_ship' => $this->remaining_to_ship,
                'remaining_to_receive' => $this->remaining_to_receive
            ],
            'progress' => $this->progress,
            'status' => $this->status_label,
            'tracking' => [
                'batch' => $this->batch_number,
                'serial' => $this->serial_number
            ],
            'unit_cost' => $this->unit_cost,
            'total_cost' => $this->total_cost
        ];
    }

    /**
     * Get tracking information as array.
     *
     * @return array<string, string|null>
     */
    public function getTrackingInfoAttribute(): array
    {
        return [
            'batch' => $this->batch_number,
            'serial' => $this->serial_number
        ];
    }

    /**
     * Get the shipped value (financial).
     *
     * @return float
     */
    public function getShippedValueAttribute(): float
    {
        return ($this->unit_cost ?? 0) * $this->quantity_shipped;
    }

    /**
     * Get the received value (financial).
     *
     * @return float
     */
    public function getReceivedValueAttribute(): float
    {
        return ($this->unit_cost ?? 0) * $this->quantity_received;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Check if item can be shipped.
     *
     * @return bool
     */
    public function canShip(): bool
    {
        return $this->quantity_shipped < $this->quantity_requested;
    }

    /**
     * Check if item can be received.
     *
     * @return bool
     */
    public function canReceive(): bool
    {
        return $this->quantity_received < $this->quantity_shipped;
    }

    /**
     * Get available inventory at source for this item.
     *
     * @return int
     */
    public function getAvailableInventory(): int
    {
        return Inventory::available()
            ->byProduct($this->product_id)
            ->inWarehouse($this->stockTransfer->from_warehouse_id)
            ->when($this->from_location_id, fn($q) => $q->inLocation($this->from_location_id))
            ->when($this->batch_number, fn($q) => $q->byBatch($this->batch_number))
            ->when($this->serial_number, fn($q) => $q->bySerial($this->serial_number))
            ->sum('quantity_available');
    }

    /**
     * Get suggested source location based on available inventory.
     *
     * @return Location|null
     */
    public function getSuggestedSourceLocation(): ?Location
    {
        $inventory = Inventory::available()
            ->byProduct($this->product_id)
            ->inWarehouse($this->stockTransfer->from_warehouse_id)
            ->when($this->batch_number, fn($q) => $q->byBatch($this->batch_number))
            ->when($this->serial_number, fn($q) => $q->bySerial($this->serial_number))
            ->orderBy('expiry_date')
            ->orderBy('created_at')
            ->first();

        return $inventory?->location;
    }

    /**
     * Get suggested destination location.
     *
     * @return Location|null
     */
    public function getSuggestedDestinationLocation(): ?Location
    {
        return Location::where('warehouse_id', $this->stockTransfer->to_warehouse_id)
            ->available()
            ->where('is_active', true)
            ->orderBy('current_utilization')
            ->first();
    }

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
        // Validate quantities
        static::saving(function (self $item) {
            if ($item->quantity_requested <= 0) {
                return false;
            }

            if ($item->quantity_shipped < 0 || $item->quantity_received < 0) {
                return false;
            }

            if ($item->quantity_shipped > $item->quantity_requested) {
                return false;
            }

            if ($item->quantity_received > $item->quantity_shipped) {
                return false;
            }

            return true;
        });

        // Update parent transfer when item changes
        static::saved(function (self $item) {
            // This will trigger any status updates needed on the parent transfer
            // The parent transfer already handles this in its ship/receive methods
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get product transfer summary.
     *
     * @param int $productId
     * @param int $days
     * @return array
     */
    public static function getProductTransferSummary(int $productId, int $days = 90): array
    {
        $items = self::forProduct($productId)
            ->whereHas('stockTransfer', function ($q) use ($days) {
                $q->where('request_date', '>=', now()->subDays($days));
            })
            ->get();

        return [
            'total_transfers' => $items->count(),
            'total_requested' => $items->sum('quantity_requested'),
            'total_shipped' => $items->sum('quantity_shipped'),
            'total_received' => $items->sum('quantity_received'),
            'completion_rate' => $items->sum('quantity_requested') > 0
                ? round(($items->sum('quantity_received') / $items->sum('quantity_requested')) * 100, 2)
                : 100,
            'pending_items' => $items->filter(fn($i) => $i->status === self::STATUS_PENDING)->count(),
            'in_transit' => $items->filter(fn($i) => $i->status === self::STATUS_SHIPPED)->count()
        ];
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for shipment form.
     *
     * @return array
     */
    public function toShipmentForm(): array
    {
        return [
            'id' => $this->id,
            'product_name' => $this->product->name,
            'product_sku' => $this->product->sku,
            'requested' => $this->quantity_requested,
            'shipped' => $this->quantity_shipped,
            'remaining_to_ship' => $this->remaining_to_ship,
            'batch_tracked' => $this->product->is_batch_tracked,
            'serial_tracked' => $this->product->is_serial_tracked,
            'batch_number' => $this->batch_number,
            'serial_number' => $this->serial_number,
            'from_location_id' => $this->from_location_id,
            'suggested_location_id' => $this->getSuggestedSourceLocation()?->id
        ];
    }

    /**
     * Format for receipt form.
     *
     * @return array
     */
    public function toReceiptForm(): array
    {
        return [
            'id' => $this->id,
            'product_name' => $this->product->name,
            'product_sku' => $this->product->sku,
            'requested' => $this->quantity_requested,
            'shipped' => $this->quantity_shipped,
            'received' => $this->quantity_received,
            'remaining_to_receive' => $this->remaining_to_receive,
            'batch_number' => $this->batch_number,
            'serial_number' => $this->serial_number,
            'to_location_id' => $this->to_location_id,
            'suggested_location_id' => $this->getSuggestedDestinationLocation()?->id
        ];
    }
}
