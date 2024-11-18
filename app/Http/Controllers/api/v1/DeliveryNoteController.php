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
      
        // $deliveryNotesWithInvoicesAndCustomers = DeliveryNote::join('invoices', 'delivery_notes.invoice_number', '=', 'invoices.id')
        // ->join('customers', 'customers.id', '=', 'delivery_notes.client')
        // ->select(
        //     'delivery_notes.*',
        //     'customers.company_name as client',
        //     'invoices.number as invoice_number'
            
        // )
        // ->get();

        $deliveryNotesWithInvoicesAndCustomers = DeliveryNote::all();
       
    
     
     
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
      
        try{
            $validatedData = $request->validate([
   
                'items' => 'required',
                'date' => 'required',
                'truck_details'=> 'nullable',
                'issue_date'=> 'required|string',
                'invoice'=> 'nullable',
                'client'=> 'required',
          
            ]);

            $count = DeliveryNote::count();
            $deliveryNote_number = 1 + (int)$count;
            $validatedData['number'] = 'PPDN00' . $deliveryNote_number;            

          
            $deliveryNote = DeliveryNote::create(
                [
                 "issue_date" =>  $validatedData['issue_date'],
                 "date" => $validatedData['date'],
                 "truck_details" => $validatedData['truck_details'],
                 "client"=> $validatedData['client'],
                 "invoice_number"=> $validatedData['invoice'] ? $validatedData['invoice'] : NULL,
                 "number"=>$validatedData['number'],
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
     
        try{
            $validatedData = $request->validate([
                'items' => 'required',
                'date' => 'required',
                'truck_details'=> 'nullable',
                'issue_date'=> 'required|string',
                'invoice'=> 'nullable',
                'client'=> 'required',    
            ]);

            $deliveryNote = DeliveryNote::find($id);
            $deliveryNote->update(
                
                    [
                     "issue_date" =>  $validatedData['issue_date'],
                     "date" => $validatedData['date'],
                     "truck_details" => $validatedData['truck_details'],
                     "client"=> $validatedData['client'],
                     "items" => $validatedData['items'],
                    ]); 
            return response()->json(['message' => 'Delivery Note updated successfully'], 200);

        }catch(\Exception $e){
            \Log::error('Error updating Delivery Note: ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'.$e->getMessage()], 500);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //delete delivery note
        try{
            $deliveryNote = DeliveryNote::find($id);
            $deliveryNote->delete();
            return response()->json(['message' => 'Delivery Note deleted successfully'], 200);
        }catch(\Exception $e){
            \Log::error('Error deleting Delivery Note: ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }
}
