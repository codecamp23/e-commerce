import { useState } from "react";

export const useStateContext = () => {
    const [user, _setUser] = useState(localStorage.getItem("user"));
    const [token, _setToken] = useState(localStorage.getItem("token"));
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }
    const setUser = (user) => {
        _setUser(user);
        if (user) {
            localStorage.setItem("user", user);
        } else {
            localStorage.removeItem("user");
        }
    }

    return {
        user,
        token,
        setUser,
        setToken
    }
}