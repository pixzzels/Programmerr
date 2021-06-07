import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { loadUser, updateTagline, updateDescription } from '../../store/user'
import { loadLanguages } from '../../store/language'
import LogoutButton from '../auth/LogoutButton';
import './ProfilePage.css';

function ProfilePage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    // const languages = useSelector(state => state.session.user)
    // console.log(user)

    const [showDropDown, setshowDropDown] = useState(false);
    const [showTaglineDD, setShowTaglineDD] = useState(false);
    const [showDescriptionDD, setShowDescriptionDD] = useState(false);
    const [showLanguageDD, setShowLanguageDD] = useState(false);
    const [showSkillDD, setShowSkillDD] = useState(false);
    const [showEduDD, setShowEduDD] = useState(false);


    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('');
    const [skill, setSkill] = useState('');
    const [edu, setEdu] = useState('');


    const ref = useRef(null);
    const userId = user.id

    const userProfile = useSelector(state => {
        const profile = Object.values(state.user)
        return profile[0];
    })

    console.log(userProfile)

    useEffect(() => {
        dispatch(loadUser(userId))
    }, [dispatch])

    useEffect(() => {
        dispatch(loadLanguages())
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

    const handleDescriptionSubmit = (e) => {
        e.preventDefault();
        setShowDescriptionDD(false)
        if (description === '') {
            return
        }
        dispatch(updateDescription({ userId, description }))

    }

    if (!userProfile) return null
    // console.log(userProfile.tag_line)


    return (
        <>
            <div className="main-profile-wrapper">


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
                                <div className="info-card__description info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Description</span>
                                        <div className="tooltip hidden">Tell us more about yourself. Buyers are also interested in learning about you as a person.</div>
                                        <button className="info-card-show-form-btn" type="button"
                                            style={showDescriptionDD ? { visibility: "hidden" } : {}}
                                            onClick={() => setShowDescriptionDD(true)}
                                        > Edit Description </button>
                                    </div>

                                    {!showDescriptionDD &&
                                        <p>{userProfile.description}</p>
                                    }


                                    <section style={{ paddingTop: "10px", marginBottom: "20px" }}>
                                        {showDescriptionDD &&
                                            <>
                                                <div className="profile-info__description-form-wrapper">
                                                    <form onSubmit={handleDescriptionSubmit}>
                                                        <textarea
                                                            className="profile-info__description-input"
                                                            type="textarea"

                                                            placeholder={!userProfile.description ? "Please tell us about any hobbies, additional expertise, or anything else you'd like to add." : userProfile.description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        >
                                                        </textarea>
                                                        <footer className="profile-info__button-container">
                                                            <button className="profile-info__cancel-btn" type="button" onClick={() => setShowDescriptionDD(false)}>Cancel</button>
                                                            <button className="profile-info__submit-btn" type="submit">Update</button>
                                                        </footer>
                                                    </form>
                                                </div>
                                            </>
                                        }
                                    </section>
                                    <hr></hr>
                                    <span className="profile-info-line"></span>
                                </div>

                                <div className="info-card__languages info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Lanugages</span>
                                        <div className="tooltip hidden">You can make up to 4 selections.</div>
                                        <button className="info-card-show-form-btn" type="button"
                                            style={showLanguageDD ? { visibility: "hidden" } : {}}
                                            onClick={() => setShowLanguageDD(true)}
                                        >Add New</button>

                                    </div>
                                    <section>
                                        {showLanguageDD &&
                                            <>
                                                <div className="profile-info__description-form-wrapper">
                                                    <form onSubmit={handleDescriptionSubmit}>
                                                        <textarea
                                                            className="profile-info__description-input"
                                                            type="textarea"

                                                            placeholder={!userProfile.description ? "Please tell us about any hobbies, additional expertise, or anything else you'd like to add." : userProfile.description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        >
                                                        </textarea>
                                                        <footer className="profile-info__button-container">
                                                            <button className="profile-info__cancel-btn" type="button" onClick={() => setShowLanguageDD(false)}>Cancel</button>
                                                            <button className="profile-info__submit-btn" type="submit">Update</button>
                                                        </footer>
                                                    </form>
                                                </div>
                                            </>
                                        }
                                    </section>
                                </div>

                                <div className="info-card__skills info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Skills</span>
                                        <div className="tooltip hidden">Let your buyers know your skills. Skills gained through your previous jobs, hobbies, or even everyday life.</div>
                                        <button className="info-card-show-form-btn" type="button">Add New</button>

                                    </div>
                                </div>

                                <div className="info-card__occupation info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Education</span>
                                        <div className="tooltip hidden">Describe your educational background. It will help buyers get to know you!</div>

                                        <button className="info-card-show-form-btn" type="button">Add New</button>

                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="profile-container-right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;