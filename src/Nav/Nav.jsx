import './Nav.css'

function Nav() {
    return (
        <nav className="navigation">
            <div className="container nav-inner">
                <a href="/">Главная</a>
                {/* <a href="#">Пункты обмена</a> */}
                <a href="/about">О нас</a>
            </div>
        </nav>
    )
}

export default Nav