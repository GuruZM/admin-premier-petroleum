<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quotation;

class QuotationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //return all quotations
        $quotations = Quotation::all();
        return response()->json(
             $quotations,
         200);
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
        // validate request data surround in try catch block and store 
        // return $request->all();
        try {
            $request->validate([
            
                'tpin'=>'nullable|string',
                'date'=>'nullable|date',
                'items'=>'required',
                'total'=>'required',
                'vat'=>'nullable',
                'subtotal'=>'nullable',
            ]);
            $quotation = Quotation::create([
 
                'tpin' => $request->tpin,
                'date' => $request->date,
                'items' => json_encode($request->items),
                'total' => $request->total,
                'vat' => $request->vat,
                'subtotal' => $request->subtotal,
            ]);
            if ($quotation) {
                return response()->json([
                    'message' => 'Quotation created successfully',
                ], 201);
            }
            else {
                return response()->json([
                    'message' => 'Error creating quotation',
                ], 201);

            }
           
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error creating quotation'.$th->getMessage(),
            ], 201);
        }
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
        // return $id;
        try {
            $request->validate([
                'tpin' => 'nullable|string',
                'date' => 'nullable|date',
                'items' => 'required',
                'total' => 'required',
                'vat' => 'nullable',
                'subtotal' => 'nullable',
            ]);
        
            $quotation = Quotation::find($id);
        
            if (!$quotation) {
                return response()->json([
                    'error' => 'Quotation not found',
                ], 404);
            }
        
            if (isset($request->items) && is_array($request->items)) {
                $invoice->items = json_encode($request->items, JSON_UNESCAPED_SLASHES);
            }

            $quotation->update([
                'tpin' => $request->tpin,
                'date' => $request->date,
                'items' =>  $request->items,
                'total' => $request->total,
                'vat' => $request->vat,
                'subtotal' => $request->subtotal,
            ]);
        
            return response()->json([
                'message' => 'Quotation updated successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error updating quotation: ' . $e->getMessage(),
            ], 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //delete quotation
        $quotation = Quotation::find($id);
        try {
            if ($quotation) {
                $quotation->delete();
                return response()->json([
                    'message' => 'Quotation deleted successfully',
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Error deleting quotation',
                ], 201);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while deleting the quotation',
                'message' => $e->getMessage(),
            ], 500);
        }
        
    }
}
