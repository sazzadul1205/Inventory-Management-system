<?php
// app/Models/InventoryMovement.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

class InventoryMovement extends Model
{
    use HasFactory;

    protected $table = 'inventory_movements';

    public $timestamps = false;

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

    protected $casts = [
        'quantity' => 'integer',
        'unit_cost' => 'decimal:2',
        'total_cost' => 'decimal:2',
        'created_at' => 'datetime'
    ];

    // Movement type constants
    const TYPE_RECEIVE = 'receive';
    const TYPE_SHIP = 'ship';
    const TYPE_TRANSFER = 'transfer';
    const TYPE_ADJUSTMENT = 'adjustment';
    const TYPE_RETURN = 'return';
    const TYPE_COUNT = 'count';
    const TYPE_RESERVE = 'reserve';
    const TYPE_UNRESERVE = 'unreserve';
    const TYPE_QUARANTINE = 'quarantine';
    const TYPE_RELEASE = 'release';

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

    // Reference type constants
    const REF_PURCHASE_ORDER = 'purchase_order';
    const REF_SALES_ORDER = 'sales_order';
    const REF_TRANSFER_ORDER = 'transfer_order';
    const REF_ADJUSTMENT = 'adjustment';
    const REF_RETURN = 'return';
    const REF_COUNT = 'count';

    // Relationships
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function fromWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'from_warehouse_id');
    }

    public function toWarehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'to_warehouse_id');
    }

    public function fromLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'from_location_id');
    }

    public function toLocation(): BelongsTo
    {
        return $this->belongsTo(Location::class, 'to_location_id');
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // Scopes
    public function scopeOfType($query, $type)
    {
        return $query->where('movement_type', $type);
    }

    public function scopeForProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    public function scopeForBatch($query, $batchNumber)
    {
        return $query->where('batch_number', $batchNumber);
    }

    public function scopeForSerial($query, $serialNumber)
    {
        return $query->where('serial_number', $serialNumber);
    }

    public function scopeFromWarehouse($query, $warehouseId)
    {
        return $query->where('from_warehouse_id', $warehouseId);
    }

    public function scopeToWarehouse($query, $warehouseId)
    {
        return $query->where('to_warehouse_id', $warehouseId);
    }

    public function scopeBetweenDates($query, $startDate, $endDate)
    {
        return $query->whereBetween('created_at', [$startDate, $endDate]);
    }

    public function scopeWithReference($query, $referenceType, $referenceId)
    {
        return $query->where('reference_type', $referenceType)
            ->where('reference_id', $referenceId);
    }

    // Accessors
    public function getMovementTypeLabelAttribute(): string
    {
        return self::$movementTypes[$this->movement_type] ?? $this->movement_type;
    }

    public function getDirectionAttribute(): string
    {
        if (in_array($this->movement_type, [self::TYPE_RECEIVE, self::TYPE_RETURN])) {
            return 'in';
        } elseif (in_array($this->movement_type, [self::TYPE_SHIP])) {
            return 'out';
        } elseif ($this->movement_type == self::TYPE_TRANSFER) {
            return 'transfer';
        }
        return 'adjustment';
    }

    public function getFromLocationPathAttribute(): string
    {
        if ($this->fromLocation) {
            return $this->fromLocation->full_location_path;
        } elseif ($this->fromWarehouse) {
            return $this->fromWarehouse->name;
        }
        return 'N/A';
    }

    public function getToLocationPathAttribute(): string
    {
        if ($this->toLocation) {
            return $this->toLocation->full_location_path;
        } elseif ($this->toWarehouse) {
            return $this->toWarehouse->name;
        }
        return 'N/A';
    }

    // Methods
    public static function generateMovementNumber(): string
    {
        $prefix = 'MOV';
        $year = now()->format('Y');
        $month = now()->format('m');

        $lastMovement = self::whereYear('created_at', $year)
            ->whereMonth('created_at', $month)
            ->orderBy('id', 'desc')
            ->first();

        if ($lastMovement) {
            $lastNumber = intval(substr($lastMovement->movement_number, -4));
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            $newNumber = '0001';
        }

        return "{$prefix}-{$year}{$month}-{$newNumber}";
    }

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

        if ($locations) {
            if (isset($locations['from_warehouse'])) {
                $data['from_warehouse_id'] = $locations['from_warehouse'];
            }
            if (isset($locations['to_warehouse'])) {
                $data['to_warehouse_id'] = $locations['to_warehouse'];
            }
            if (isset($locations['from_location'])) {
                $data['from_location_id'] = $locations['from_location'];
            }
            if (isset($locations['to_location'])) {
                $data['to_location_id'] = $locations['to_location'];
            }
        }

        if ($reference) {
            $data['reference_type'] = $reference['type'];
            $data['reference_id'] = $reference['id'];
        }

        return self::create($data);
    }
}
