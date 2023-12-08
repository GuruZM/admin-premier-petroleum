<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoodReceived extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'reference',
        'number',
        'date',
        'received_by',
        'checked_by',
        'order_reference',
        'items',
    ];
}
