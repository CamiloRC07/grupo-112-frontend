import './Register.css'
import { useEffect, useState } from "react";
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Register() {
    const [name, setName] = useState(['']);
    const [email, setEmail] = useState(['']);
    const [password, setPassword] = useState(['']);

    useEffect(() => {
        async function getUser() {
            try {
                console.log(BACKEND_URL);
                const response = await axios.get(`http://${BACKEND_URL}/users/Harrison Jones`);
                console.log(response);
                setUser(response.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getUser();
    }, []);
    
    return(
        <div className="landing-page">
            <form onSubmit={event => {
                event.preventDefault();

                const name = event.target.username.value;
                const email = event.target.email.value;
                const password = event.target.password.value;

                register(name, email, password);


            }}>
                <p>hola</p>
                <input
                    type="text"
                    name="username"
                    placeholder='Nombre'
                    value={name}
                    onChange={event => setName(event.target.value)}
                    autoComplete='off'
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    autoComplete='off'
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Contraseña'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button type="submit">Registrar usuario</button>
            </form>
        </div>
    )
}


const register = (name, email, password) => {
    if (name === 'test' && email === 'test@uc.cl' && password === 'test') {
        alert('Test correcto');
    } else {
        alert('Test fallado');
    }
}

export default Register