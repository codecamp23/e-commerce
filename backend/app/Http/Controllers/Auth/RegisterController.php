<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    function register(Request $request)
    {
        $request->validate([
            'username' => 'required|regex:/[0-9]/',
            'email' => 'required|email|regex:/gmail\.com$/|unique:users,email',
            'password' => 'required|min:6|regex:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/',
            'confirmation_password' => 'required|same:password',
        ], [
            'username.regex' => 'The username must contain with numeric digits.',
            'email.regex' => 'Please enter your valid email.',
            'password.regex' => 'The password must include at least uppercase letter, number special character, and be at least 6 characters long.',
        ]);
        
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return Response::Out('success', 'Your Account Created!', '', 200,);
    }
}
