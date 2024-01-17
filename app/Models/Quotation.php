<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
class Quotation extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'tpin', 'date', 'items', 'total', 'vat', 'subtotal'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'tpin', 'tpin');
    }
}
