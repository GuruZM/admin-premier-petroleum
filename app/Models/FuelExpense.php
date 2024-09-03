<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FuelExpense extends Model
{
    use HasFactory;
     protected $table = 'fuel_expense';
    protected $fillable = ['quantity', 'price','type', 'total', 'status', 'duty'];
}
