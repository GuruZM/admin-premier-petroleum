<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClearanceFee extends Model
{
    use HasFactory;
    protected $fillable = [
        'logistics',
        'clearing_fee',
        'zcsa',
    ];
}
