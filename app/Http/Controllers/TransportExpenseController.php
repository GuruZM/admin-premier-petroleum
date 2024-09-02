<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransportExpense;
use Inertia\Inertia;
use App\Models\Invoice;
class TransportExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return inertia view


        $invoice = Invoice::selectRaw('number, line_items')->get();
       

        $invoce_quantity = [];
 
        foreach($invoice as $value){
            $invoice_quantity[] = [
                'invoice_number' => $value->number,
                'quantity' => json_decode($value->line_items, true)[0]['quantity']
            ];
        }
 
                    

        return inertia('TransportExpense/Index', [
            'transport_expenses' => TransportExpense::all(),
            'invoice_quantity' => $invoice_quantity,
            'status'=> session('status')
        ]);

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
        //
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
