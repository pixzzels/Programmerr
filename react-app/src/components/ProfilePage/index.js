import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import {
    loadUser, updateTagline, updateDescription, addLanguage, loadUserLanguages,
    deleteUserLanguage, addSkill, loadSkills, deleteUserSkill
} from '../../store/user'
import { loadUserOwnedServices, setServicePublish, deleteService } from '../../store/service';
import { loadLanguages } from '../../store/language'
import NavBar from '../NavBar';
import UserServiceCard from '../UserServiceCard';
import './ProfilePage.css';

function SingleSkill({ skill }) {
    const dispatch = useDispatch();
    const handleSkillDelete = (id) => {
        dispatch(deleteUserSkill(id))
    }

    if (!skill) return null

    return (
        <>
            <div className="info-card__skill-single" key={skill.id}>
                <p className="profile">{skill.name}  {" - "} </p>
                <p style={{ color: "#9a9ca1", paddingLeft: "5px" }}>{skill.level} </p>
                <form>
                    <input className="hidden"></input>
                    <i className="fas fa-trash-alt hidden"
                        value={skill.id}

                        onClick={() => {
                            // setLanguageId(language.id)
                            handleSkillDelete(skill.id)
                        }}
                    ></i>

                </form>
            </div>
        </>
    )
}

function SingleLanguage({ language }) {
    const dispatch = useDispatch();
    const handleLanguageDelete = (id) => {
        dispatch(deleteUserLanguage(id))
    }

    if (!language) return null

    return (
        <>
            <div className="info-card__language-single" key={language.id}>
                {language.language &&
                    <p className="profile" >{language.language.name}  {" - "} </p>
                }
                <p className="profile" style={{ color: "#9a9ca1", paddingLeft: "5px" }}>{language.level} </p>
                <form>
                    <input className="hidden"></input>
                    <i className="fas fa-trash-alt hidden"
                        value={language.id}

                        onClick={() => {
                            handleLanguageDelete(language.id)
                        }}
                    ></i>

                </form>
            </div>
        </>
    )
}

