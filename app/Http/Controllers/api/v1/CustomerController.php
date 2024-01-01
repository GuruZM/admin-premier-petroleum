<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // write an index method to return all customers

        try {
            // Get all customers ordered by the most recently added
            $customers = Customer::orderBy('created_at', 'desc')->get();

            return response()->json($customers);
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
        // write a store method to store the customer data

        // return response()->json(['message' => $request->data]);

        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'firstname' => 'string|nullable',
                'lastname' => 'string|nullable',
                'company_name'=> 'required|string',
                'contact'=> 'string|nullable',
                'address'=> 'string|nullable',
            ]);

            // Create a new customer
            $customer = Customer::create($validatedData);

            return response()->json(['message' => 'Customer created successfully'], 201);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error creating customer: ' . $e->getMessage());

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
        //
    }
}
