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
            $table->unsignedBigInteger('brand_id')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->string('name', 200);
            $table->string('slug', 50);
            $table->string('unit', 50);
            $table->string('price', 50);
            $table->unsignedBigInteger('color_id')->nullable();
            $table->string('size', 50)->nullable();
            $table->string('discount', 50)->nullable();
            $table->string('discount_price', 50)->nullable();
            // $table->enum('offer', ['End of Season', 'Winter Sale', 'Electronic', 'Flash Deal'])->nullable();
            $table->longText('description');
            $table->enum('remark', ['new', 'hot', 'top_selling', 'featured', 'trending'])->nullable();
            $table->enum('refundable', ['yes', 'no']);
            $table->enum('status', ['publish', 'unpublish'])->default('publish');
            $table->string('image')->nullable();

            // seo
            $table->string('meta_tag', 1000)->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();

            $table->foreign('brand_id')->references('id')->on('brands')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreign('category_id')->references('id')->on('categories')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->foreign('color_id')->references('id')->on('colors')
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
