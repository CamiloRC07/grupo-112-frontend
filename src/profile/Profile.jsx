import './Profile.css'
import { useContext, useEffect, useState } from "react"
import LogOutButton from "./log-out/LogOutButton"
import { AuthContext } from "../auth/AuthContext"
import AlertMessage from "../common/alert-message/AlertMessage";
import axios from "axios";
import API_URL from "../common/config";

function Profile() {

    const { status, token, alertMessage } = useContext(AuthContext);
    const [user, setUser] = useState({});

    const getUserInfo = () => {
        const config = {
            method: 'get',
            url: `${API_URL}/users/find/me`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios(config)
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => getUserInfo(), [])

    return (
        <div className="perfil-content">
            <AlertMessage message={alertMessage}></AlertMessage>
            <h1>Perfil de usuario</h1>
            {status &&
                <div className="perfil-in">
                    <p>Hola, {user.name}!</p>
                    <p>Estas logeado</p>
                    <LogOutButton/>
                </div>
            }
            {!status && 
                <div className="perfil-out">
                    <p>Para ver el perfil debe estar logeado</p>
                    <a href="/login">Iniciar sesión </a>
                    <a href="/register">Crear cuenta</a>
                </div>
            }
        </div>
    )
}

export default Profile