<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Response;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VerifyController extends Controller
{
    function verifyOTP(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric|digits:6',
        ]);

        $userOTPChcek = DB::table('password_reset_tokens')->where('otp', $request->otp)->where('email', $request->email)->first();
        if ($userOTPChcek) {
            DB::table('password_reset_tokens')->where('otp', $request->otp)->where('email', $request->email)->delete();
            return Response::Out('success', 'Match this otp!', '', 200);
        } else {
            return Response::Out('fail', 'Plase enter your valid pin!', '', 200);
        }
    }
}
