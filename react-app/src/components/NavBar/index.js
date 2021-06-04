import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';

function NavBar() {
    return (
        <nav className="navbar-container">
            <div className="navbar__header">

                <div className="navbar__logo">
                    <span className="navbar__logo-name">Programmerr</span>
                    <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                </div>

                <div className="navbar-buttons">
                    <LoginFormModal />
                    <LoginFormModal text={"Join"}/>
                    <LogoutButton />
                </div>

            </div>
            <div className="navbar__categories">

            </div>
        </nav>
    );
}

export default NavBar;
