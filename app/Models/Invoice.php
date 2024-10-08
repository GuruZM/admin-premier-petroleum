<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = [
        'number',
        'delivery_note',
        'date',
        'due_date',
        'customer',
        'line_items',
        'subtotal',
        'vat',
        'total',
        'issued_by',
        'approved_by',
        'bank_details',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function issuedBy()
    {
        return $this->belongsTo(User::class, 'issued_by');
    }

    public function approvedBy()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }
}
