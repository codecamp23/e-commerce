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
        Schema::table('products', function (Blueprint $table) {
            $table->string('vat', 50)->nullable();
            $table->string('vat_status', 50)->nullable();
            $table->string('tax', 50)->nullable();
            $table->string('tax_status', 50)->nullable();
            $table->decimal('weight', 10, 2)->nullable();
            $table->integer('purchase_qty')->nullable();
            $table->string('tags', 1000)->nullable();
            $table->string('barcode')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //
        });
    }
};
