<?php
// app/Models/InventoryMovement.php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

/**
 * Inventory Movement Model
 * 
 * Tracks all inventory movements and transactions throughout the system.
 * Provides a complete audit trail for inventory changes including receipts,
 * shipments, transfers, adjustments, and reservations. Supports batch and
 * serial number tracking for full traceability.
 * 
 * @package App\Models
 * 
 * @property int $id
 * @property string $movement_number
 * @property int $product_id
 * @property int|null $from_warehouse_id
 * @property int|null $to_warehouse_id
 * @property int|null $from_location_id
 * @property int|null $to_location_id
 * @property string $movement_type
 * @property string|null $reference_type
 * @property int|null $reference_id
 * @property string|null $batch_number
 * @property string|null $serial_number
 * @property int $quantity
 * @property float $unit_cost
 * @property float $total_cost
 * @property string|null $notes
 * @property int $created_by
 * @property \Carbon\Carbon $created_at
 * 
 * @property-read Product $product
 * @property-read Warehouse|null $fromWarehouse
 * @property-read Warehouse|null $toWarehouse
 * @property-read Location|null $fromLocation
 * @property-read Location|null $toLocation
 * @property-read User $createdBy
 * @property-read string $movement_type_label
 * @property-read string $direction
 * @property-read string $from_location_path
 * @property-read string $to_location_path
 * @property-read mixed $reference
 */
class InventoryMovement extends Model
{
    use HasFactory;

    /**
     * --------------------------------------------------------------------------
     * Configuration
     * --------------------------------------------------------------------------
     */

    /** @var string Database table name */
    protected $table = 'inventory_movements';

