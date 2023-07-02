import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import API_URL from "../common/config";
import axios from "axios";


function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token' || null));
    const [status, setStatus] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');

    function logout() {
        setToken(null);
    }

    function isAuthenticUser() {
        const config = {
            method: 'get',
            url: `${API_URL}/auth/protecteduser`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios(config)
            .then(response => {
                const message = response.data.message;
                if (message === 'User is authentic') {
                    setStatus(true);
                } else {
                    setStatus(false);
                }
            })
            .catch(error => {
                setStatus(false);
            })
    }

    useEffect(() => {
        localStorage.setItem('token', token);
        isAuthenticUser();
    }, [token])

    return (
        <AuthContext.Provider value={{token, status, alertMessage, setToken, setAlertMessage, logout, isAuthenticUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;