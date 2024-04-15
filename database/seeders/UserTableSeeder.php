<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert([
            // Admin
            [
                'name'=>'Admin',
                'fname'=>'admin',
                'email'=>'admin@gmail.com',
                'password'=>hash::make('111'),
                'role'=>'admin',
                'status'=>'1',

            ],

            // Instructor
            [
                'name'=>'Instructor',
                'fname'=>'admin',
                'email'=>'instructor@gmail.com',
                'password'=>hash::make('111'),
                'role'=>'instructor',
                'status'=>'1',
                
            ],
            // User 
            [
                'name'=>'User',
                'fname'=>'user',
                'email'=>'user@gmail.com',
                'password'=>hash::make('111'),
                'role'=>'user',
                'status'=>'1',
                
            ],
        ]);
    }
}
