<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\CustomerController;
use App\Http\Controllers\api\v1\InvoiceController;
use App\Http\Controllers\api\v1\DeliveryNoteController;
use App\Http\Controllers\api\v1\GoodReceivedController;
use App\Http\Controllers\api\v1\SupplierController;
use App\Http\Controllers\api\v1\FuelExpenseController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::prefix('v1')->middleware('auth:api')->group(function () {
//     Route::apiResource('customers', CustomerController::class);
//     Route::apiResource('invoices', InvoiceController::class);
//     Route::apiResource('delivery-notes', DeliveryNoteController::class);
//     Route::apiResource('good-received', GoodReceivedController::class);
//     Route::apiResource('suppliers', SupplierController::class);
// });


Route::prefix('v1')->group(function () {
    Route::apiResource('customers', CustomerController::class);
    Route::apiResource('invoices', InvoiceController::class);
    Route::apiResource('delivery-notes', DeliveryNoteController::class);
    Route::apiResource('good-received', GoodReceivedController::class);
    Route::apiResource('suppliers', SupplierController::class);
    Route::resource('fuel_expenses', FuelExpenseController::class);
    Route::resource('transport_expenses', TransportExpenseController::class);
});