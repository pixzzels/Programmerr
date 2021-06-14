import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ service }) {

    const [price, setPrice] = useState();
    const [review, setReview] = useState();

    // console.log(service)
    useEffect(() => {
        if (service) {
            if (service.web_package) {
                if (service.web_package.web_basic) {
                    setPrice(service.web_package.web_basic.price)
                }
            }
            if (service.reviews[0]) {
                setReview(service.reviews[0].score.toFixed(1))
            }
        }
    }, [service])

    if (!service) return null;
    // if (!service.reviews[0]) return null;

    return (
        <>
            <div className="card-wrapper">
                <div className="card-layout">

                    <NavLink className="card__link" to={`/service/${service.id}`}>
                        <img className="card__listing_img" src={service.listing_img} alt="service image"></img>
                    </NavLink>
                    <div className="card__user-info">
                        <img className="card__user-image" src={service.user.profile_img} alt="profile"></img>
                        <NavLink className="card__link" to={`/profile/${service.user.username}`}>
                            <div className="card__user-username">{service.user.username}</div>
                        </NavLink>

                    </div>
                    <NavLink className="card__link" to={`/service/${service.id}`}>
                        <div className="card__service-title" >{service.title}</div>
                    </NavLink>

                    <div className="card__service-rating">
                        {review &&
                            <>
                                < i className="fas fa-star"></i>
                                {review}
                            </>
                        }
                    </div>
                    <footer className="card-footer">
                        {/* <i className="fas fa-heart" style={{ color: "#c5c5c5" }}></i> */}
                        <i style={{ color: "#c5c5c5" }}></i>

                        <div>
                            <span className="card__service-price-static">STARTING AT</span>
                            <span className="card__service-price">${price}</span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;

