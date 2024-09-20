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
use App\Http\Controllers\FuelExpenseController;
use App\Http\Controllers\TransportExpenseController;
use App\Http\Controllers\QuotationController;
use App\Http\Controllers\ClearanceFeeController;
use App\Http\Controllers\DutyController;
use App\Models\Invoice;
use App\Models\DeliveryNote;
use App\Models\GoodReceived;
use App\Models\Customer;
use App\Models\Supplier;
use App\Models\FuelExpense;
use App\Models\TransportExpense;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\Quotation;
use App\Models\ClearanceFee;
use App\Models\Duty;





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
    $currentMonth = now()->month; 
    // return invoice sum total with status paid 
    $paidInvoices = Invoice::whereMonth('created_at', $currentMonth)->where('status', 'paid')->sum('total');
    $unpaidInvoices = Invoice::whereMonth('created_at', $currentMonth)->where('status', 'pending')->sum('total');
    $totalInvoices = Invoice::whereMonth('created_at', $currentMonth)->sum('total');
  
    $creditFuelExpensesRecords = FuelExpense::whereMonth('created_at', $currentMonth)->where('type', 'credit')->get();
    $creditFuelExpensesTotal = 0;
    foreach ($creditFuelExpensesRecords as $record) {
        $creditFuelExpensesTotal += $record->total * $record->exchange_rate;
    }

    $cashFuelExpensesRecords = FuelExpense::whereMonth('created_at', $currentMonth)->where('type', 'cash')->get();
    $cashFuelExpensesTotal = 0;
    foreach ($cashFuelExpensesRecords as $record) {
        $cashFuelExpensesTotal += $record->total * $record->exchange_rate;
    }

    $transportExpensesRecords = TransportExpense::whereMonth('created_at', $currentMonth)->get();

    $transportExpensesTotal = 0;
    foreach ($transportExpensesRecords as $record) {
        $transportExpensesTotal += $record->total * $record->exchange_rate;
    }

    
    $dutiesRecords = Duty::whereMonth('created_at', $currentMonth)->get();
    $dutiesTotal = 0;
    foreach ($dutiesRecords as $record) {
        $dutiesTotal += $record->rate;
    }

    $clearingFeesRecords = ClearanceFee::whereMonth('created_at', $currentMonth)
        ->selectRaw('sum(logistics) as logistics, sum(clearing_fee) as clearing_fee, sum(zcsa) as zcsa')
        ->first();
    $clearingFeesTotal = $clearingFeesRecords->logitics + $clearingFeesRecords->clearing_fee + $clearingFeesRecords->zcsa;

    $totalClearing = $clearingFeesTotal + $dutiesTotal;

        $paidFuelExpenses = FuelExpense::whereMonth('created_at', $currentMonth)->where('status', 'paid')->sum('total');
        $expenses = [
            3000,
            $paidFuelExpenses
        ]; 
 

 

    return Inertia::render('Dashboard',
[
    'paidInvoices' => $paidInvoices,
    'unpaidInvoices' => $unpaidInvoices,
    'totalInvoices' => $totalInvoices,
    'totalClearing' => $totalClearing,
    'cashFuelExpensesTotal' => $cashFuelExpensesTotal,
    'creditFuelExpensesTotal' => $creditFuelExpensesTotal,
    'transportExpensesTotal' => $transportExpensesTotal,
   'expenses'=>$expenses,
    
]
);
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

    // Fuel Expenses
    Route::get('/fuel-expenses', [FuelExpenseController::class, 'index']);
    Route::get('/fuel-expenses/create', [FuelExpenseController::class, 'create']);
    Route::post('/fuel-expenses', [FuelExpenseController::class, 'store']);
    Route::get('/fuel-expenses/{fuelExpense}', [FuelExpenseController::class, 'show']);
    Route::get('/fuel-expenses/{fuelExpense}/edit', [FuelExpenseController::class, 'edit']);
    Route::put('/fuel-expenses/{fuelExpense}', [FuelExpenseController::class, 'update']);
    Route::delete('/fuel-expenses/{fuelExpense}', [FuelExpenseController::class, 'destroy']);

    // Transport Expenses

    Route::get('/transport-expenses', [TransportExpenseController::class, 'index']);
    Route::get('/transport-expenses/create', [TransportExpenseController::class, 'create']);
    Route::post('/transport-expenses', [TransportExpenseController::class, 'store']);
    Route::get('/transport-expenses/{transportExpense}', [TransportExpenseController::class, 'show']);
    Route::get('/transport-expenses/{transportExpense}/edit', [TransportExpenseController::class, 'edit']);
    Route::put('/transport-expenses/{transportExpense}', [TransportExpenseController::class, 'update']);
    Route::delete('/transport-expenses/{transportExpense}', [TransportExpenseController::class, 'destroy']);
    // quotations
    Route::get('/quotations', [QuotationController::class, 'index']);
    Route::get('/quotations/create', [QuotationController::class, 'create']);
    Route::post('/quotations', [QuotationController::class, 'store']);
    Route::get('/quotations/{quotation}', [QuotationController::class, 'show']);
    Route::get('/quotations/{quotation}/edit', [QuotationController::class, 'edit']);
    Route::put('/quotations/{quotation}', [QuotationController::class, 'update']);
    Route::delete('/quotations/{quotation}', [QuotationController::class, 'destroy']);

    // clearance fee 
    Route::get('/clearance-fees', [ClearanceFeeController::class, 'index']);
    Route::get('/clearance-fees/create', [ClearanceFeeController::class, 'create']);
    Route::post('/clearance-fees', [ClearanceFeeController::class, 'store']);
    Route::get('/clearance-fees/{clearanceFee}', [ClearanceFeeController::class, 'show']);
    Route::get('/clearance-fees/{clearanceFee}/edit', [ClearanceFeeController::class, 'edit']);
    Route::put('/clearance-fees/{clearanceFee}', [ClearanceFeeController::class, 'update']);
    Route::delete('/clearance-fees/{clearanceFee}', [ClearanceFeeController::class, 'destroy']);

    //duty
    Route::get('/duties', [DutyController::class, 'index']);
    Route::get('/duties/create', [DutyController::class, 'create']);
    Route::post('/duties', [DutyController::class, 'store']);
    Route::get('/duties/{duty}', [DutyController::class, 'show']);
    Route::get('/duties/{duty}/edit', [DutyController::class, 'edit']);
    Route::put('/duties/{duty}', [DutyController::class, 'update']);
    Route::delete('/duties/{duty}', [DutyController::class, 'destroy']);

    // newsletter
    Route::get('/newsletter', [App\Http\Controllers\NewsletterController::class, 'index']);

    // Print 
    Route::post('/invoice/print', [InvoiceController::class, 'printinvoice']);
    Route::post('/quotation/print', [QuotationController::class, 'printquotation']);
    Route::post('/delivery-note/print', [DeliveryNoteController::class, 'printdeliverynote']);
    Route::post('/goods-recieved/print', [GoodReceivedController::class, 'printgoodreceived']);


});



require __DIR__.'/auth.php';
