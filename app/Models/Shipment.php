<?php
// app/Models/Shipment.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

/**
 * Shipment Model
 * 
 * Represents a physical shipment of goods from the warehouse to the customer.
 * Tracks the complete shipping lifecycle from packing through delivery,
 * including carrier information, tracking numbers, and shipping costs.
 * Integrates with sales orders and inventory management.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $shipment_number
 * @property int $sales_order_id
 * @property int $warehouse_id
 * @property \Carbon\Carbon $shipped_date
 * @property \Carbon\Carbon|null $delivery_date
 * @property string|null $carrier
 * @property string|null $tracking_number
 * @property string|null $shipping_method
 * @property float $shipping_cost
 * @property string $status
 * @property string|null $notes
 * @property int|null $shipped_by
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * 
 * @property-read SalesOrder $salesOrder
 * @property-read Warehouse $warehouse
 * @property-read Collection|ShipmentItem[] $items
 * @property-read User|null $shippedBy
 * @property-read string $status_label
 * @property-read int $total_items
 * @property-read int $total_quantity
 * @property-read string|null $tracking_url
 * @property-read float $total_value
 * @property-read array $summary
 */
class Shipment extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'shipment_number',
        'sales_order_id',
        'warehouse_id',
        'shipped_date',
        'delivery_date',
        'carrier',
        'tracking_number',
        'shipping_method',
        'shipping_cost',
        'status',
        'notes',
        'shipped_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'shipped_date' => 'datetime',
        'delivery_date' => 'datetime',
        'shipping_cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array<string, mixed>
     */
    protected $attributes = [
        'status' => self::STATUS_PENDING,
        'shipping_cost' => 0
    ];

    /**
     * --------------------------------------------------------------------------
     * Status Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Shipment is pending processing */
    const STATUS_PENDING = 'pending';

    /** @var string Items have been packed */
    const STATUS_PACKED = 'packed';

    /** @var string Shipment has been dispatched */
    const STATUS_SHIPPED = 'shipped';

    /** @var string Shipment has been delivered */
    const STATUS_DELIVERED = 'delivered';

    /** @var string Shipment was cancelled */
    const STATUS_CANCELLED = 'cancelled';

    /**
     * Human-readable status labels.
     *
     * @var array<string, string>
     */
    public static $statuses = [
        self::STATUS_PENDING => 'Pending',
        self::STATUS_PACKED => 'Packed',
        self::STATUS_SHIPPED => 'Shipped',
        self::STATUS_DELIVERED => 'Delivered',
        self::STATUS_CANCELLED => 'Cancelled'
    ];

    /**
     * Statuses that indicate the shipment is active.
     *
     * @var array<string>
     */
    const ACTIVE_STATUSES = [
        self::STATUS_PENDING,
        self::STATUS_PACKED,
        self::STATUS_SHIPPED
    ];

    /**
     * Statuses that indicate the shipment is completed.
     *
     * @var array<string>
     */
    const COMPLETED_STATUSES = [
        self::STATUS_DELIVERED,
        self::STATUS_CANCELLED
    ];

    /**
     * Carrier tracking URL templates.
     *
     * @var array<string, string>
     */
    const CARRIER_TRACKING_URLS = [
        'UPS' => 'https://www.ups.com/track?tracknum=',
        'FedEx' => 'https://www.fedex.com/fedextrack/?trknbr=',
        'USPS' => 'https://tools.usps.com/go/TrackConfirmAction?tLabels=',
        'DHL' => 'https://www.dhl.com/en/express/tracking.html?AWB=',
        'Amazon' => 'https://track.amazon.com/tracking/',
        'CanadaPost' => 'https://www.canadapost-postescanada.ca/track-reperage/en#/resultList?trackingNumber='
    ];

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the sales order this shipment belongs to.
     *
     * @return BelongsTo
     */
    public function salesOrder(): BelongsTo
    {
        return $this->belongsTo(SalesOrder::class);
    }

    /**
     * Get the warehouse this shipment originated from.
     *
     * @return BelongsTo
     */
    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class);
    }

    /**
     * Get all items in this shipment.
     *
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(ShipmentItem::class);
    }

    /**
     * Get the user who shipped this order.
     *
     * @return BelongsTo
     */
    public function shippedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'shipped_by');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to pending shipments.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePending(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PENDING);
    }

    /**
     * Scope to packed shipments.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopePacked(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PACKED);
    }

    /**
     * Scope to shipped shipments.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeShipped(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_SHIPPED);
    }

    /**
     * Scope to delivered shipments.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeDelivered(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_DELIVERED);
    }

    /**
     * Scope to active shipments.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeActive(Builder $query): Builder
    {
        return $query->whereIn('status', self::ACTIVE_STATUSES);
    }

    /**
     * Scope to completed shipments.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeCompleted(Builder $query): Builder
    {
        return $query->whereIn('status', self::COMPLETED_STATUSES);
    }

    /**
     * Scope to filter by sales order.
     *
     * @param Builder $query
     * @param int $soId
     * @return Builder
     */
    public function scopeForSalesOrder(Builder $query, int $soId): Builder
    {
        return $query->where('sales_order_id', $soId);
    }

    /**
     * Scope to filter by warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeForWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('warehouse_id', $warehouseId);
    }

    /**
     * Scope to filter by carrier.
     *
     * @param Builder $query
     * @param string $carrier
     * @return Builder
     */
    public function scopeByCarrier(Builder $query, string $carrier): Builder
    {
        return $query->where('carrier', $carrier);
    }

    /**
     * Scope to filter by date range.
     *
     * @param Builder $query
     * @param string $startDate
     * @param string $endDate
     * @return Builder
     */
    public function scopeBetweenDates(Builder $query, string $startDate, string $endDate): Builder
    {
        return $query->whereBetween('shipped_date', [$startDate, $endDate]);
    }

    /**
     * Scope to shipments with tracking numbers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithTracking(Builder $query): Builder
    {
        return $query->whereNotNull('tracking_number');
    }

    /**
     * Scope to shipments without tracking numbers.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeWithoutTracking(Builder $query): Builder
    {
        return $query->whereNull('tracking_number');
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get human-readable status label.
     *
     * @return string
     */
    public function getStatusLabelAttribute(): string
    {
        return self::$statuses[$this->status] ?? ucfirst($this->status);
    }

    /**
     * Get total number of unique items in shipment.
     *
     * @return int
     */
    public function getTotalItemsAttribute(): int
    {
        return $this->items->count();
    }

    /**
     * Get total quantity of items shipped.
     *
     * @return int
     */
    public function getTotalQuantityAttribute(): int
    {
        return $this->items->sum('quantity_shipped');
    }

    /**
     * Generate tracking URL based on carrier and tracking number.
     *
     * @return string|null
     */
    public function getTrackingUrlAttribute(): ?string
    {
        if (!$this->tracking_number || !$this->carrier) {
            return null;
        }

        $url = self::CARRIER_TRACKING_URLS[$this->carrier] ?? null;

        return $url ? $url . $this->tracking_number : null;
    }

    /**
     * Get total value of shipped items.
     *
     * @return float
     */
    public function getTotalValueAttribute(): float
    {
        return $this->items->sum(function ($item) {
            return $item->quantity_shipped * $item->salesOrderItem->unit_price;
        });
    }

    /**
     * Get shipment summary.
     *
     * @return array
     */
    public function getSummaryAttribute(): array
    {
        return [
            'id' => $this->id,
            'shipment_number' => $this->shipment_number,
            'sales_order' => $this->salesOrder->so_number,
            'customer' => $this->salesOrder->customer->name,
            'warehouse' => $this->warehouse->name,
            'shipped_date' => $this->shipped_date?->format('Y-m-d'),
            'delivery_date' => $this->delivery_date?->format('Y-m-d'),
            'carrier' => $this->carrier,
            'tracking_number' => $this->tracking_number,
            'total_items' => $this->total_items,
            'total_quantity' => $this->total_quantity,
            'total_value' => $this->total_value,
            'status' => $this->status_label
        ];
    }

    /**
     * Get the display number with status.
     *
     * @return string
     */
    public function getDisplayNumberAttribute(): string
    {
        return "{$this->shipment_number} ({$this->status_label})";
    }

    /**
     * Get shipping progress percentage.
     *
     * @return int
     */
    public function getProgressPercentageAttribute(): int
    {
        return match ($this->status) {
            self::STATUS_DELIVERED => 100,
            self::STATUS_SHIPPED => 75,
            self::STATUS_PACKED => 50,
            self::STATUS_PENDING => 25,
            default => 0,
        };
    }

    /**
     * Get estimated delivery date if not delivered.
     *
     * @return string|null
     */
    public function getEstimatedDeliveryAttribute(): ?string
    {
        if ($this->delivery_date) {
            return $this->delivery_date->format('Y-m-d');
        }

        // This could be enhanced with carrier-specific transit time calculations
        return null;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique shipment number.
     * Format: SHIP-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generateShipmentNumber(): string
    {
        $prefix = 'SHIP';
        $yearMonth = now()->format('Ym');

        $lastShipment = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastShipment && preg_match('/-(\d{4})$/', $lastShipment->shipment_number, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$yearMonth}-{$newNumber}";
    }

    /**
     * Mark shipment as packed.
     *
     * @param string|null $notes
     * @return self
     */
    public function markAsPacked(?string $notes = null): self
    {
        return DB::transaction(function () use ($notes) {
            $this->status = self::STATUS_PACKED;

            if ($notes) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Packed: {$notes}";
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Mark shipment as shipped.
     *
     * @param array $shippingData
     * @return self
     */
    public function markAsShipped(array $shippingData): self
    {
        return DB::transaction(function () use ($shippingData) {
            $this->status = self::STATUS_SHIPPED;
            $this->carrier = $shippingData['carrier'] ?? $this->carrier;
            $this->tracking_number = $shippingData['tracking_number'] ?? $this->tracking_number;
            $this->shipping_method = $shippingData['shipping_method'] ?? $this->shipping_method;

            if (isset($shippingData['notes'])) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Shipped: {$shippingData['notes']}";
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Mark shipment as delivered.
     *
     * @param string|null $notes
     * @return self
     */
    public function markAsDelivered(?string $notes = null): self
    {
        return DB::transaction(function () use ($notes) {
            $this->status = self::STATUS_DELIVERED;
            $this->delivery_date = now();

            if ($notes) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Delivered: {$notes}";
            }

            $this->save();

            // Update sales order status if all shipments are delivered
            $this->checkAndUpdateSalesOrderStatus();

            return $this;
        });
    }

    /**
     * Cancel the shipment.
     *
     * @param string|null $reason
     * @return self
     * @throws \Exception
     */
    public function cancel(?string $reason = null): self
    {
        return DB::transaction(function () use ($reason) {
            if ($this->status === self::STATUS_SHIPPED) {
                throw new \Exception('Cannot cancel a shipment that has already been shipped.');
            }

            $this->status = self::STATUS_CANCELLED;

            if ($reason) {
                $this->notes = ($this->notes ? $this->notes . "\n" : '') . "Cancelled: {$reason}";
            }

            $this->save();

            return $this;
        });
    }

    /**
     * Check and update parent sales order status.
     *
     * @return void
     */
    protected function checkAndUpdateSalesOrderStatus(): void
    {
        $salesOrder = $this->salesOrder;

        // Check if all items in the sales order are fully shipped
        $allShipped = $salesOrder->items->every(function ($item) {
            return $item->quantity_shipped >= $item->quantity_ordered;
        });

        if ($allShipped) {
            $salesOrder->updateStatus();
        }
    }

    /**
     * Update tracking information.
     *
     * @param string $trackingNumber
     * @param string|null $carrier
     * @return self
     */
    public function updateTracking(string $trackingNumber, ?string $carrier = null): self
    {
        $this->tracking_number = $trackingNumber;

        if ($carrier) {
            $this->carrier = $carrier;
        }

        $this->save();

        return $this;
    }

    /**
     * Add items to this shipment.
     *
     * @param array $items
     * @return Collection
     * @throws \Exception
     */
    public function addItems(array $items): Collection
    {
        return DB::transaction(function () use ($items) {
            $createdItems = collect();

            foreach ($items as $itemData) {
                // Validate the sales order item exists and belongs to the correct order
                $soItem = SalesOrderItem::where('sales_order_id', $this->sales_order_id)
                    ->where('id', $itemData['sales_order_item_id'])
                    ->firstOrFail();

                // Check if we're not exceeding ordered quantity
                $totalShipped = $soItem->quantity_shipped + $itemData['quantity_shipped'];
                if ($totalShipped > $soItem->quantity_ordered) {
                    throw new \Exception("Cannot ship more than ordered quantity for product: {$soItem->product->name}");
                }

                // Create shipment item
                $shipmentItem = $this->items()->create([
                    'sales_order_item_id' => $soItem->id,
                    'product_id' => $soItem->product_id,
                    'location_id' => $itemData['location_id'],
                    'quantity_shipped' => $itemData['quantity_shipped'],
                    'batch_number' => $itemData['batch_number'] ?? null,
                    'serial_number' => $itemData['serial_number'] ?? null,
                    'notes' => $itemData['notes'] ?? null
                ]);

                // Update sales order item
                $soItem->ship($itemData['quantity_shipped']);

                $createdItems->push($shipmentItem);
            }

            return $createdItems;
        });
    }

    /**
     * Check if shipment is complete.
     *
     * @return bool
     */
    public function isComplete(): bool
    {
        return $this->status === self::STATUS_DELIVERED;
    }

    /**
     * Get days in transit.
     *
     * @return int|null
     */
    public function getDaysInTransitAttribute(): ?int
    {
        if (!$this->shipped_date) {
            return null;
        }

        $endDate = $this->delivery_date ?? now();

        return $this->shipped_date->diffInDays($endDate);
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
        // Auto-generate shipment number
        static::creating(function (self $shipment) {
            if (empty($shipment->shipment_number)) {
                $shipment->shipment_number = self::generateShipmentNumber();
            }

            if (empty($shipment->shipped_date)) {
                $shipment->shipped_date = now();
            }
        });

        // Validate status transitions
        static::updating(function (self $shipment) {
            $originalStatus = $shipment->getOriginal('status');

            // Prevent invalid status transitions
            if (
                $originalStatus === self::STATUS_DELIVERED &&
                $shipment->status !== self::STATUS_DELIVERED
            ) {
                return false;
            }

            if ($originalStatus === self::STATUS_CANCELLED) {
                return false;
            }

            return true;
        });

        // Clean up items before deletion
        static::deleting(function (self $shipment) {
            if ($shipment->status === self::STATUS_SHIPPED) {
                throw new \Exception('Cannot delete a shipped shipment.');
            }

            $shipment->items()->delete();
        });
    }

    /**
     * --------------------------------------------------------------------------
     * Statistics Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get shipment statistics.
     *
     * @param int $days
     * @return array<string, mixed>
     */
    public static function getStatistics(int $days = 30): array
    {
        $since = now()->subDays($days);

        $stats = self::where('shipped_date', '>=', $since)
            ->selectRaw('
                COUNT(*) as total_shipments,
                SUM(CASE WHEN status = "delivered" THEN 1 ELSE 0 END) as delivered_shipments,
                SUM(CASE WHEN status = "cancelled" THEN 1 ELSE 0 END) as cancelled_shipments,
                SUM(shipping_cost) as total_shipping_cost,
                AVG(shipping_cost) as average_shipping_cost
            ')
            ->first();

        $byCarrier = self::where('shipped_date', '>=', $since)
            ->select('carrier', DB::raw('COUNT(*) as count'), DB::raw('SUM(shipping_cost) as total_cost'))
            ->whereNotNull('carrier')
            ->groupBy('carrier')
            ->get()
            ->keyBy('carrier');

        return [
            'period_days' => $days,
            'total_shipments' => $stats->total_shipments ?? 0,
            'delivered_shipments' => $stats->delivered_shipments ?? 0,
            'cancelled_shipments' => $stats->cancelled_shipments ?? 0,
            'total_shipping_cost' => $stats->total_shipping_cost ?? 0,
            'average_shipping_cost' => $stats->average_shipping_cost ?? 0,
            'by_carrier' => $byCarrier,
            'delivery_rate' => $stats->total_shipments > 0
                ? round(($stats->delivered_shipments / $stats->total_shipments) * 100, 2)
                : 0
        ];
    }

    /**
     * Get shipments needing attention.
     *
     * @return Collection
     */
    public static function getShipmentsNeedingAttention(): Collection
    {
        // Shipments that are shipped but not delivered after expected transit time
        return self::with(['salesOrder.customer', 'warehouse'])
            ->where('status', self::STATUS_SHIPPED)
            ->where('shipped_date', '<=', now()->subDays(7)) // Assuming 7 days is normal transit
            ->orderBy('shipped_date')
            ->get();
    }

    /**
     * --------------------------------------------------------------------------
     * Utility Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Format for select dropdown.
     *
     * @return array
     */
    public function toSelectOption(): array
    {
        return [
            'id' => $this->id,
            'text' => $this->display_number,
            'shipment_number' => $this->shipment_number,
            'sales_order' => $this->salesOrder->so_number,
            'carrier' => $this->carrier,
            'tracking' => $this->tracking_number,
            'status' => $this->status
        ];
    }

    /**
     * Get carrier display name.
     *
     * @return string|null
     */
    public function getCarrierDisplayAttribute(): ?string
    {
        $carriers = [
            'UPS' => 'United Parcel Service',
            'FedEx' => 'Federal Express',
            'USPS' => 'United States Postal Service',
            'DHL' => 'DHL Express',
            'Amazon' => 'Amazon Logistics',
            'CanadaPost' => 'Canada Post'
        ];

        return $carriers[$this->carrier] ?? $this->carrier;
    }

    /**
     * Get packing slip data.
     *
     * @return array
     */
    public function getPackingSlipData(): array
    {
        return [
            'shipment_number' => $this->shipment_number,
            'order_number' => $this->salesOrder->so_number,
            'order_date' => $this->salesOrder->order_date->format('Y-m-d'),
            'customer' => [
                'name' => $this->salesOrder->customer->company_name,
                'address' => $this->salesOrder->shipping_address
            ],
            'warehouse' => $this->warehouse->name,
            'shipped_date' => $this->shipped_date->format('Y-m-d'),
            'items' => $this->items->map(function ($item) {
                return [
                    'product_name' => $item->product->name,
                    'product_sku' => $item->product->sku,
                    'quantity' => $item->quantity_shipped,
                    'batch' => $item->batch_number,
                    'serial' => $item->serial_number
                ];
            })->toArray()
        ];
    }
}
