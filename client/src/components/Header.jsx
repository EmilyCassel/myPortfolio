function Header() {
    return (
        <header className="header">
            <h1><a className="myName" >Emily Cassel</a></h1> 
            <nav className="homePageLinks">
                <h2><a className="mainLink" href="/">Home</a></h2>
                <h2><a className="mainLink" href="/Resume">Resume</a></h2>
                <h2><a className="mainLink" href="/AboutMe">About Me</a></h2>
                <h2><a className="mainLink" href="/Portfolio">Projects</a></h2>
                <h2><a className="mainLink" href="/Contact">Contact</a></h2>
            </nav>
        </header>
    )
}

export default Header;
