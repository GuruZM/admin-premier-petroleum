<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DeliveryNote;

class DeliveryNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $deliveryNotesWithInvoices = DeliveryNote::with('invoice') // Assuming the relationship is named 'invoice'
        ->get();
        return response()->json($deliveryNotesWithInvoices);
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
        try{
            $validatedData = $request->validate([
                'address' => 'required|string',
                'title' => 'required|string',
                'number'=> 'required|string',
                'issue_date'=> 'required|string',
                'invoice_number'=> 'nullable',
          

            ]);

          
            $deliveryNote = DeliveryNote::create($validatedData);

            return response()->json(['message' => 'Delivery Note created successfully'], 201);

        }catch(\Exception $e){
            \Log::error('Error creating Delivery Note: ' . $e->getMessage());
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
