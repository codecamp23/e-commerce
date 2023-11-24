<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|regex:/gmail\.com$/|exists:users',
            'password' => 'required|min:6|regex:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/',
        ], [
            'password.regex' => 'The password must include at least uppercase letter, number special character, and be at least 6 characters long.'
        ]);

        $user = User::where('email', $request->email)->first();
        $checkPassword = Hash::check($request->password, $user->password);
        if ($checkPassword) {
            $token = $user->createToken('ecommerce')->plainTextToken;
            $data = [
                'token' => $token,
                'user' => $user
            ];
            return Response::Out('success', 'Login success!', $data, 200);
        }else{
            return Response::Out('error', 'Login failed!', '', 500);
        }
    }
}
