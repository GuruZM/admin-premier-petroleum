<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GoodReceived;
class GoodReceivedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
     
        return response()->json( 
            GoodReceived::all()
  );
     


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
        // return response()->json([
        //     'message' => 'Good Received created successfully',
        //     'data' => $request->all()
        // ]
        // );

        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'reference' => 'required|string',
                'date'=> 'required|string',
                'received_by'=> 'required|string',
                'checked_by'=> 'required|string',
                'order_reference'=> 'required|string',
                'items'=> 'required',
                'goods_condition'=> 'required|string',

            ]);

            // Create a new customer
            $supplier = GoodReceived::create(
            [
                'reference' => $validatedData['reference'],
                'date' => $validatedData['date'],
                'received_by' => $validatedData['received_by'],
                'checked_by' => $validatedData['checked_by'],
                'order_reference' => $validatedData['order_reference'],
                'items' => json_encode($validatedData['items']),
                'goods_condition' => $validatedData['goods_condition'],
            ]    
            );

            return response()->json(['message' => 'Supplier created successfully'], 201);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error creating Supplier: ' . $e->getMessage());

            return response()->json(['error' => 'Internal server error','error'=>$e->getMessage()], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