function ProfilePage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const userProfile = useSelector(state => state.user.profile)
    const userLanguages = useSelector(state => state.user.languages)
    const userSkills = useSelector(state => state.user.skills)
    const userOwned = useSelector(state => state.service.userServices)


    const languages = useSelector(state => {
        const lang = Object.values(state.language)
        return lang[0];
    })

    const [deleteVerify, setDeleteVerify] = useState(false);
    const [serviceId, setServiceId] = useState();

    const [active, setActive] = useState(true);

    const [showTaglineDD, setShowTaglineDD] = useState(false);
    const [showDescriptionDD, setShowDescriptionDD] = useState(false);
    const [showLanguageDD, setShowLanguageDD] = useState(false);
    const [showSkillDD, setShowSkillDD] = useState(false);
    // const [showEduDD, setShowEduDD] = useState(false);


    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState();
    const [languageLevel, setLanguageLevel] = useState('');
    const [skill, setSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('');

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setDeleteVerify(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    // const [edu, setEdu] = useState('');
    const userId = user.id


    useEffect(() => {
        dispatch(loadUser(userId))
    }, [dispatch, userId])

    useEffect(() => {
        dispatch(loadLanguages())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadUserLanguages(userId))
    }, [dispatch, userId])

    useEffect(() => {
        dispatch(loadSkills(userId))
    }, [dispatch, userId])

    useEffect(() => {
        dispatch(loadUserOwnedServices(userId))
    }, [dispatch, userId, userOwned])


    const handleUpdateTagline = (e) => {
        e.preventDefault();
        setShowTaglineDD(false);
        if (tagline === '') {
            return
        };
        dispatch(updateTagline({ tagline, userId }));
    };

    const handleDescriptionSubmit = (e) => {
        e.preventDefault();
        setShowDescriptionDD(false)
        if (description === '') {
            return
        };
        dispatch(updateDescription({ userId, description }));
    };

    const handleLanguageSubmit = (e) => {
        e.preventDefault();
        setShowLanguageDD(false);
        const language_id = parseInt(language);
        dispatch(addLanguage({ language_id, languageLevel, userId }));
        // console.log("language", language, "level", languageLevel)
    };


    const handleSkillSubmit = (e) => {
        e.preventDefault();
        setShowSkillDD(false);
        dispatch(addSkill({ skill, skillLevel, userId }))
    };

    const openDeleteVerification = (serviceId) => {
        setDeleteVerify(true)
        setServiceId(serviceId)
    }

    const handleDeactivateService = () => {
        const publish = false;
        // console.log(serviceId)
        dispatch(setServicePublish({ publish, serviceId }))
        setDeleteVerify(false)
    }

    const handelDeleteService = () => {
        dispatch(deleteService(serviceId))
    }

    if (!languages) return null;
    if (!userProfile) return null;
    if (!userLanguages) return null;
    if (!userSkills) return null;
    if (!userOwned) return null;


    return (
        <>
            <div className="main-profile-wrapper">
                <NavBar />

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="main-profile-container">

                        <div className="profile-container-left">
                            <div className="profile-card">
                                <div className="profile-card__image-container">
                                    <img className="profile-card__image" src={userProfile.profile_img} alt="profile image"></img>
                                </div>
                                <div className="profile-card__tagline-container">
                                    <div className="bold" style={{ fontSize: "20px", marginBottom: "10px" }}>{userProfile.username}</div>
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


                                    <div className="profile-card__member-since">
                                        <div>Member Since:</div>
                                        <div className="bold">{(userProfile.date_created).slice(7, -13)}</div>
                                    </div>
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
                                        <p className="profile">{userProfile.description}</p>
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

                                <div className="info-card__language info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Lanugages</span>
                                        <div className="tooltip-lang hidden">You can make up to 4 selections.</div>
                                        <button className="info-card-show-form-btn" type="button"
                                            style={showLanguageDD ? { visibility: "hidden" } : {}}
                                            onClick={() => setShowLanguageDD(true)}
                                        >Add New</button>

                                    </div>

                                    {!showLanguageDD && userLanguages &&
                                        <>
                                            {userLanguages.map((language) => {
                                                return (
                                                    <SingleLanguage language={language} />
                                                )
                                            })}
                                        </>
                                    }

                                    <section>
                                        {showLanguageDD && userLanguages &&
                                            <>
                                                <div className="profile-info__language-form-wrapper">
                                                    <form onSubmit={handleLanguageSubmit}>
                                                        <select
                                                            className="profile-info__language-input"
                                                            placeholder={!userProfile.description ? "Please tell us about any hobbies, additional expertise, or anything else you'd like to add." : userProfile.description}
                                                            onChange={(e) => setLanguage(e.target.value)}
                                                            required
                                                        >
                                                            <option value="" defaultValue>Select a Language</option>

                                                            {languages.map((language) => {
                                                                return (
                                                                    <option value={language.id} key={language.id}>{language.name}</option>
                                                                )
                                                            })}
                                                        </select>
                                                        <select required
                                                            className="profile-info__language-input"
                                                            onChange={(e) => setLanguageLevel(e.target.value)}
                                                        >
                                                            <option value="" defaultValue>Language Level</option>
                                                            <option value="Basic">Basic</option>
                                                            <option value="Conversational">Conversational</option>
                                                            <option value="Fluent">Fluent</option>
                                                            <option value="Native/Bilingual">Native/Bilingual</option>
                                                        </select>
                                                        <footer className="profile-info__button-container">
                                                            <button className="profile-info__cancel-btn" type="button" onClick={() => setShowLanguageDD(false)}>Cancel</button>
                                                            <button className="profile-info__submit-btn" type="submit">Add</button>
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
                                        <button className="info-card-show-form-btn" type="button"
                                            style={showSkillDD ? { visibility: "hidden" } : {}}
                                            onClick={() => setShowSkillDD(true)}
                                        >Add New</button>

                                    </div>
                                    {!showSkillDD &&
                                        <>
                                            {userSkills.map((skill) => {
                                                return (
                                                    <SingleSkill skill={skill} />
                                                )
                                            })}
                                        </>
                                    }

                                    <section>
                                        {showSkillDD &&
                                            <>
                                                <div className="profile-info__skills-form-wrapper">
                                                    <form onSubmit={handleSkillSubmit}>
                                                        <input
                                                            className="profile-info__skill-input"
                                                            type="text"
                                                            placeholder={"Add Skill (E.G. Web Design, Javascript)"}
                                                            onChange={(e) => setSkill(e.target.value)}
                                                        >
                                                        </input>
                                                        <select required
                                                            className="profile-info__skill-input"
                                                            onChange={(e) => setSkillLevel(e.target.value)}
                                                        >
                                                            <option value="" defaultValue>Experience Level</option>
                                                            <option value="Beginner">Beginner</option>
                                                            <option value="Intermediate">Intermediate</option>
                                                            <option value="Expert">Expert</option>
                                                        </select>
                                                        <footer className="profile-info__button-container">
                                                            <button className="profile-info__cancel-btn" type="button" onClick={() => setShowSkillDD(false)}>Cancel</button>
                                                            <button className="profile-info__submit-btn" id="skill-add-btn" type="submit" >Add</button>
                                                        </footer>
                                                    </form>
                                                </div>
                                            </>
                                        }
                                    </section>
                                </div>

                                {/* <div className="info-card__occupation info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Education</span>
                                        <div className="tooltip hidden">Describe your educational background. It will help buyers get to know you!</div>

                                        <button className="info-card-show-form-btn" type="button">Add New</button>

                                    </div>
                                </div> */}


                            </div>

                        </div>

                        <div className="profile-container-right">
                            {userOwned.length < 1 &&
                                <div className="profile-container-right-header">
                                    <p className="profile">It looks like you don't have any active Gigs. Get selling!</p>
                                    <NavLink to="/new-service">
                                        <button className="profile-container-create-new-service">Create a New Gig</button>
                                    </NavLink>
                                </div>
                            }
                            {userOwned &&
                                <>
                                    <div className="profile-container-right-services-headers">
                                        <div className="profile-container-right-services-header"
                                            style={active ? { marginRight: "35px", color: "#1DBF73", borderBottom: "3px solid #1DBF73" } : { marginRight: "35px" }}
                                            onClick={() => setActive(true)}
                                        >ACTIVE GIGS</div>
                                        <div className="profile-container-right-services-header"
                                            style={!active ? { color: "#1DBF73", borderBottom: "3px solid #1DBF73" } : {}}
                                            onClick={() => setActive(false)}
                                        >DRAFTS</div>
                                    </div>
                                    <div className="profile-services-container">
                                        {deleteVerify &&
                                            <div ref={ref} className="deleteVerify-container">
                                                <p>Are you sure you want to delete your service? It will delete all associated information including reviews.</p>
                                                <p>Did you want to deactivate it instead? It will prevent buyers from requesting your service, but will preserve all your data.</p>
                                                <div className="deleteVerify-btn-container">
                                                    <button type="button" className="deleteVerify-btn" onClick={handleDeactivateService}>DEACTIVATE</button>
                                                    <button type="submit" className="deleteVerify-delete-btn" onClick={handelDeleteService}>DELETE</button>
                                                    <button type="button" className="deleteVerify-btn" onClick={() => setDeleteVerify(false)}>CANCEL</button>
                                                </div>
                                            </div>
                                        }
                                        {active &&
                                            <div className="profile-services">
                                                {userOwned.map((service) => {
                                                    if (service.publish === true) {
                                                        return (
                                                            <UserServiceCard service={service} openDeleteVerification={openDeleteVerification} />
                                                        )
                                                    }
                                                })}
                                                <NavLink className="card__link" to="/new-service">
                                                    <div className="user-service-card-wrapper">
                                                        <div className="user-service-card-layout">
                                                            <div className="create-new-gig-card-container">
                                                                <button type="button" className="plus-btn">+</button>
                                                                <h3 className="create-new-gig-card-text">Create A New Gig</h3>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        }
                                        {!active &&
                                            <div className="profile-services">
                                                {userOwned.map((service) => {
                                                    if (service.publish === false) {
                                                        return (
                                                            <UserServiceCard service={service} openDeleteVerification={openDeleteVerification}/>
                                                        )
                                                    }
                                                })}
                                                <NavLink className="card__link" to="/new-service">
                                                    <div className="user-service-card-wrapper">
                                                        <div className="user-service-card-layout">
                                                            <div className="create-new-gig-card-container">
                                                                <button type="button" className="plus-btn">+</button>
                                                                <h3 className="create-new-gig-card-text">Create A New Gig</h3>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        }
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;