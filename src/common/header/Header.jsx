import { useContext } from "react"
import "./Header.css"
import { AuthContext } from "../../auth/AuthContext"


function Header() {

    const { status } = useContext(AuthContext);
    

    const isSessionOpen = () => {
        return status;
    }


    return (
        <header>
            <div className="logo-header">
                <a href="/" className="pretty-font logo-colors">Conquer of Cathay</a>
                
            </div>
            <nav>
                <a href="/main-content" className="nav-link">Main content</a>
                <a href="/game-rooms" className="nav-link">Let's Play</a>
                <a href="/instructions" className="nav-link">Instructions</a>
                <a href="/about-us" className="nav-link">About us</a>
                {!isSessionOpen() && <a href="/login" className="nav-link">Log in</a>}
                {isSessionOpen() && <a href="/profile" className="nav-link">Perfil</a>}
            </nav>
        </header>
    )
}

export default Header