<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Quotation;
class QuotationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {     
        $quotations = Quotation::all();
        return inertia('Quotations/Index',[
            'quotations' => $quotations,
            'status'=> session('status')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Quotations/Create',[
            'status'=> session('status')
        ]);
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
       
        $quotation = Quotation::join('customers', 'quotations.tpin', '=', 'customers.tpin')
        ->select('quotations.*', 'customers.*')
        ->where('quotations.id', $id)
        ->first();
        return inertia('Quotations/Show',[
            'quotation' => $quotation,
            'status'=> session('status')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // $quotation = Quotation::join('customers', 'quotations.tpin', '=', 'customers.tpin')
        // ->select('quotations.*', 'customers.*')
        // ->where('quotations.id', $id)
        // ->first();
        $quotation = Quotation::find($id);
            return inertia('Quotations/Create',[
                'quotation' => $quotation,
                'status'=> session('status')
            ]);
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
