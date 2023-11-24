<?php
namespace App\Exceptions;

class Response
{
    public static function Out($status, $msg, $data, $code)
    {
        return response()->json([
            'status' => $status,
            'message' => $msg,
            'data' => $data,
        ], $code);
    }
}