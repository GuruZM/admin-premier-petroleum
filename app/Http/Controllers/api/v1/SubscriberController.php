<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscriber;
use App\Jobs\SubscriberWelcome;


class SubscriberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all subscribers and return json response 
        $subscribers = Subscriber::all();
        return response()->json(
         $subscribers
        ); 

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
        try {
            // $validatedData = $request->validate([
            //     'email' => 'required|email',
            // ]);
            $validatedData = $request->validate([
                'email' => 'required|email|unique:subscribers',
            ]);
            Subscriber::create($validatedData);
            // mail to subscriber

            dispatch(new SubscriberWelcome($validatedData['email']));
            // Mail::to($validatedData['email'])->send(new NewSubscriberWelcome());
            return  response ()->json([
                'success' => true,
                'message' => 'Subscriber created successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'errorMessage'=> $e->getMessage(),
                'message' => 'You\'re already subscribed to our newsletter.'
            ]);
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
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
