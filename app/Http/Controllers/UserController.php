<?php

namespace App\Http\Controllers;
use   Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Facade;
class UserController extends Controller
{
    // public function index(){
    //   return response()->json(User::get(),200);
    // }

    // public function show($id){
        
    //     $user = User::find($id);
    //     if (is_null($user)){
    //         return response()->json(null,404);
    //     }
    //     return response()->json(User::findOrFail($id),200);
    // }

    // public function store(Request $request){
      
    //     $user = User::create($request->all());
    //     return response()->json($user,201);
    // }

    // public function update(Request $request,User $user){
    //     $user -> update($request->all());
    //     return response()->json($user,200);
    // }

    // public function delete(Request $request, User $user){
    //     $user ->delete();
    //     return response()->json(null,204);
    }

