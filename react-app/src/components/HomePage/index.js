import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from '../auth/LogoutButton';
import "./HomePage.css"

function HomePage() {

    const user = useSelector(state => state.session.user)
    console.log(user)
    return (
        <>
            <nav className="navbar-container sticky">
                <div className="navbar__header">

                    <div className="navbar__logo">
                        <span className="navbar__logo-name">Programmerr</span>
                        <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                    </div>

                    <div className="navbar-buttons">
                        <LogoutButton />
                        <button className="profile-img-btn"><img src={user.profile_img}></img></button>
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