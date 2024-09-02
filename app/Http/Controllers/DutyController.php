<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Duty;

class DutyController extends Controller
{
    public function index()
    {
    return Inertia('Duty/Index', [
        'status'=> session('status'),
        'duties' => Duty::all(),

    ]);
}
}
