<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->text('track_details');
            $table->date('date');
            $table->date('due_date');
            $table->foreignId('customer')->constrained('customers'); // Assuming 'customers' is the customers table.
            $table->json('line_items');
            $table->decimal('subtotal', 10, 2);
            $table->decimal('vat', 10, 2);
            $table->decimal('total', 10, 2);
            $table->foreignId('issued_by')->constrained('users');
            $table->foreignId('approved_by')->constrained('users');
            $table->text('bank_details')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
