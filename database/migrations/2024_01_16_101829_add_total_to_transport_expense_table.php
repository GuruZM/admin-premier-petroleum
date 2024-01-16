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
        Schema::table('transport_expenses', function (Blueprint $table) {
            $table->decimal('total', 10, 2)->after('price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('transport_expense', function (Blueprint $table) {
             $table->decimal('total', 10, 2)->after('price');
        });
    }
};
