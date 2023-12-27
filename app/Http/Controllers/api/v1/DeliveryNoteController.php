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
        // $deliveryNotesWithInvoices = DeliveryNote::with('invoice') // Assuming the relationship is named 'invoice'
        // ->get();
      
        $deliveryNotesWithInvoicesAndCustomers = DeliveryNote::join('invoices', 'delivery_notes.invoice_number', '=', 'invoices.id')
        ->join('customers', 'customers.id', '=', 'delivery_notes.client')
        ->select(
            'delivery_notes.*',
            'customers.firstname as client',
            'invoices.number as invoice_number'
            
        )
        ->get();
    
     
     
        return response()->json($deliveryNotesWithInvoicesAndCustomers);
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
        //     'request'=> $request->all(),
        //     'message'=> 'success'
        // ]);
        try{
            $validatedData = $request->validate([
                'client' => 'required',
                'items' => 'required',
                'date' => 'required',
                'issue_date'=> 'required|string',
                'invoice'=> 'nullable',
            ]);

          
            $deliveryNote = DeliveryNote::create(
                [
                 "issue_date" =>  $validatedData['issue_date'],
                 "date" => $validatedData['date'],
                 "client"=> $validatedData['client'],
                 "invoice_number"=> $validatedData['invoice'] ? $validatedData['invoice'] : 0,
                 "items" => json_encode($validatedData['items'])
                ]); 

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
