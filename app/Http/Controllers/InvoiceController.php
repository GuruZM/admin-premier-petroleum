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

    public function show($id)
    {
        // Your code to fetch a specific customer
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
