<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TransportExpense;
class TransportExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //return all transport expenses
        $transportExpenses = TransportExpense::all();
        return response()->json(
             $transportExpenses,
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
        //validate and store in the database and surround the request in a try catch block
        try {
            $request->validate([
                'quantity' => 'required',
                'price' => 'required',
                'total' => 'required',
                'status'=>'nullable',
            ]);
            $transportExpense = TransportExpense::create([
                'quantity'=>$request->quantity,
                'price'=>$request->price,
                'total'=>$request->total,
                'status'=>$request->status,
            ]);
            if ($transportExpense) {
                return response()->json([
                    'message' => 'Transport Expense created successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Transport Expense creation failed!',
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
     
        try {
          
            $transportExpense = TransportExpense::find($id);
            $transportExpense->quantity = $request->quantity;
            $transportExpense->price = $request->price;
            $transportExpense->total = $request->total;
            $transportExpense->status = $request->status;
            if ($transportExpense->save()) {
                return response()->json([
                    'message' => 'Transport Expense updated successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Transport Expense update failed!',
                'error' => $e->getMessage(),
            ], 409);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        try {
            $transportExpense = TransportExpense::find($id);
            if ($transportExpense->delete()) {
                return response()->json([
                    'message' => 'Transport Expense deleted successfully',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Transport Expense deletion failed!',
                'error' => $e->getMessage(),
            ], 409);
        }
    }
}
