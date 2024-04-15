<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function AdminDashboard(){
        return Inertia::render('admin/admin_dashboard');
    }

    public function Course(){
        return Inertia::render('course');
    }
}
