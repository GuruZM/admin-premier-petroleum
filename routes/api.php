<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\CustomerController;
use App\Http\Controllers\api\v1\InvoiceController;
use App\Http\Controllers\api\v1\DeliveryNoteController;
use App\Http\Controllers\api\v1\GoodReceivedController;
use App\Http\Controllers\api\v1\SupplierController;
use App\Http\Controllers\api\v1\FuelExpenseController;
use App\Http\Controllers\api\v1\TransportExpenseController;
use App\Http\Controllers\api\v1\QuotationController;
use App\Http\Controllers\api\v1\SubscriberController;
use App\Http\Controllers\api\v1\NewsletterController; 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::apiResource('customers', CustomerController::class);
    Route::apiResource('invoices', InvoiceController::class);
    Route::put('invoices/{invoice}/status', [InvoiceController::class, 'updateStatus']);
    Route::apiResource('delivery-notes', DeliveryNoteController::class);
    Route::apiResource('good-received', GoodReceivedController::class);
    Route::apiResource('suppliers', SupplierController::class);
    Route::resource('fuel-expenses', FuelExpenseController::class);
    Route::resource('transport-expenses', TransportExpenseController::class);
    Route::resource('quotations', QuotationController::class);
    Route::resource('subscribers', SubscriberController::class);
    Route::resource('newsletter', NewsletterController::class);

});