    /** @var bool Disable Laravel's default timestamps */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'movement_number',
        'product_id',
        'from_warehouse_id',
        'to_warehouse_id',
        'from_location_id',
        'to_location_id',
        'movement_type',
        'reference_type',
        'reference_id',
        'batch_number',
        'serial_number',
        'quantity',
        'unit_cost',
        'total_cost',
        'notes',
        'created_by',
        'created_at'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity' => 'integer',
        'unit_cost' => 'decimal:2',
        'total_cost' => 'decimal:2',
        'created_at' => 'datetime'
    ];

    /**
     * --------------------------------------------------------------------------
     * Movement Type Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Received from supplier */
    const TYPE_RECEIVE = 'receive';

    /** @var string Shipped to customer */
    const TYPE_SHIP = 'ship';

    /** @var string Transferred between locations */
    const TYPE_TRANSFER = 'transfer';

    /** @var string Physical count adjustment */
    const TYPE_ADJUSTMENT = 'adjustment';

    /** @var string Return from customer */
    const TYPE_RETURN = 'return';

    /** @var string Physical count record */
    const TYPE_COUNT = 'count';

    /** @var string Reserved for order */
    const TYPE_RESERVE = 'reserve';

    /** @var string Reservation released */
    const TYPE_UNRESERVE = 'unreserve';

    /** @var string Moved to quarantine */
    const TYPE_QUARANTINE = 'quarantine';

    /** @var string Released from quarantine */
    const TYPE_RELEASE = 'release';

    /**
     * Human-readable movement type labels.
     *
     * @var array<string, string>
     */
    public static $movementTypes = [
        self::TYPE_RECEIVE => 'Receive',
        self::TYPE_SHIP => 'Ship',
        self::TYPE_TRANSFER => 'Transfer',
        self::TYPE_ADJUSTMENT => 'Adjustment',
        self::TYPE_RETURN => 'Return',
        self::TYPE_COUNT => 'Count',
        self::TYPE_RESERVE => 'Reserve',
        self::TYPE_UNRESERVE => 'Unreserve',
        self::TYPE_QUARANTINE => 'Quarantine',
        self::TYPE_RELEASE => 'Release'
    ];

    /**
     * --------------------------------------------------------------------------
     * Reference Type Constants
     * --------------------------------------------------------------------------
     */

    /** @var string Linked to purchase order */
    const REF_PURCHASE_ORDER = 'purchase_order';

    /** @var string Linked to sales order */
    const REF_SALES_ORDER = 'sales_order';

    /** @var string Linked to adjustment document */
    const REF_ADJUSTMENT = 'adjustment';

    /** @var string Linked to return document */
    const REF_RETURN = 'return';

    /** @var string Linked to count document */
    const REF_COUNT = 'count';

    /**
     * --------------------------------------------------------------------------
     * Relationships
     * --------------------------------------------------------------------------
     */

    /**
     * Get the product associated with this movement.
     *
     * @return BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Get the source warehouse for this movement.
     *
     * @return BelongsTo
     */
    public function fromWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'from_warehouse_id');
    }

    /**
     * Get the destination warehouse for this movement.
     *
     * @return BelongsTo
     */
    public function toWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'to_warehouse_id');
    }

    /**
     * Get the source location for this movement.
     *
     * @return BelongsTo
     */
    public function fromLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'from_location_id');
    }

    /**
     * Get the destination location for this movement.
     *
     * @return BelongsTo
     */
    public function toLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'to_location_id');
    }

    /**
     * Get the user who created this movement.
     *
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * --------------------------------------------------------------------------
     * Scopes
     * --------------------------------------------------------------------------
     */

    /**
     * Scope to filter by movement type.
     *
     * @param Builder $query
     * @param string $type
     * @return Builder
     */
    public function scopeOfType(Builder $query, string $type): Builder
    {
        return $query->where('movement_type', $type);
    }

    /**
     * Scope to filter by multiple movement types.
     *
     * @param Builder $query
     * @param array<string> $types
     * @return Builder
     */
    public function scopeInTypes(Builder $query, array $types): Builder
    {
        return $query->whereIn('movement_type', $types);
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
    public function scopeForBatch(Builder $query, string $batchNumber): Builder
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
    public function scopeForSerial(Builder $query, string $serialNumber): Builder
    {
        return $query->where('serial_number', $serialNumber);
    }

    /**
     * Scope to filter by source warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeFromWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('from_warehouse_id', $warehouseId);
    }

    /**
     * Scope to filter by destination warehouse.
     *
     * @param Builder $query
     * @param int $warehouseId
     * @return Builder
     */
    public function scopeToWarehouse(Builder $query, int $warehouseId): Builder
    {
        return $query->where('to_warehouse_id', $warehouseId);
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
        return $query->whereBetween('created_at', [$startDate, $endDate]);
    }

    /**
     * Scope to filter by reference document.
     *
     * @param Builder $query
     * @param string $referenceType
     * @param int $referenceId
     * @return Builder
     */
    public function scopeWithReference(Builder $query, string $referenceType, int $referenceId): Builder
    {
        return $query->where('reference_type', $referenceType)
            ->where('reference_id', $referenceId);
    }

    /**
     * Scope to get inbound movements.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeInbound(Builder $query): Builder
    {
        return $query->whereIn('movement_type', [
            self::TYPE_RECEIVE,
            self::TYPE_RETURN,
            self::TYPE_RELEASE
        ]);
    }

    /**
     * Scope to get outbound movements.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeOutbound(Builder $query): Builder
    {
        return $query->whereIn('movement_type', [
            self::TYPE_SHIP,
            self::TYPE_QUARANTINE
        ]);
    }

    /**
     * Scope to get today's movements.
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeToday(Builder $query): Builder
    {
        return $query->whereDate('created_at', now()->toDateString());
    }

    /**
     * Scope to get movements by user.
     *
     * @param Builder $query
     * @param int $userId
     * @return Builder
     */
    public function scopeByUser(Builder $query, int $userId): Builder
    {
        return $query->where('created_by', $userId);
    }

    /**
     * --------------------------------------------------------------------------
     * Accessors
     * --------------------------------------------------------------------------
     */

    /**
     * Get human-readable movement type label.
     *
     * @return string
     */
    public function getMovementTypeLabelAttribute(): string
    {
        return self::$movementTypes[$this->movement_type] ?? ucfirst($this->movement_type);
    }

    /**
     * Get the direction of movement (in/out/transfer).
     *
     * @return string
     */
    public function getDirectionAttribute(): string
    {
        return match (true) {
            in_array($this->movement_type, [self::TYPE_RECEIVE, self::TYPE_RETURN, self::TYPE_RELEASE]) => 'in',
            in_array($this->movement_type, [self::TYPE_SHIP, self::TYPE_QUARANTINE]) => 'out',
            $this->movement_type === self::TYPE_TRANSFER => 'transfer',
            default => 'adjustment'
        };
    }

    /**
     * Get the formatted source location path.
     *
     * @return string
     */
    public function getFromLocationPathAttribute(): string
    {
        return match (true) {
            $this->fromLocation !== null => $this->fromLocation->full_path ?? $this->fromLocation->name,
            $this->fromWarehouse !== null => $this->fromWarehouse->name,
            default => 'N/A'
        };
    }

    /**
     * Get the formatted destination location path.
     *
     * @return string
     */
    public function getToLocationPathAttribute(): string
    {
        return match (true) {
            $this->toLocation !== null => $this->toLocation->full_path ?? $this->toLocation->name,
            $this->toWarehouse !== null => $this->toWarehouse->name,
            default => 'N/A'
        };
    }

    /**
     * Get the reference document if available.
     *
     * @return Model|null
     */
    public function getReferenceAttribute(): ?Model
    {
        if (!$this->reference_type || !$this->reference_id) {
            return null;
        }

        return match ($this->reference_type) {
            self::REF_PURCHASE_ORDER => PurchaseOrder::find($this->reference_id),
            self::REF_SALES_ORDER => SalesOrder::find($this->reference_id),
            default => null
        };
    }

    /**
     * Get the formatted unit cost with currency.
     *
     * @return string
     */
    public function getFormattedUnitCostAttribute(): string
    {
        return number_format($this->unit_cost, 2);
    }

    /**
     * Get the formatted total cost with currency.
     *
     * @return string
     */
    public function getFormattedTotalCostAttribute(): string
    {
        return number_format($this->total_cost, 2);
    }

    /**
     * Get the creator's name.
     *
     * @return string|null
     */
    public function getCreatorNameAttribute(): ?string
    {
        return $this->createdBy?->name;
    }

    /**
     * --------------------------------------------------------------------------
     * Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Generate a unique movement number.
     * Format: MOV-YYYYMM-XXXX where XXXX is sequential.
     *
     * @return string
     */
    public static function generateMovementNumber(): string
    {
        $prefix = 'MOV';
        $yearMonth = now()->format('Ym');

        $lastMovement = self::whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastMovement && preg_match('/-(\d{4})$/', $lastMovement->movement_number, $matches)) {
            $lastNumber = (int) $matches[1];
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$yearMonth}-{$newNumber}";
    }

    /**
     * Record a new inventory movement.
     *
     * @param int $productId
     * @param string $movementType
     * @param int $quantity
     * @param float|null $unitCost
     * @param array<string, int>|null $locations
     * @param array{type: string, id: int}|null $reference
     * @param string|null $batchNumber
     * @param string|null $serialNumber
     * @param string|null $notes
     * @return self
     */
    public static function record(
        int $productId,
        string $movementType,
        int $quantity,
        ?float $unitCost = null,
        ?array $locations = null,
        ?array $reference = null,
        ?string $batchNumber = null,
        ?string $serialNumber = null,
        ?string $notes = null
    ): self {
        return DB::transaction(function () use (
            $productId,
            $movementType,
            $quantity,
            $unitCost,
            $locations,
            $reference,
            $batchNumber,
            $serialNumber,
            $notes
        ) {
            $data = [
                'movement_number' => self::generateMovementNumber(),
                'product_id' => $productId,
                'movement_type' => $movementType,
                'quantity' => $quantity,
                'unit_cost' => $unitCost,
                'total_cost' => $quantity * ($unitCost ?? 0),
                'batch_number' => $batchNumber,
                'serial_number' => $serialNumber,
                'notes' => $notes,
                'created_by' => Auth::id(),
                'created_at' => now()
            ];

            // Add location data if provided
            if ($locations) {
                $locationFields = [
                    'from_warehouse_id' => 'from_warehouse',
                    'to_warehouse_id' => 'to_warehouse',
                    'from_location_id' => 'from_location',
                    'to_location_id' => 'to_location'
                ];

                foreach ($locationFields as $field => $key) {
                    if (isset($locations[$key])) {
                        $data[$field] = $locations[$key];
                    }
                }
            }

            // Add reference data if provided
            if ($reference && isset($reference['type'], $reference['id'])) {
                $data['reference_type'] = $reference['type'];
                $data['reference_id'] = $reference['id'];
            }

            return self::create($data);
        });
    }

    /**
     * Record a receipt movement.
     *
     * @param int $productId
     * @param int $quantity
     * @param float $unitCost
     * @param int $warehouseId
     * @param int|null $locationId
     * @param array|null $reference
     * @return self
     */
    public static function recordReceipt(
        int $productId,
        int $quantity,
        float $unitCost,
        int $warehouseId,
        ?int $locationId = null,
        ?array $reference = null
    ): self {
        return self::record(
            $productId,
            self::TYPE_RECEIVE,
            $quantity,
            $unitCost,
            ['to_warehouse' => $warehouseId, 'to_location' => $locationId],
            $reference
        );
    }

    /**
     * Record a shipment movement.
     *
     * @param int $productId
     * @param int $quantity
     * @param float $unitCost
     * @param int $warehouseId
     * @param int|null $locationId
     * @param array|null $reference
     * @return self
     */
    public static function recordShipment(
        int $productId,
        int $quantity,
        float $unitCost,
        int $warehouseId,
        ?int $locationId = null,
        ?array $reference = null
    ): self {
        return self::record(
            $productId,
            self::TYPE_SHIP,
            $quantity,
            $unitCost,
            ['from_warehouse' => $warehouseId, 'from_location' => $locationId],
            $reference
        );
    }

    /**
     * Record a transfer movement.
     *
     * @param int $productId
     * @param int $quantity
     * @param float $unitCost
     * @param int $fromWarehouseId
     * @param int $toWarehouseId
     * @param int|null $fromLocationId
     * @param int|null $toLocationId
     * @return self
     */
    public static function recordTransfer(
        int $productId,
        int $quantity,
        float $unitCost,
        int $fromWarehouseId,
        int $toWarehouseId,
        ?int $fromLocationId = null,
        ?int $toLocationId = null
    ): self {
        return self::record(
            $productId,
            self::TYPE_TRANSFER,
            $quantity,
            $unitCost,
            [
                'from_warehouse' => $fromWarehouseId,
                'to_warehouse' => $toWarehouseId,
                'from_location' => $fromLocationId,
                'to_location' => $toLocationId
            ]
        );
    }

    /**
     * Record an adjustment movement.
     *
     * @param int $productId
     * @param int $quantity
     * @param float $unitCost
     * @param int $warehouseId
     * @param int|null $locationId
     * @param string $reason
     * @return self
     */
    public static function recordAdjustment(
        int $productId,
        int $quantity,
        float $unitCost,
        int $warehouseId,
        ?int $locationId = null,
        string $reason = ''
    ): self {
        return self::record(
            $productId,
            $quantity > 0 ? self::TYPE_RECEIVE : self::TYPE_SHIP,
            abs($quantity),
            $unitCost,
            [
                ($quantity > 0 ? 'to_warehouse' : 'from_warehouse') => $warehouseId,
                ($quantity > 0 ? 'to_location' : 'from_location') => $locationId
            ],
            ['type' => self::REF_ADJUSTMENT, 'id' => 0],
            null,
            null,
            $reason
        );
    }

    /**
     * --------------------------------------------------------------------------
     * Query Helper Methods
     * --------------------------------------------------------------------------
     */

    /**
     * Get movements grouped by type.
     *
     * @param int $days
     * @return Collection
     */
    public static function getMovementsByType(int $days = 30): Collection
    {
        return self::where('created_at', '>=', now()->subDays($days))
            ->select('movement_type', DB::raw('COUNT(*) as count'), DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('movement_type')
            ->get();
    }

    /**
     * Get daily movement summary.
     *
     * @param int $days
     * @return Collection
     */
    public static function getDailySummary(int $days = 30): Collection
    {
        return self::where('created_at', '>=', now()->subDays($days))
            ->select(
                DB::raw('DATE(created_at) as date'),
                DB::raw('SUM(CASE WHEN movement_type IN ("receive", "return") THEN quantity ELSE 0 END) as inbound'),
                DB::raw('SUM(CASE WHEN movement_type = "ship" THEN quantity ELSE 0 END) as outbound'),
                DB::raw('COUNT(*) as total_movements')
            )
            ->groupBy(DB::raw('DATE(created_at)'))
            ->orderBy('date', 'desc')
            ->get();
    }

    /**
     * Get product movement history.
     *
     * @param int $productId
     * @param int $limit
     * @return Collection
     */
    public static function getProductHistory(int $productId, int $limit = 100): Collection
    {
        return self::forProduct($productId)
            ->with(['fromWarehouse', 'toWarehouse', 'createdBy'])
            ->orderBy('created_at', 'desc')
            ->limit($limit)
            ->get();
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
        // Auto-generate movement number if not provided
        static::creating(function (self $movement) {
            if (empty($movement->movement_number)) {
                $movement->movement_number = self::generateMovementNumber();
            }

            // Ensure total cost is calculated
            if ($movement->unit_cost && !$movement->total_cost) {
                $movement->total_cost = $movement->quantity * $movement->unit_cost;
            }
        });

        // Validate quantity
        static::saving(function (self $movement) {
            if ($movement->quantity <= 0) {
                return false;
            }
            return true;
        });
    }
}
