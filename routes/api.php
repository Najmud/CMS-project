<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;

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

 Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users', UserController::class);
});
Route::post('/signup',[AuthController::class,'Signup']);
Route::post('/login',[AuthController::class,'login']);

// Route::get('users',[UserController::class,'index']);
// Route::get('users/{id}',[UserController::class,'show']);
// Route::get('users/',[UserController::class,'store']);
// // Route::get('users/{user}',[UserController::class,'update']);
// Route::get('users/{user}',[UserController::class,'delete']);
