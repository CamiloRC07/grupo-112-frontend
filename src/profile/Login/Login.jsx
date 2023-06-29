import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login(){
    let redirect = useNavigate();
    const handleSubmit = (e) => {
        redirect("/");
    };

    return (
        <>
            <h1 className="title-font">Log in</h1>
            <div className="login-content">
                <div className="form-box">
                    <form  method="post">
                        <div className="username-box">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="pass-box">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <button onClick={handleSubmit} className="log-in-button">Log in</button>
                    </form>
                <a href="" className="sing-up-link">¿No tienes una cuenta? Crea una aquí.</a>
                </div>
            </div>
        </>
    )
}