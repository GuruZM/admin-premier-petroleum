<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Newsletter;
use App\Jobs\SendNewsletter;
use Illuminate\Support\Facades\Mail;
use App\Jobs\NewsletterJob;


class NewsletterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            $validatedData = $request->validate([
                'title' => 'required|max:255',
                'content' => 'required',
            ]);

           dispatch(new NewsletterJob($validatedData['title'], $validatedData['content']));

             Newsletter::create($validatedData);

            return response()->json([
                'success' => true,
                'message' => 'Newsletter created successfully.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'errorMessage'=> $e->getMessage(),
                'message' => 'Newsletter not created.'
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
