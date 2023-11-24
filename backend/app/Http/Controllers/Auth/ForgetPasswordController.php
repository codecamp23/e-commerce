<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use App\Mail\OTPMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ForgetPasswordController extends Controller
{
    function forgetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
        ]);
        $otp = rand(100000, 999999);
        $user = User::where('email', $request->email)->first();

        DB::table('password_reset_tokens')->insert([
            'email' => $request->email,
            'otp' => $otp
        ]);

        Mail::to($request->email)->send(new OTPMail($otp, $user));

        return Response::Out('success', 'Your email send!', '', 200);
    }
}
