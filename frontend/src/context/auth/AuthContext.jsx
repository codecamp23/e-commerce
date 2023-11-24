import { useRef, useState } from "react";
import useNotify from '../../notify';
import axiosClient from '../../axios-client';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../ContextProvider";

const AuthContext = () => {
    const {setToken, setUser} = useStateContext();
    const { successMsg, warningMsg } = useNotify();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});
    const form = useRef();
    const navigate = useNavigate("");
    const [passwordErrorhandle, setPasswordErrorhandle] = useState();
    const [passwordConfirmationErrorhandle, setPasswordConfirmationErrorhandle] = useState();

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: email,
                password: password
            }
            const response = await axiosClient.post('/login', payload)
            if (response.data.status === 'success') {
                setToken(response.data.data.token);
                window.location.href = '/admin';
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const sginUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/register", {
                username: username,
                email: email,
                password: password,
                confirmation_password: passwordConfirmation
            });
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                navigate("/login")
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/send-otp', {
                email: email
            });
            if (response.data.status === 'success') {
                successMsg(response.data.message);
                form.current.reset();
            }
        } catch (error) {
            if (error.response.status === 500) {
                warningMsg("Warning don't try again!Something wrong")
                form.current.reset();
            } else {
                setErrors(error.response.data.errors);
                form.current.reset();
            }
        }
    }

    const changePassword = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: email,
                password: password,
                confirmation_password: passwordConfirmation
            }
            const response = await axiosClient.post('/reset-password', payload);
            if (response.data.status === 'success') {
                successMsg(response.data.message)
                navigate("/login")
            }
        } catch (error) {
            if (error.response.data.errors.password) {
                setPasswordErrorhandle(true)
            }
            if (error.response.data.errors.confirmation_password) {
                setPasswordConfirmationErrorhandle(true)
            }
            setErrors(error.response.data.errors);
        }
    }

    return {
        setUserName,
        setEmail,
        setPassword,
        setPasswordConfirmation,
        sginUp,
        errors,
        password,
        passwordConfirmation,
        sendEmail,
        form,
        signIn,
        changePassword,
        passwordErrorhandle,
        setPasswordErrorhandle,
        passwordConfirmationErrorhandle,
        setPasswordConfirmationErrorhandle
    }
}

export default AuthContext;
