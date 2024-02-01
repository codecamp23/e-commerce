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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->unsignedBigInteger('brand_id');
            $table->string('type')->nullable();
            $table->string('parent_category')->nullable();
            $table->string('ordering_number')->nullable();
            $table->string('banner')->nullable();
            $table->string('icon')->nullable();
            $table->string('image')->nullable();
            $table->string('image_name')->nullable();
            $table->string('image_size')->nullable();
            $table->string('image_extention')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            
            $table->foreign('brand_id')->references('id')->on('brands')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();
            
            // seo
            $table->string('meta_title')->nullable();
            $table->string('meta_des')->nullable();
            $table->string('filtering_att')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
