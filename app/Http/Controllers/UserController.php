<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\http\Response;
class UserController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection 
     */
    public function index()
    {
        return UserResource::collection(
            User::query()->orderBy('id','desc')->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     * @param \App\Http\Requests\StoreUserRequest $request 
     * @return \Illuminate\Http\Response 
     * @return \App\Http\Resources\UserResource
     * @return \Illuminate\Contracts\Routing\ResponseFactory
     */
    public function store(StoreUserRequest $request)
    {

        $data = $request -> validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);

        return  response([new UserResource($user) , 201]);   
    }

    /**
     * Display the specified resource.
     * @return \Illuminate\Http\Response
     * @param \App\Models\User $user
     * @return \App\Http\Resources\UserResource
     * 
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     * @param \App\Models\User $user
     * @param \App\Http\Requests\UpdateUserRequest $request 
     * @return \Illuminate\Http\Response
     * @return \App\Http\Resources\UserResource
     * 
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request -> validated();
        if (isset($data['password'])){
            $data['password'] = bcrypt($data['password']);
        }
        $user ->update($data);
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response("",204);
    }
}
