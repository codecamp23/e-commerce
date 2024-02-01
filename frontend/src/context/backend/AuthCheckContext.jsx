import React from 'react';
import axiosClient from '../../axios-client';

const AuthCheckContext = () => {
    const checkAuthentication = async (token) => {
        const response = await axiosClient.get(`/auth-check/${token}`);
        console.log(response);
    }
    return {
        checkAuthentication
    }
}

export default AuthCheckContext;
