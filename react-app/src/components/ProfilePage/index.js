import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './ProfilePage.css';

function ProfilePage() {

    const user = useSelector(state => state.session.user)
    const [showDropDown, setshowDropDown] = useState(false);
    const ref = useRef(null);



    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setshowDropDown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    return (
        <>
            <nav className="navbar-container sticky">
                <div className="navbar__header">

                    <div className="navbar__logo">
                        <span className="navbar__logo-name">Programmerr</span>
                        <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                    </div>

                    <div className="navbar-buttons">
                        {/* <LogoutButton /> */}
                        <button className="profile-img-btn" onClick={() => setshowDropDown(!showDropDown)}><img src={user.profile_img}></img></button>
                    </div>
                    {showDropDown &&
                        <>
                            <div ref={ref} className="profile-drop-down">
                                <NavLink className="profile-drop-down__nav-link" to={`/profile`}>Profile</NavLink>
                                {/* <NavLink className="profile-drop-down__nav-link"  to={`/users/${user.id}`}>Dashboard</NavLink> */}
                                {/* <NavLink className="profile-drop-down__nav-link"  to={`/users/${user.id}`}>Manage Requests</NavLink> */}
                                {/* <NavLink className="profile-drop-down__nav-link"  to={`/users/${user.id}`}>Post a Request</NavLink> */}
                                <NavLink className="profile-drop-down__nav-link" to={`/users/${user.id}`} style={{ borderTop: "1px solid #7A7D85" }}>Become a Seller</NavLink>
                                <LogoutButton />


                            </div>
                        </>
                    }

                </div>
                <div className="navbar__categories">

                </div>
            </nav>
            <h1>Profile Page!</h1>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="main-profile-container">

                    <div className="profile-container-left">
                        <div className="profile-card">
                            <div className="profile-card__image-container">
                                <img className="profile-card__image" src={user.profile_img}></img>
                            </div>
                            <div className="profile-card__tagline">
                                <span>{user.username}</span>
                                <span><i className="fas fa-pencil-alt"></i></span>
                            </div>

                        </div>
                        <div className="profile-info-card">

                        </div>

                    </div>

                    <div className="profile-container-right">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;