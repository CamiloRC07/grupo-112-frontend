import { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import API_URL from "../../common/config";
import { AuthContext } from "../../auth/AuthContext";
import LetsPlayButton from "../../common/lets-play-button/LetsPlayButton";

export default function Login(){

    const { status, token, setToken } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [message, setMessage] = useState('');

    return (
        <div className="login-content">
            {!status && 
            <div className="to-login">
                <form onSubmit={event => {
                    event.preventDefault();


                    console.log(`email: ${email}, contra: ${password}`);
                    axios.post(`${API_URL}/auth/login`, {
                        mail: email,
                        password: password
                    })
                    .then((response) => {
                        // no hay error
                        console.log(response.data.access_token);
                        const access_token = response.data.access_token;
                        setToken(access_token);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                }}>
                    <label>Email:
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            autoComplete='off'
                    /></label>
                    <label>Password:
                        <input
                            type="password"
                            name="password"
                            placeholder='Contraseña'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </label>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <a href="/register" className="sing-up-link">¿No tienes una cuenta? Crea una aquí.</a>
            </div>}
            {status &&
                <div className="login-successful">
                    <p>Iniciaste sesión con éxito</p>
                    <LetsPlayButton message={'Ahora puedes ir a jugar.'}></LetsPlayButton>
                </div>
            }
        </div>
    )
}

// Log In
// Perfil