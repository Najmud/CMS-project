<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\UserController;
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

Route::get('/',function(){
    return view('welcome');
}
);

Route::get('/users/2',[UserController::class,'store']);

//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';

// //admin group
// Route::middleware(['auth','roles:admin'])->group(function(){

//     Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])
//     ->name('admin.dashboard');
// });//End admin grop

// //instructor group midd
// Route::middleware(['auth','roles:instructor'])->group(function(){

//     Route::get('/instructor/dashboard', [InstructorController::class, 'InstructorDashboard'])
//     ->name('instructor.dashboard');
// });//End inst grop 


// Route::middleware(['auth','roles:admin'])->group(function(){

//     Route::get('/course', [AdminController::class, 'Course'])
//     ->name('course');
// });//End admin grop

