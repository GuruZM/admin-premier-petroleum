<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ClearanceFee;

class ClearanceFeeController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'logistics' => 'required|string|max:255',
                'clearing_fee' => 'required|numeric',
                'zcsa' => 'required|string|max:255',
            ]);
        
            $clearanceFee = ClearanceFee::create($request->all());
        
            return response()->json($clearanceFee, 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage(),
            ], 500);
        }
        
    }
}
