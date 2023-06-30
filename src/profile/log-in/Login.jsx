import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../common/config";
import { AuthContext } from "../../auth/AuthContext";

export default function Login(){

    const { token, setToken } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-content">
            <form onSubmit={event => {
                event.preventDefault();


                console.log(`email: ${email}, contra: ${password}`);
                axios.post(`${API_URL}/auth/login`, {
                    mail: email,
                    password: password
                })
                  .then((response) => {
                    // no hay error
                    console.log(response.data.acces_token);
                    const acces_token = response.data.acces_token;
                    setToken(acces_token);
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
            <a href="" className="sing-up-link">¿No tienes una cuenta? Crea una aquí.</a>
        </div>
    )
}