import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MultiPackageComponent.css';

function MultiPackageComponent({ basic, standard, premium }) {
    const dispatch = useDispatch();


    const [packageType, setPackageType] = useState(basic)

    const handleRequestService = (e) => {
        e.preventDefault()
    }

    return (
        <div>
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
                        <span style={{fontSize:"16px", fontWeight:"bold"}}>
                            {packageType.title}
                        </span>
                        <span style={{fontSize:"22px"}}>
                            {"$" + packageType.price}
                        </span>
                    </div>

                    
                </div>
            </form>
        </div>
    )
};

export default MultiPackageComponent;