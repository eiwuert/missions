<?php

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
        factory(App\Models\v1\User::class, 'admin')->create()->each(function($user) {
            $user->assign('admin');
        });
        factory(App\Models\v1\User::class, 'joe')->create();
        factory(App\Models\v1\User::class, config('seeders.users'))->create();
    }
}
