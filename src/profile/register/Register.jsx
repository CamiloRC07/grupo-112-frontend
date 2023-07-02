import './Register.css'
import { useContext, useState } from "react";
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';
import API_URL from '../../common/config';
import LetsPlayButton from '../../common/lets-play-button/LetsPlayButton';

function Register() {

    const { status, token, setToken } = useContext(AuthContext);
    const [name, setName] = useState(['']);
    const [email, setEmail] = useState(['']);
    const [password, setPassword] = useState(['']);
    
    return(
        <div className="signup-content">
            {!status && 
                <div className="to-signup">
                    <h2>Registrarse</h2>
                    <form onSubmit={event => {
                        event.preventDefault();

                        // const name = event.target.username.value;
                        // const email = event.target.email.value;
                        // const password = event.target.password.value;

                        console.log(`name: ${name} email: ${email}, contra: ${password}`);

                        const config = {
                            method: 'post',
                            url: `${API_URL}/auth/signIn`,
                            data: {
                                name: name,
                                mail: email,
                                password: password
                            }
                        }

                        axios(config)
                            .then(response => {
                                console.log('Soy response');
                                console.log(response.data.jwt)
                                const access_token = response.data.jwt.access_token;
                                setToken(access_token);
                            })
                            .catch(error => {
                                console.log('Soy error');
                                if (error.response.data) console.log(error.response.data);
                            })


                    }}>
                        <label>Nombre
                            <input
                                type="text"
                                name="username"
                                placeholder='Nombre'
                                value={name}
                                onChange={event => setName(event.target.value)}
                                autoComplete='off'
                            />
                        </label><br />
                        <label>Email:
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    autoComplete='off'
                            /></label><br />
                            <label>Password:
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Contraseña'
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                            </label><br />
                        <button type="submit">Registrar usuario</button>
                    </form>
                </div>}
            {status  && 
                <div className="signup-success">
                    <h1>Gracias por crear tu cuenta</h1>
                    <LetsPlayButton message={'Ahora puedes ir a jugar.'}></LetsPlayButton>
                </div>}
            
        </div>
    )
}

export default Register