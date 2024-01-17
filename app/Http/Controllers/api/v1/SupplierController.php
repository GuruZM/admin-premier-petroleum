<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;    
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Get all customers ordered by the most recently added
            $suppliers = Supplier::orderBy('created_at', 'desc')->get();

            return response()->json($suppliers);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error getting customers: ' . $e->getMessage());

            return response()->json(['error' => 'Internal server error'], 500);
        }

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
      
        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'name' => 'required|string',
                'address' => 'string|nullable',
                'contact'=> 'string|nullable',
                'tpin'=> 'string|nullable',

            ]);

            // Create a new customer
            $supplier = Supplier::create($validatedData);

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //try catch and delete supplier 
        try {
            // Find the customer to delete
            $supplier = Supplier::find($id);

            // Delete the customer
            $supplier->delete();

            return response()->json(['message' => 'Supplier deleted successfully'], 200);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error deleting Supplier: ' . $e->getMessage());

            return response()->json(['error' => 'Internal server error'], 500);
        }
    }
}
