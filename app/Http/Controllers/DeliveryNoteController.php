<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeliveryNote;
use Inertia\Inertia;


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
    ->select('delivery_notes.*', 'invoices.number as invoice_number','customers.firstname as client' )
        ->first();
        return inertia('DeliveryNote/Show', [
            'deliveryNote' => $deliveryNoteData,
            'status'=> session('status')
        ]);
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
