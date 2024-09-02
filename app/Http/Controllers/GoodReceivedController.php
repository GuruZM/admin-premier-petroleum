<?php

namespace App\Http\Controllers;
use App\Models\GoodReceived;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Http\Response;   
use Dompdf\Dompdf;
use Dompdf\Options;
class GoodReceivedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        // render the goods recieved index page
            $goodsrecieved = GoodReceived::all();                   
        return inertia('GoodsReceived/Index', [
            'goodsrecieved' => $goodsrecieved,
            'status'=> session('status')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('GoodsReceived/Create',[
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
         // find and return the goods recieved view
        $goodsrecieved = GoodReceived::find($id);
        return inertia('GoodsReceived/Show', [
            'goodsRecieved' => $goodsrecieved,
            'status'=> session('status')
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $goodsrecieved = GoodReceived::find($id);
        return inertia('GoodsReceived/Create', [
            'goodsRecieved' => $goodsrecieved,
            'status'=> session('status')
        ]);
    }

    public function printgoodreceived(Request $request)
    {
            // dd($request->all());
            try {
    
                // $serializedData = $request->query('data');
                $id = $request->input('id');
                 $goodsReceived = GoodReceived::findOrFail($id);    
                 $dompdf = new Dompdf();
                 $options = new Options();
                 $options->set('isHtml5ParserEnabled', true);
                 $dompdf->setOptions($options);
             
            
        
                $goodsReceived->line_items = json_decode($goodsReceived->items,true);
                        $html =  view('print.goodsRecieved',
                        [
                            'goodsReceived' => $goodsReceived,
                        ]
                        )->render();
                      
                        $dompdf->loadHtml($html);
 
                        $dompdf->setPaper('A4', 'portrait');
                        $dompdf->render();
                        $output = $dompdf->output();
        
                     return new Response($output, 200, [
                          'Content-Type' => 'application/pdf',
                          'Content-Disposition' => 'inline; filename="Goods-Recieved.pdf"',
                      ]);
                    
                } catch (\Exception $e) {
                    return response()->json(['message' => 'Failed to retrieve goods recieved', 'error' => $e->getMessage()], 500);
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
