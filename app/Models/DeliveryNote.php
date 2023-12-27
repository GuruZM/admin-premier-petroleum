<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryNote extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'title',
        'number',
        'client',
        'date',
        'items',
        'issue_date',
        'invoice_number',
    ];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_number');
    }
    public function customer()
{
    return $this->belongsTo(Customer::class, 'client');
}
}
