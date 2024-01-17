<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quotation;
class Customer extends Model
{
    protected $fillable = [
        'firstname',
        'lastname',
        'company_name',
        'contact',
        'address',
        'tpin'
    ];
    use HasFactory;

    public function quotations()
    {
        return $this->hasMany(Quotation::class, 'tpin', 'tpin');
    }
}
