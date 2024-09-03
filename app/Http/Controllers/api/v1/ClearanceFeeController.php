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
    public function update(Request $request, $id)
    {
        $request->validate([
            'logistics' => 'required|string|max:255',
            'clearing_fee' => 'required|numeric',
            'zcsa' => 'required|string|max:255',
        ]);

        $clearanceFee = ClearanceFee::find($id);

        if (!$clearanceFee) {
            return response()->json(['message' => 'Clearance Fee not found'], 404);
        }

        $clearanceFee->update($request->all());

        return response()->json($clearanceFee);
    }

    // Remove the specified resource from storage
    public function destroy($id)
    {
        $clearanceFee = ClearanceFee::find($id);

        if (!$clearanceFee) {
            return response()->json(['message' => 'Clearance Fee not found'], 404);
        }

        $clearanceFee->delete();

        return response()->json(['message' => 'Clearance Fee deleted successfully']);
    }
}
