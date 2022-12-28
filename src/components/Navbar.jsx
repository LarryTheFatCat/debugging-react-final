import '../components/Navbar.css'
import NavBarLogo from '../assets/LogoMaker-removebg-preview.svg'

const RefreshIcon = () => {
    window.location.reload(false);
}

export const Navbar = () => {
    return (
        <div className="navContainer" id="navbar-main">
            <nav className="nav nav-main">
                <ul className="nav-list">
                    <img className="nav nav-image" src={NavBarLogo} alt="navigationbar icon display" onClick={RefreshIcon} />
                    <li className="nav nav-home" onClick={RefreshIcon}> Home </li>
                    <li className="nav nav-about" onClick={RefreshIcon}>About Me</li>
                    <li className="nav nav-contacts" onClick={RefreshIcon}>Contacts</li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;