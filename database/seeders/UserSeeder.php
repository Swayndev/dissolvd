<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        $us_as_users_seeder = [
            [
                'id' => 1,
                'username' => 'adrien',
                'password' => '12345',
                'email' => 'adrien.demarez1@gmail.com',
                'role' => 'admin'
            ],
            [
                'id' => 2,
                'username' => 'jayke',
                'password' => '12345',
                'email' => 'jayke@gmail.com',
                'role' => 'admin'
            ],
            [
                'id' => 3,
                'username' => 'ilya',
                'password' => '12345',
                'email' => 'ilyamaeda@gmail.com',
                'role' => 'admin'
            ]

        ];

        foreach ($us_as_users_seeder as $user) {

            //dd($us_as_users_seeder);

            $three_user = new User();

            $three_user->id = $user['id'];
            $three_user->username = $user['username'];
            $three_user->password = $user['password'];

            $three_user->email = $user['email'];
            $three_user->role = $user['role'];

            $three_user->save();
        }

        User::create(
            [
                'id' => $user['id'],
                'username' => $user['username'],
                'password' => $user['password'],

                'email' => $user['email'],
                'role' => $user['role'],
            ]
        );
    } // end of the run function
}
