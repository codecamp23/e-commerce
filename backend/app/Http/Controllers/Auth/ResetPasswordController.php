<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6|regex:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,}$/',
            'confirmation_password' => 'required|same:password',
        ], [
            'password.regex' => 'The password must include at lest a uppercase letter, number , a special character.',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user) {
            $user->update([
                'password' => Hash::make($request->password)
            ]);
            return Response::Out('success', 'Your Password Updated!', '', 200);
        }else{
            return Response::Out('fail', 'Your is request fail!', '', 200);
        }
    }
}
