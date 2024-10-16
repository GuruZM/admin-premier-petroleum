<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\User;
use App\Models\Customer;
use App\Models\DeliveryNote;
use Illuminate\Http\Response;   
use Inertia\Inertia;
use Dompdf\Dompdf;
use Dompdf\Options;

class InvoiceController extends Controller
{
     public function index()
    {
        $invoice = Invoice::all();

        return inertia('Invoice/Index', [
            'invoice' => $invoice,
            'status'=> session('status')
        ]);
    }

    
    public function create()
    {
        $deliveryNotes = DeliveryNote::join('customers', 'delivery_notes.client', '=', 'customers.id')
        ->select('delivery_notes.*', 'customers.company_name as customer_name', 'customers.id as customer_id')
        ->get();
        $lineItemsArray = [];
        foreach ($deliveryNotes as $deliveryNote) {
            $lineItems = json_decode($deliveryNote->items);
            foreach ($lineItems as $lineItem) {
                $lineItemsArray[] = [
                    'delivery_note_number' => $deliveryNote->number,
                    'description' => $lineItem->description,
                    'quantity' => $lineItem->quantity,
                    'customer_id' => $deliveryNote->customer_id,
                    'customer_name' => $deliveryNote->customer_name,

                ];
            }
        }
        return inertia('Invoice/Create',[
            'deliveryNotes' => $lineItemsArray,
            'status'=> session('status')
        ]);
    }

    public function edit(string $id)
    {
        $invoice = Invoice::find($id);
        $invoiceData = Invoice::join('customers', 'invoices.customer', '=', 'customers.id')
    ->join('users', 'invoices.issued_by', '=', 'users.id')
    ->where('invoices.id', '=', $invoice->id) // Add the where clause here
    ->select('invoices.*', 'customers.company_name as customer_name','customers.address as customer_address','users.name as issued_by_name')
    ->first();
        return inertia('Invoice/Create', [
            'invoice' => $invoiceData,
            'edit' => true,
            'status'=> session('status')
        ]);
    }


    public function show($id)
    {
        $invoice = Invoice::find($id);
        $invoiceData = Invoice::join('customers', 'invoices.customer', '=', 'customers.id')
    ->join('users', 'invoices.issued_by', '=', 'users.id')
    ->where('invoices.id', '=', $invoice->id) // Add the where clause here
    ->select('invoices.*', 'customers.company_name as customer_name','customers.tpin as customer_tpin','customers.address as customer_address','users.name as issued_by_name')
    ->first();
        return inertia('Invoice/Show', [
            'invoice' => $invoiceData,
            'status'=> session('status')
        ]);
    }

    public function printinvoice(Request $request)
    {
            // dd($request->all());
            try {
    
                // $serializedData = $request->query('data');
                $id = $request->input('id');
                 $invoice = Invoice::with(['customer', 'issuedBy'])->find($id);
                 $customer = Customer::find($invoice->customer);
                 $invoice->customer = $customer;
                 $dompdf = new Dompdf();
                 $options = new Options();
                 $options->set('isHtml5ParserEnabled', true);
                 $dompdf->setOptions($options);
                 $user = User::find($invoice->issued_by);
                 $truck = DeliveryNote::where('number', '=', $invoice->delivery_note)->first();

                $invoice->user = $user;
             
                $line_item = json_decode($invoice->line_items,true);              
                $invoice->track_details = $truck->truck_details;
                $company_name = $customer->company_name;
        
                $invoice->line_items = json_decode($invoice->line_items,true);
                        $html =  view('print.invoice',
                        [
                            'invoice' => $invoice,
                        ]
                        )->render();
                        // return view('print.invoice', [
                        //     'invoice' => $invoice,
                        // ]);
                        $dompdf->loadHtml($html);
 
                        $dompdf->setPaper('A4', 'portrait');
                        $dompdf->render();
                        $output = $dompdf->output();
        
                     return new Response($output, 200, [
                          'Content-Type' => 'application/pdf',
                          'Content-Disposition' => 'inline; filename="' .rawurlencode($company_name). '-' . (new \DateTime($invoice->date))->format('Y-m-d') . '.pdf" ',
                      ]);
                    
                } catch (\Exception $e) {
                    return response()->json(['message' => 'Failed to retrieve invoice', 'error' => $e->getMessage()], 500);
                }
    }
    public function store(Request $request)
    {
        // Your code to store a new customer
    }

    public function update(Request $request, $id)
    {
        // Your code to update a specific customer
    }

    public function destroy($id)
    {
        // Your code to delete a specific customer
    }
}
