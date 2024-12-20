<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FuelExpense;
class FuelExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //return all fuel expenses
        $fuelExpenses = FuelExpense::all();
        return response()->json(
             $fuelExpenses,
         200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validate and store in the database while surrounding in a try catch block 
        try {
            $request->validate([
                'quantity' => 'required',
                'price' => 'required',
                'total' => 'required',
                'type'=>'required',
                'duty'=>'nullable',
                'exchange_rate'=>'nullable',
                'status'=>'nullable',
            ]);
            $fuelExpense = FuelExpense::create([
               'quantity'=>$request->quantity,
                'price'=>$request->price,
                'total'=>$request->total,
                'exchange_rate'=>$request->exchange_rate,
                'type'=>$request->type,
                'duty'=>$request->duty,
                'status'=>$request->status,
            ]);
            if ($fuelExpense) {
                return response()->json([
                    'message' => 'Fuel Expense created successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Fuel Expense creation failed!',
                'error' => $e->getMessage(),
            ], 409);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //update the resource while surrounding in a try catch block
        try {
            $fuelExpense = FuelExpense::find($id);
            if ($fuelExpense) {
                $fuelExpense->update([
                    'quantity'=>$request->quantity,
                    'price'=>$request->price,
                    'total'=>$request->total,
                    'type'=>$request->type,
                    'duty'=>$request->duty,
                    'status'=>$request->status,
                ]);
                return response()->json([
                    'message' => 'Fuel Expense updated successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Fuel Expense update failed!',
                'error' => $e->getMessage(),
            ], 409);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //try catch and delete fuel expense 
        try {
            $fuelExpense = FuelExpense::find($id);
            if ($fuelExpense) {
                $fuelExpense->delete();
                return response()->json([
                    'message' => 'Fuel Expense deleted successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Fuel Expense deletion failed!',
                'error' => $e->getMessage(),
            ], 409);
        }
    }
}
