<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subsciber;
class SubscriberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Subscribers/Index', [
            'subscribers' => Subsciber::all(),
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
        try {
            $validatedData = $request->validate([
                'email' => 'required|email|unique:subscribers',
            ]);
            Subscriber::create($validatedData);
            return redirect()->route('subscribers.index')->with('success', 'Subscriber created successfully.');
        } catch (\Exception $e) {
            return redirect()->route('subscribers.index')->with('error', 'Error creating subscriber: ' . $e->getMessage());
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
    public function update(Request $request, Subscriber $subscriber)
    {
        try {
            $validatedData = $request->validate([
                'email' => 'required|email|unique:subscribers,email,' . $subscriber->id,
            ]);

            $subscriber->update($validatedData);

            return redirect()->route('subscribers.index')->with('success', 'Subscriber updated successfully.');
        } catch (\Exception $e) {
            return redirect()->route('subscribers.index')->with('error', 'Error updating subscriber: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $subscriber->delete();
            return redirect()->route('subscribers.index')->with('success', 'Subscriber deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->route('subscribers.index')->with('error', 'Error deleting subscriber: ' . $e->getMessage());
        }
    }
}
