<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Quotation;
use App\Models\User;
use App\Models\Customer;
use Illuminate\Http\Response;   
use Dompdf\Dompdf;
use Dompdf\Options;
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
       
        
        $quotation = Quotation::join('customers', 'quotations.customer_id', '=', 'customers.id')
        ->select('quotations.*', 'customers.company_name as company_name', 'customers.tpin as customer_tpin') 
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

    public function printquotation(Request $request)
    {
            // dd($request->all());
            try {
    
                // $serializedData = $request->query('data');
                $id = $request->input('id');
                 $quotation = Quotation::with(['customer', 'issuedBy'])->find($id);
                 $customer = Customer::find($quotation->customer_id);
                 $quotation->customer = $customer;
                 $dompdf = new Dompdf();
                 $options = new Options();
                 $options->set('isHtml5ParserEnabled', true);
                 $dompdf->setOptions($options);
                 $user = User::find($quotation->issued_by);
            
        
                $quotation->line_items = json_decode($quotation->items,true);
                        $html =  view('print.quotation',
                        [
                            'quotation' => $quotation,
                        ]
                        )->render();
                      
                        $dompdf->loadHtml($html);
 
                        $dompdf->setPaper('A4', 'portrait');
                        $dompdf->render();
                        $output = $dompdf->output();
        
                     return new Response($output, 200, [
                          'Content-Type' => 'application/pdf',
                          'Content-Disposition' => 'inline; filename="Quotation.pdf"',
                      ]);
                    
                } catch (\Exception $e) {
                    return response()->json(['message' => 'Failed to retrieve invoice', 'error' => $e->getMessage()], 500);
                }
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
