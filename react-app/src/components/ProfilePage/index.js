import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { loadUser, updateTagline } from '../../store/user'
import LogoutButton from '../auth/LogoutButton';
import './ProfilePage.css';

function ProfilePage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [showDropDown, setshowDropDown] = useState(false);
    const [showTaglineDD, setShowTaglineDD] = useState(false);
    const [tagline, setTagline] = useState('');
    const ref = useRef(null);
    const userId = user.id

    const userProfile = useSelector(state => {
        const profile = Object.values(state.user)
        return profile[0];
    })

    useEffect(() => {
        dispatch(loadUser(userId))
    }, [dispatch])


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

    const handleUpdateTagline = (e) => {
        e.preventDefault();
        setShowTaglineDD(false)
        if (tagline === '') {
            return
        }
        // console.log(tagline, userId)
        dispatch(updateTagline({ tagline, userId }))
    }

    if (!userProfile) return null
    console.log(userProfile.tag_line)


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
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="main-profile-container">

                    <div className="profile-container-left">
                        <div className="profile-card">
                            <div className="profile-card__image-container">
                                <img className="profile-card__image" src={user.profile_img}></img>
                            </div>
                            <div className="profile-card__tagline-container">
                                <div className="bold" style={{ fontSize: "20px", marginBottom: "10px" }}>{user.username}</div>
                                <div className={"profile-card__tagline " + (showTaglineDD === true ? "hidden" : "")}>{userProfile.tag_line}</div>
                                <i onClick={() => setShowTaglineDD(true)} className={"fas fa-pencil-alt " + (showTaglineDD === true ? "hidden" : "")}></i>
                                {showTaglineDD &&
                                    <>
                                        <div>
                                            <form onSubmit={handleUpdateTagline}>
                                                <input
                                                    className="tagline__input"
                                                    placeholder={userProfile.tag_line}
                                                    onChange={(e) => setTagline(e.target.value)}
                                                >
                                                </input>
                                                <footer className="tagline__button-container">
                                                    <button className="tagline__cancel-btn" type="button" onClick={() => setShowTaglineDD(false)}>Cancel</button>
                                                    <button className="tagline__submit-btn" type="submit">Update</button>
                                                </footer>
                                            </form>

                                        </div>
                                    </>
                                }
                            </div>
                            <div className="profile-card__member-since">
                                <div>Member Since:</div>
                                <div className="bold">{(user.date_created).slice(7, -13)}</div>
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