<?php

use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerifyController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\BrandController;
use App\Http\Controllers\backend\GalleryCategoryController;
use App\Http\Controllers\backend\GalleryController;
use App\Http\Controllers\Backend\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


// * backend routes
// auth api routes
Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/send-otp', [ForgetPasswordController::class, 'forgetPassword']);
Route::post('/verify-otp', [VerifyController::class, 'verifyOTP']);
Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword']);

// brand api routes
Route::get('/brand-get', [BrandController::class, 'get']);
Route::post('/brand-store', [BrandController::class, 'store']);
Route::get('/brand-edit/{id}', [BrandController::class, 'edit']);
Route::post('/brand-update/{id}', [BrandController::class, 'update']);
Route::get('/brand-delete/{id}', [BrandController::class, 'destroy']);

// category api routes
Route::get('/category-get', [CategoryController::class, 'get']);
Route::post('/category-store', [CategoryController::class, 'store']);
Route::get('/category-edit/{id}', [CategoryController::class, 'edit']);
Route::post('/category-update/{id}', [CategoryController::class, 'update']);
Route::get('/category-delete/{id}', [CategoryController::class, 'destroy']);

// product api routes
Route::get('/product-get', [ProductController::class, 'get']);
Route::post('/product-store', [ProductController::class, 'store']);
Route::get('/product-edit/{id}', [ProductController::class, 'edit']);
Route::post('/product-update/{id}', [ProductController::class, 'update']);
Route::get('/product-delete/{id}', [ProductController::class, 'destroy']);


// gallery category api routes
Route::get('/gallery-category-get', [GalleryCategoryController::class, 'get']);
Route::post('/gallery-category-store', [GalleryCategoryController::class, 'store']);
Route::get('/gallery-category-edit/{id}', [GalleryCategoryController::class, 'edit']);
Route::post('/gallery-category-update/{id}', [GalleryCategoryController::class, 'update']);
Route::get('/gallery-category-delete/{id}', [GalleryCategoryController::class, 'destroy']);
// gallery api routes
Route::get('/gallery-get', [GalleryController::class, 'get']);
Route::post('/gallery-store', [GalleryController::class, 'store']);
Route::get('/gallery-info/{id}', [GalleryController::class, 'info']);
Route::get('/gallery-image-detail-download/{image}', [GalleryController::class, 'imageDetailDownload']);
Route::get('/gallery-image-download/{image}', [GalleryController::class, 'imageDownload']);
Route::get('/gallery-delete/{id}', [GalleryController::class, 'destroy']);
Route::post('/gallery-delete-multiple', [GalleryController::class, 'destroyMultiple']);
// gallery trust bin api routes
Route::get('/gallery-trust-bin-get', [GalleryController::class, 'trustBin']);
Route::get('/gallery-trust-bin-info/{id}', [GalleryController::class, 'trustBinInfo']);
Route::get('/gallery-restore/{id}', [GalleryController::class, 'restore']);
Route::post('/gallery-restore-multiple', [GalleryController::class, 'restoreMultiple']);
Route::get('/gallery-force-delete/{id}', [GalleryController::class, 'forceDelete']);
Route::post('/gallery-force-delete-multiple', [GalleryController::class, 'forceDeleteMultiple']);


// common routes
Route::get('/galleries', [GalleryController::class, 'galleries']);
Route::get('/galleryCategories', [GalleryController::class, 'galleryCategories']);


// * frontend routes
