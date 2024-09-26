<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Duty;
class DutyController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'rate' => 'required|numeric',
                'description' => 'nullable|string',
            ]);

            $duty = Duty::create($request->all());

            return response()->json($duty, 201);
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
            'rate' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        $duty = Duty::find($id);

        if (!$duty) {
            return response()->json(['message' => 'Duty Fee not found'], 404);
        }

        $duty->update($request->all());

        return response()->json($duty);
    }

    // Remove the specified resource from storage
    public function destroy($id)
    {
        $duty = Duty::find($id);

        if (!$duty) {
            return response()->json(['message' => 'Duty Fee not found'], 404);
        }

        $duty->delete();

        return response()->json(['message' => 'Duty Record deleted successfully']);
    }
}
