import React from 'react';
import NavBar from '../NavBar';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import "./HomePage.css"

function HomePage() {
    return (
        <>
            <nav className="navbar-container sticky">
                <div className="navbar__header">

                    <div className="navbar__logo">
                        <span className="navbar__logo-name">Programmerr</span>
                        <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                    </div>

                    <div className="navbar-buttons">
                        <LoginFormModal />
                        <LoginFormModal text={"Join"} />
                        <LogoutButton />
                    </div>

                </div>
                <div className="navbar__categories">

                </div>
            </nav>
            <h1>Logged IN!</h1>
        </>
    )
}

export default HomePage;