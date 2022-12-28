import '../components/Navbar.css'
import NavBarLogo from '../assets/LogoMaker-removebg-preview.svg'
import { Burger } from '@mantine/core';
import { useState } from 'react';

const RefreshIcon = () => {
    window.location.reload(false);
}

export const Navbar = () => {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';


    const OpenFunction = () => {
        setOpened(!opened);
    }
    
    return (
        <div className="navContainer" id="navbar-main">
            <nav className="nav nav-main">
                <Burger color='white' opened={opened} onClick={OpenFunction} title={title} />
                <img className="nav nav-image nav-list" src={NavBarLogo} alt="navigationbar icon display" onClick={RefreshIcon} />
                <ul className="nav-list">
                    <li className="nav nav-home nav-list" onClick={RefreshIcon}>
                        Contacts
                    </li>
                    <li className="nav nav-about nav-list" onClick={RefreshIcon}>
                        About Me
                    </li>
                    <li className="nav nav-contacts" onClick={RefreshIcon}>
                        Home
                    </li>
                </ul>
            </nav>
        </div>
    );
}


export default Navbar;