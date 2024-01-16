<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;
use Inertia\Inertia;

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
        return inertia('Invoice/Create',[
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
    ->select('invoices.*', 'customers.company_name as customer_name','customers.address as customer_address','users.name as issued_by_name')
    ->first();
        return inertia('Invoice/Show', [
            'invoice' => $invoiceData,
            'status'=> session('status')
        ]);
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
