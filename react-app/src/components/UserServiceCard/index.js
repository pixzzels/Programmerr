import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './UserServiceCard.css';

function UserServiceCard({ service, openDeleteVerification = false }) {

    const [price, setPrice] = useState();
    const [review, setReview] = useState();

    const [showEditDD, setShowEditDD] = useState(false);


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


    return (
        <>
            <div className="user-service-card-wrapper">
                <div className="user-service-card-layout">

                    <NavLink className="card__link" to={`/service/${service.id}`}>
                        <img className="user-service-card__listing_img" src={service.listing_img} alt="service image"></img>
                    </NavLink>

                    <NavLink className="card__link" to={`/service/${service.id}`}>
                        <div className="user-service-card__service-title" >{service.title}</div>
                    </NavLink>

                    <div className="user-service-card__service-rating">
                        {review &&
                            <>
                                < i className="fas fa-star"></i>
                                {review}
                            </>
                        }
                    </div>
                    <footer className="user-service-card-footer">
                        <i className="fas fa-ellipsis-h service-card-edit-img-btn"
                            onClick={() => setShowEditDD(!showEditDD)}
                        ></i>

                        {showEditDD &&
                            <div style={{ color: "#1DBF73" }}>
                                <NavLink className="card__link" to={`/new-service/edit/${service.id}`}>
                                    <button className="user-service-card-edit-btn">Edit</button>
                                </NavLink>
                                <button className="user-service-card-edit-btn"
                                    onClick={() => {
                                        openDeleteVerification(service.id)
                                    }}>Delete</button>
                            </div>
                        }

                        {!showEditDD &&
                            <div style={{ color: "#1DBF73" }}>
                                <span className="card__service-price-static">STARTING AT</span>
                                <span className="card__service-price" style={{ fontWeight: 'bold' }}>${price}</span>
                            </div>
                        }
                    </footer>
                </div>
            </div>
        </>
    )
}

export default UserServiceCard;

