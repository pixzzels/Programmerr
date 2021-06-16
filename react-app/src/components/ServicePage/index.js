import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { loadService } from '../../store/service';
import LoginFormModal from '../LoginFormModal';
import MultiPackageComponent from '../MultiPackageComponent';
import NavBar from '../NavBar';
import './ServicePage.css'

function ServicePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const service = useSelector(state => state.service.service)
    const [review, setReview] = useState();
    // console.log(service)

    const { id } = useParams();

    // console.log(id)
    useEffect(() => {
        dispatch(loadService(id))
    }, [dispatch, id])

    useEffect(() => {
        if (service) {
            if (service.reviews) {
                setReview(service.reviews[0])
            }
        }

    }, [service])

    if (!service) return null;
    // if (!service.reviews[0]) return null;

    // console.log(service.reviews[0])

    let component;

    if (user) {
        component =
            <NavBar />

    } else {
        component =
            <nav className="navbar-container">
                <div className="navbar__header">

                    <div className="navbar__logo">
                        <NavLink className="navbar__logo-name-home" to={`/`}>Programmerr</NavLink>
                        <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                    </div>

                    <div className="navbar-buttons">
                        <LoginFormModal page={"service"} />
                        <LoginFormModal text={"Join"} page={"service"} />
                    </div>

                </div>
                <div className="navbar__categories">

                </div>
            </nav>
    }


    return (
        <>
            {component}
            <div className="service-page__navbar-wrapper">
                <nav className="service-page__navbar">
                    <ul >
                        <a className="service-page__navbar-list" name="#overview" href="#overview">Overview</a>
                        <a className="service-page__navbar-list" href="#description">Description</a>
                        <a className="service-page__navbar-list" href="#about-seller">About Seller</a>
                        <a className="service-page__navbar-list" href="#reviews">Reviews</a>

                    </ul>
                </nav>
            </div>
            <div className='service-page__wrapper'>
                <div className="service-page__main" id="overview">
                    <div className="service-page__overview">
                        <h1 className="service-page__title">{service.title}</h1>

                        <div className="service-page__seller-info">
                            <img className="seller-info__profile-img" src={service.user.profile_img} alt="profile image"></img>
                            <NavLink className="service-card__link" to={`/profile/${service.user.id}`}>
                                <div className="seller-info__seller-name">{service.user.username}</div>
                            </NavLink>
                            <p style={{ paddingLeft: "10px", color: "#ddd" }}>{"|"}</p>
                            {review &&
                                <div className="seller-info__review-score">
                                    <i className="fas fa-star"></i>
                                    {" " + review.score.toFixed(1)}
                                </div>
                            }
                        </div>


                    </div>

                    <div className="service-page__listing-img-container">
                        <img className="service-page__listing-img" src={service.listing_img} alt="service image"></img>

                    </div>

                    {review &&
                        <div className="service-page__review-snippet">
                            <h2 className="service-page__section-header">What people loved about this seller</h2>
                            <div className="service-page__review">
                                <div style={{ width: "32px" }}>
                                    <img className="review__profile_img" src={service.user.profile_img} alt="profile image"></img>

                                </div>
                                <div>
                                    <div className="review__owner-info">
                                        <span className="review__owner-username">{review.owner}</span>
                                        <div className="service-page__rating">
                                            <i className="fas fa-star" style={{ marginRight: "8px" }}></i>
                                            {" " + review.score.toFixed(1)}
                                        </div>
                                    </div>
                                    <div className="review__description" id="description">
                                        {review.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="service-page__info-container">
                        <h2 className="service-page__section-header">About This Service</h2>
                        <div className="service-page__description">{service.description}</div>
                        <div className="service-page__megadata">
                            <div style={{ color: "#95979D" }} id="about-seller">Programming Language</div>
                            {service.service_language.id != 1 &&
                                <div className="megadata__programming-language">{service.service_language.name}</div>
                            }
                        </div>
                    </div>


                    <div className="service-page__about-seller">
                        <h2 className="service-page__section-header">About The Seller</h2>
                        <div className="about-seller__info">
                            <img className="about-seller__profile_img" src={service.user.profile_img} alt="profile image"></img>
                            <div className="about-seller__details">
                                <NavLink className="service-card__link" to={`/profile/${service.user.id}`}>
                                    <div className="about-seller__seller-name">{service.user.username}</div>
                                </NavLink>
                                <div className="about-seller__tagline">
                                    {service.user.tag_line}
                                </div>
                                {review &&
                                    <div className="about-seller__review-score">
                                        <i className="fas fa-star"></i>
                                        {" " + review.score.toFixed(1)}
                                    </div>
                                }

                            </div>
                        </div>

                        <div className="about-seller__stats">
                            <div style={{ display: "flex", paddingBottom: "16px" }}>
                                <span style={{
                                    color: "#7A7D85",
                                }}>Memeber Since:
                                </span>
                                <span style={{
                                    paddingLeft: "10px",
                                    color: "#62646A",
                                    fontWeight: "bold"
                                }}>
                                    {(service.user.date_created).slice(7, -13)}
                                </span>
                            </div>
                            <div className="about-seller__stats-description">
                                {service.user.description}
                            </div>
                        </div>

                    </div>

                </div>

                <div className="service-page__packages-container">
                    {console.log(service)}
                    {service.id === parseInt(id) &&
                        <MultiPackageComponent
                            basic={service.web_package.web_basic}
                            standard={service.web_package.web_standard}
                            premium={service.web_package.web_premium}

                        />
                    }
                </div>
            </div>
        </>
    );
};

export default ServicePage;

