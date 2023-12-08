<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeliveryNote;
use Inertia\Inertia;


class DeliveryNoteController extends Controller
{
    public function index()
    {
        $deliveryNote = DeliveryNote::all();
        return inertia('DeliveryNote/Index', [
            'deliveryNote' => $deliveryNote,
            'status'=> session('status')
        ]);

    }

    public function show($id)
    {
        // Your code for the show method
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
