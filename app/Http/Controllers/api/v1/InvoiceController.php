<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;   
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{
    public function index()
    {
        try {
            $invoiceData = Invoice::join('customers', 'invoices.customer', '=', 'customers.id')
                ->join('users', 'invoices.issued_by', '=', 'users.id')
                ->select('invoices.*', 'customers.company_name as customer_name', 'users.name as issued_by_name')
                ->get();
            return response()->json($invoiceData);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error fetching invoice data: ' . $e->getMessage());
    
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function show($id)
    {
        // Your code to fetch a specific customer
    }

    public function store(Request $request)
    {
         
        
        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'invoiceNumber' => 'required|string',
                'truck_plate' => 'required|string',
                'date' => 'required|string',
                'due_date' => 'required|string',
                'client'=> 'required',
                'items'=>'required',
                'subtotal'=>'required',
                'invoicetotal'=>'required',
                'issued_by'=>'required',
            ]);

            // Create a new customer
            $invoice = Invoice::create([
                'number' => $validatedData['invoiceNumber'],
                'track_details' => $validatedData['truck_plate'],
                'date' => $validatedData['date'],
                'due_date' => $validatedData['due_date'],
                'customer'=> $validatedData['client'],
                'line_items'=>json_encode($validatedData['items']),
                'subtotal'=>$validatedData['subtotal'],
                'vat'=>0.16,
                'total'=>$validatedData['invoicetotal'],
                'issued_by'=>$validatedData['issued_by'],
                'approved_by'=>$validatedData['issued_by'],
                'bank_details'=>'Name of Bank: STANBIC BANK
                Payment to: PREMIER PETROLEUM LIMITED
                Account No. 9130005329888',
            ]);

            return response()->json(['message' => 'Invoice created successfully'], 201);
        } catch (\Exception $e) {
            // Log the error or handle it as needed
            \Log::error('Error creating Supplier: ' . $e->getMessage());

            return response()->json(['error' => 'Internal server error','error'=>$e->getMessage()], 500);
        }
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
