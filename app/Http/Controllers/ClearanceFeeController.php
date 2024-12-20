<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ClearanceFee;
class ClearanceFeeController extends Controller
{
    public function index()
    {

        return Inertia('ClearanceFee/Index', [
            'clearanceFees' => ClearanceFee::all(),
            'status'=> session('status')
        ]);
    }
}
