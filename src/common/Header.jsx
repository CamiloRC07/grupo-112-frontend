import "./Header.css"

function Header() {
    return (
        <header>
            <div className="logo-header">
                <a href="/" className="pretty-font logo-colors">Conquer of Cathay</a>
                
            </div>
            <nav>
                <a href="/main-content" className="nav-link">Main content</a>
                <a href="/game" className="nav-link">Let's Play</a>
                <a href="/instructions" className="nav-link">Instructions</a>
                <a href="/about-us" className="nav-link">About us</a>
                <a href="/login" className="nav-link">Log in</a>
            </nav>
        </header>
    )
}

export default Header