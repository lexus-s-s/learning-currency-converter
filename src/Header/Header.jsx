import './Header.css'
import Nav from '../Nav/Nav'

function Header() {
    return (
        <header className="site-header">
            <div className="header-top">
                <div className="container">
                    <a className="brand" href="#">React Lite Level</a>
                </div>
            </div>
            <Nav />
        </header>)
}
export default Header