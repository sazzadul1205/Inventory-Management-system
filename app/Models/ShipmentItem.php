<?php
// app/Models/ShipmentItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShipmentItem extends Model
{
    use HasFactory;

    protected $table = 'shipment_items';

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

    protected $casts = [
        'quantity_shipped' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    // Relationships
    public function shipment(): BelongsTo
    {
        return $this->belongsTo(Shipment::class);
    }

    public function salesOrderItem(): BelongsTo
    {
        return $this->belongsTo(SalesOrderItem::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    // Scopes
    public function scopeForProduct($query, $productId)
    {
        return $query->where('product_id', $productId);
    }

    public function scopeWithBatch($query, $batchNumber)
    {
        return $query->where('batch_number', $batchNumber);
    }

    public function scopeWithSerial($query, $serialNumber)
    {
        return $query->where('serial_number', $serialNumber);
    }

    // Accessors
    public function getLocationPathAttribute(): string
    {
        return $this->location ? $this->location->full_location_path : 'Not assigned';
    }

    public function getProductInfoAttribute(): string
    {
        $info = $this->product->name;

        if ($this->batch_number) {
            $info .= " (Batch: {$this->batch_number})";
        }

        if ($this->serial_number) {
            $info .= " (SN: {$this->serial_number})";
        }

        return $info;
    }
}
