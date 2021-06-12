import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { loadPublicUser } from '../../store/user'
import NavBar from '../NavBar';
import './PublicProfile.css';

function PublicProfile() {

    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user)
    const userProfiles = useSelector(state => state.user.publicProfile)
    // const userLanguages = useSelector(state => state.user.languages)
    // const userSkills = useSelector(state => state.user.skills)

    // const languages = useSelector(state => {
    //     const lang = Object.values(state.language)
    //     return lang[0];
    // })


    // const [edu, setEdu] = useState('');
    const { username } = useParams()
    // console.log(userProfile)
    
    useEffect(() => {
        dispatch(loadPublicUser(username))
    }, [dispatch])
    
    // useEffect(() => {
    //     dispatch(loadUserLanguages(userId))
    // }, [dispatch])
    
    // useEffect(() => {
    //     dispatch(loadSkills(userId))
    // }, [dispatch])
    
    if (!userProfiles) return null;
    const userProfile = userProfiles[0]
    if (!userProfile) return null;

    const userId = userProfile.id
    // if (!languages) return null;
    // if (!userLanguages) return null;
    // if (!userSkills) return null;
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
                                    <div className="profile-card__tagline">{userProfile.tag_line}</div>
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
                                    </div>

                                    <p className="profile">{userProfile.description}</p>
                                    <hr></hr>
                                    <span className="profile-info-line"></span>
                                </div>

                                <div className="info-card__language info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Lanugages</span>
                                    </div>

                                    {/* {userLanguages &&
                                        <>
                                            {userLanguages.map((language) => {
                                                return (
                                                    <>
                                                        <div className="info-card__language-single" key={language.id}>
                                                            {language.language &&
                                                                <p className="profile" >{language.language.name}  {" - "} </p>
                                                            }
                                                            <p className="profile" style={{ color: "#9a9ca1", paddingLeft: "5px" }}>{language.level} </p>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </>
                                    } */}
                                </div>

                                <div className="info-card__skills info-card">
                                    <div className="info-card__header">
                                        <span className="info-card__name">Skills</span>

                                    </div>
                                    {/* {userSkills.map((skill) => {
                                        return (
                                            <>
                                                <div className="info-card__skill-single" key={skill.id}>
                                                    <p className="profile">{skill.name}  {" - "} </p>
                                                    <p style={{ color: "#9a9ca1", paddingLeft: "5px" }}>{skill.level} </p>
                                                </div>
                                            </>
                                        )
                                    })} */}

                                </div>


                            </div>

                        </div>

                        <div className="profile-container-right">
                            <div className="profile-container-right-header">
                                <p className="profile">It looks like you don't have any active Gigs. Get selling!</p>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicProfile;