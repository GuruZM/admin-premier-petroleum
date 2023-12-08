<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\DeliveryNoteController;
use App\Http\Controllers\GoodReceivedController;
use App\Http\Controllers\SupplierController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    // Customers
    Route::get('/customers', [CustomerController::class, 'index']);
    Route::get('/customers/create', [CustomerController::class, 'create']) ;
    Route::post('/customers', [CustomerController::class, 'store']);
    Route::get('/customers/{customer}', [CustomerController::class, 'show']);
    Route::get('/customers/{customer}/edit', [CustomerController::class, 'edit']);
    Route::put('/customers/{customer}', [CustomerController::class, 'update']);
    Route::delete('/customers/{customer}', [CustomerController::class, 'destroy']);

    // Invoices
    Route::get('/invoices', [InvoiceController::class, 'index']);
    Route::get('/invoices/create', [InvoiceController::class, 'create']);
    Route::post('/invoices', [InvoiceController::class, 'store']);
    Route::get('/invoices/{invoice}', [InvoiceController::class, 'show']);
    Route::get('/invoices/{invoice}/edit', [InvoiceController::class, 'edit']);
    Route::put('/invoices/{invoice}', [InvoiceController::class, 'update']);
    Route::delete('/invoices/{invoice}', [InvoiceController::class, 'destroy']);

    // Delivery Notes
    Route::get('/delivery-notes', [DeliveryNoteController::class, 'index']);
    Route::get('/delivery-notes/create', [DeliveryNoteController::class, 'create']);
    Route::post('/delivery-notes', [DeliveryNoteController::class, 'store']);
    Route::get('/delivery-notes/{deliveryNote}', [DeliveryNoteController::class, 'show']);
    Route::get('/delivery-notes/{deliveryNote}/edit', [DeliveryNoteController::class, 'edit']);
    Route::put('/delivery-notes/{deliveryNote}', [DeliveryNoteController::class, 'update']);
    Route::delete('/delivery-notes/{deliveryNote}', [DeliveryNoteController::class, 'destroy']);

    // Good Received
    Route::get('/good-received', [GoodReceivedController::class, 'index']);
    Route::get('/good-received/create', [GoodReceivedController::class, 'create']);
    Route::post('/good-received', [GoodReceivedController::class, 'store']);
    Route::get('/good-received/{goodReceived}', [GoodReceivedController::class, 'show']);
    Route::get('/good-received/{goodReceived}/edit', [GoodReceivedController::class, 'edit']);
    Route::put('/good-received/{goodReceived}', [GoodReceivedController::class, 'update']);
    Route::delete('/good-received/{goodReceived}', [GoodReceivedController::class, 'destroy']);

    // Suppliers
    Route::get('/suppliers', [SupplierController::class, 'index']);
    Route::get('/suppliers/create', [SupplierController::class, 'create']);
    Route::post('/suppliers', [SupplierController::class, 'store']);
    Route::get('/suppliers/{supplier}', [SupplierController::class, 'show']);
    Route::get('/suppliers/{supplier}/edit', [SupplierController::class, 'edit']);
    Route::put('/suppliers/{supplier}', [SupplierController::class, 'update']);
    Route::delete('/suppliers/{supplier}', [SupplierController::class, 'destroy']);
});



require __DIR__.'/auth.php';
