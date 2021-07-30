<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // $admin = User::create([
        //     'name' => 'Admin',
        //     'email' => 'a@a.com',
        //     'password' => bcrypt('a'),
        // ]);

        $fake_user0 = User::create([
            'name' => 'Martha',
            'email' => 'mar@mar.com',
            'password' => bcrypt('mar'),
        ]);

        $fake_user1 = User::create([
            'name' => 'Ash',
            'email'=> 'ash@ash.com',
            'password' => bcrypt('ash'),
        ]);

        $users = \App\Models\User::factory(5)->create();
        
    }
}
