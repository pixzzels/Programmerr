import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ service }) {

    if (!service) return null;
    if (!service.reviews[0]) return null;
    // console.log(service.webpackage)

    // console.log(service.reviews[0].score)
    return (
        <>
            <div className="card-wrapper">
                <div className="card-layout">

                    <NavLink className="card__link" to={`/service/${service.id}`}>
                        <img className="card__listing_img" src={service.listing_img}></img>
                    </NavLink>
                    <div className="card__user-info">
                        <img className="card__user-image" src={service.user.profile_img}></img>
                        <NavLink className="card__link" to={`/profile/${service.user.id}`}>
                            <div className="card__user-username">{service.user.username}</div>
                        </NavLink>

                    </div>
                    <NavLink className="card__link" to={`/service/${service.id}`}>
                        <div className="card__service-title" >{service.title}</div>
                    </NavLink>

                    <div className="card__service-rating">
                        <i className="fas fa-star"></i>
                        {" " + service.reviews[0].score.toFixed(1)}
                    </div>
                    <footer className="card-footer">
                        <i className="fas fa-heart" style={{ color: "#c5c5c5" }}></i>
                        <div>
                            <span className="card__service-price-static">STARTING AT</span>
                            <span className="card__service-price">$80</span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;

