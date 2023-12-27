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
        Schema::create('fuel_expense', function (Blueprint $table) {
            $table->id();
            $table->double('quantity');
            $table->double('price');
            $table->double('total');
            $table->string('status'); // Assuming 'status' is a string, adjust as needed
            $table->text('duty')->nullable(); // Assuming 'duty' is a text field, adjust as needed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fuel_expense');
    }
};
