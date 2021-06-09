import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { loadService } from '../../store/service';


import './MultiPackageComponent.css';

function MultiPackageComponent({ basic, standard = false, premium = false }) {
    const dispatch = useDispatch();

    const [packageType, setPackageType] = useState(basic)

    const handleRequestService = (e) => {
        e.preventDefault()
    }

    return (
        <div className="packages-info-main">
            <div className="packages-info-headers">

                <div className={packageType.type === 'Basic' ? "packages-info-header-selected" : "packages-info-header"}
                    onClick={() => setPackageType(basic)}
                >Basic
                </div>

                <div className={packageType.type === 'Standard' ? "packages-info-header-selected" : "packages-info-header"}
                    onClick={() => setPackageType(standard)}
                >Standard
                </div>

                <div className={packageType.type === 'Premium' ? "packages-info-header-selected" : "packages-info-header"}
                    onClick={() => setPackageType(premium)}
                >Premium
                </div>

            </div>
            <form className="service-request-submit-form" onSubmit={handleRequestService}>
                <div className="service-request__content">

                    <div className="service-request__title-price">
                        <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                            {packageType.title}
                        </span>
                        <span style={{ fontSize: "22px" }}>
                            {"$" + packageType.price}
                        </span>
                    </div>
                    <p className="service-request__package-description">{packageType.description}</p>
                    <div className="service-request__additional-info">
                        <div style={{ display: "flex" }}>
                            <i className="far fa-clock" style={{ fontSize: "18px" }}></i>
                            <div style={{ marginLeft: "10px" }}>{" " + packageType.delivery_time + " Days Delivery"}</div>
                        </div>
                        <div style={{ marginLeft: "16px", display: "flex" }}>
                            <i className="fas fa-sync-alt" style={{ fontSize: "16px" }}></i>
                            <div style={{ marginLeft: "10px" }}>{" " + packageType.revisions + " Revisions"}</div>
                        </div>
                    </div>

                    <div className="service-request__features">
                        {console.log(packageType)}
                        <li className="service-request__feature">
                            <i className="fas fa-check" style={packageType.pages > 0 ? {color:"#1DBF73"} : {color:"#62646A"}}></i>
                            {packageType.pages + (packageType.pages === 1 ? " Page" : " Pages")}
                        </li>
                        <li className="service-request__feature">
                            <i className="fas fa-check" style={packageType.design_custom === true ? {color:"#1DBF73"} : {color:"#62646A"}}></i>
                            Design Customization
                        </li>
                        <li className="service-request__feature">
                            <i className="fas fa-check" style={packageType.content_upload === true ? {color:"#1DBF73"} : {color:"#62646A"}}></i>
                            Content Upload
                        </li>
                        <li className="service-request__feature">
                            <i className="fas fa-check" style={packageType.responsive_design === true ? {color:"#1DBF73"} : {color:"#62646A"}}></i>
                            Responsive Design
                        </li>
                        <li className="service-request__feature">
                            <i className="fas fa-check" style={packageType.source_code === true ? {color:"#1DBF73"} : {color:"#62646A"}}></i>
                            Include Source Code
                        </li>
                    </div>

                    <button className="service-request__submit-btn" type="submit">
                        {"Continue ($" + packageType.price + ")"}
                    </button>

                </div>
            </form>
        </div>
    )
};

export default MultiPackageComponent;