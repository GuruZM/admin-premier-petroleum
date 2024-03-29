<?php

namespace App\Http\Controllers;
use App\Models\GoodReceived;
use Illuminate\Http\Request;

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
