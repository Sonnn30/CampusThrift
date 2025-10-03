<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('login');
// })->name('login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

Route::get('/SignUp', function(){
    return Inertia::render('SignUp');
})->name('SignUp');

Route::get('/login', function(){
    return Inertia::render('login');
})->name('login');

Route::get('/product', function () {
    return Inertia::render('ProductCatalog');
});