<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Api;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function Signup(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $token = $user -> createToken('main')->plainTextToken;

        return response(compact('user','token')); 
    }

    // LOgin
    public function login(LoginRequest $request) 
    {
        $credentails = $request ->validated();
        if(!Auth::attempt($credentails)){
            return response([
                'message'=>'provided email or password is incorrect'
            ]);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user -> createToken('main')->plainTextToken;
        return response(compact('user','token')); 
    }

    public function logout(Request $request){
        /** @var User $user */
        $user = $request->user();
        $user -> currentAccessToken();
        return response('',204);
    }
}
