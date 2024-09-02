<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeliveryNote;
use Inertia\Inertia;
use App\Models\Customer;
use Illuminate\Http\Response;   
use Dompdf\Dompdf;
use Dompdf\Options;

class DeliveryNoteController extends Controller
{
    public function index()
    {
        $deliveryNote = DeliveryNote::join('invoices', 'delivery_notes.invoice_number', '=', 'invoices.id')
        // ->where('delivery_notes.id', '=', $deliveryNote->id) 
        ->join('customers','customers.id','=','delivery_notes.client')
    ->select('delivery_notes.*', 'invoices.number as invoice_number','customers.firstname as client' )
        ->first();

        return inertia('DeliveryNote/Index', [
            'deliveryNote' => $deliveryNote,
            'status'=> session('status')
        ]);

    }
    public function create()
    {
        return inertia('DeliveryNote/Create',[
            'status'=> session('status')
        ]);
    }

    public function show($id)
    {
       
          $deliveryNote = DeliveryNote::find($id);
        $deliveryNoteData = DeliveryNote::join('invoices', 'delivery_notes.invoice_number', '=', 'invoices.id')
        ->where('delivery_notes.id', '=', $deliveryNote->id) 
        ->join('customers','customers.id','=','delivery_notes.client')
    ->select('delivery_notes.*', 'invoices.number as invoice_number','customers.company_name as client' )
        ->first();
        return inertia('DeliveryNote/Show', [
            'deliveryNote' => $deliveryNoteData,
            'status'=> session('status')
        ]);
    }

    public function edit(string $id)
    {
        $deliveryNote = DeliveryNote::find($id);
        $deliveryNoteData = DeliveryNote::join('invoices', 'delivery_notes.invoice_number', '=', 'invoices.id')
        ->where('delivery_notes.id', '=', $deliveryNote->id) 
        ->join('customers','customers.id','=','delivery_notes.client')
       ->select('delivery_notes.*', 'invoices.number as invoice_number','invoices.id as invoice_id','customers.company_name as client','customers.id as client_id' )
        ->first();
        return inertia('DeliveryNote/Create', [
            'deliveryNote' => $deliveryNoteData,
            'status'=> session('status')
        ]);
    }

    public function printdeliverynote(Request $request)
    {
            // dd($request->all());
            try {
    
                // $serializedData = $request->query('data');
                $id = $request->input('id');
                 $deliveryNote = DeliveryNote::with(['customer'])->find($id);
                 $customer = Customer::find($deliveryNote->client);
                 $deliveryNote->customer = $customer;
                 $dompdf = new Dompdf();
                 $options = new Options();
                 $options->set('isHtml5ParserEnabled', true);
                 $dompdf->setOptions($options);
             
            
        
                $deliveryNote->line_items = json_decode($deliveryNote->items,true);
                        $html =  view('print.deliveryNote',
                        [
                            'deliveryNote' => $deliveryNote,
                        ]
                        )->render();
                      
                        $dompdf->loadHtml($html);
 
                        $dompdf->setPaper('A4', 'portrait');
                        $dompdf->render();
                        $output = $dompdf->output();
        
                     return new Response($output, 200, [
                          'Content-Type' => 'application/pdf',
                          'Content-Disposition' => 'inline; filename="delivery-note.pdf"',
                      ]);
                    
                } catch (\Exception $e) {
                    return response()->json(['message' => 'Failed to retrieve goods recieved', 'error' => $e->getMessage()], 500);
                }
    }

    public function store(Request $request)
    {
        // Your code for the store method
    }

    public function update(Request $request, $id)
    {
        // Your code for the update method
    }

    public function destroy($id)
    {
        // Your code for the destroy method
    }
}
