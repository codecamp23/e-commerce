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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('category_id');
            $table->string('name', 200);
            $table->string('slug', 50);
            $table->string('unit', 50);
            $table->string('price', 50);
            $table->string('discount', 50)->nullable();
            $table->string('discount_price', 50)->nullable();
            $table->string('offer', 50)->nullable();
            $table->longText('description');
            $table->enum('remark', ['new', 'hot', 'top_selling', 'featured', 'trending']);
            $table->enum('refundable', ['yes', 'no']);
            $table->enum('status', ['publish', 'unpublish'])->default('publish');
            $table->string('image')->nullable();

            // seo
            $table->string('meta_tag')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();

            $table->foreign('brand_id')->references('id')->on('brands')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreign('category_id')->references('id')->on('categories')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
