<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class InstructorController extends Controller
{
    //
    public function InstructorDashboard(){
        return Inertia::render('instructor/instructor_dashboard');
    }
}
