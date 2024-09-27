<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;   
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{
    protected $invoice_id_count = 1190;
    public function index()
    {
        try {
            $invoiceData = Invoice::join('customers', 'invoices.customer', '=', 'customers.id')
                ->join('users', 'invoices.issued_by', '=', 'users.id')
                ->select('invoices.*', 'customers.company_name as customer_name', 'users.name as issued_by_name')
                ->orderBy('invoices.id', 'desc')
                ->get();
            return response()->json($invoiceData);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error fetching invoice data: ' . $e->getMessage());
    
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function updateStatus(Request $request, Invoice $invoice)
    {
        try {
 
            $invoice->status = "paid";
            $invoice->save();

            return response()->json(['message' => 'Invoice status updated successfully'], 201);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error updating invoice status: ' . $e->getMessage());

            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function show($id)
    {
         //
    }

    public function store(Request $request)
    {
         
   
        
        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                
                'truck_plate' => 'required|string',
                'date' => 'required|string',
                'due_date' => 'required|string',
                'client'=> 'required',
                'items'=>'required',
                'vat'=>'required',
                'subtotal'=>'required',
                'invoicetotal'=>'required',
                'issued_by'=>'required',
            ]);

            $invoiceCount = Invoice::count();
            $invoice_number = (int)($this->invoice_id_count + (int)$invoiceCount);
             

            // Create a new customer
            $invoice = Invoice::create([
                'number'=> 'INV-' . $invoice_number,
                'track_details' => $validatedData['truck_plate'],
                'date' => $validatedData['date'],
                'due_date' => $validatedData['due_date'],
                'customer'=> $validatedData['client'],
                'line_items'=>json_encode($validatedData['items']),
                'subtotal'=>$validatedData['subtotal'],
                'vat'=>$validatedData['vat'],
                'total'=>$validatedData['invoicetotal'],
                'issued_by'=>$validatedData['issued_by'],
                'approved_by'=>$validatedData['issued_by'],
                'bank_details'=>'Name of Bank: STANBIC BANK
                Payment to: PREMIER PETROLEUM LIMITED
                Account No. 9130005329888',
            ]);      
            // $invoice->number = 'INV-' . $invoice->id;
            $invoice->save();

            return response()->json(['message' => 'Invoice created successfully'], 201);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error creating Supplier: ' . $e->getMessage());

            return response()->json(['error' => 'Internal server error','error'=>$e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
         
        try {
            $invoice = Invoice::find($id);
            if (!$invoice) {
                // Handle the case where the invoice with the given ID is not found
                return response()->json(['error' => 'Invoice not found'], 404);
            }
        
            $invoice->number = $request->invoiceNumber;
            $invoice->track_details = $request->truck_plate;
            $invoice->date = $request->date;
            $invoice->due_date = $request->due_date;
            $invoice->customer = $request->client;
            if (isset($request->items) && is_array($request->items)) {
                $invoice->items = json_encode($request->items, JSON_UNESCAPED_SLASHES);
            }
            $invoice->subtotal = $request->subtotal;
            $invoice->vat = $request->vat;
            $invoice->total = $request->invoicetotal;
            $invoice->issued_by = $request->issued_by;
            $invoice->approved_by = $request->issued_by;   
        
            if ($invoice->save()) {
                // The save operation was successful
                return response()->json(['message' => 'Invoice updated successfully']);
            } else {
                // Handle the case where the save operation failed
                return response()->json(['error' => 'Failed to update the invoice'], 500);
            }
        } catch (\Exception $e) {
            // Handle any exceptions that occurred during the update
            return response()->json(['error' => 'An error occurred while updating the invoice', 'message' => $e->getMessage()], 500);
        }
        

    }

    public function destroy($id)
    {
 
       try {
        $invoice = Invoice::find($id);
        if (!$invoice) {
            return response()->json(['message' => 'Invoice not found'], 404);
        }
        $invoice->delete();
        return response()->json(['message' => 'Invoice deleted successfully']);
    } catch (\Exception $e) {
        return response()->json(['error' => 'An error occurred while deleting the invoice', 'message' => $e->getMessage()], 500);
    }
    }
}
