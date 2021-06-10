import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import NavBar from '../NavBar';

import './NewService.css';

function NewService() {
    const dispatch = useDispatch()

    const [content, setContent] = useState('overview')


    return (
        <>
            <NavBar showCategory={false} />
            <div className="new-service__navbar-wrapper">

                <nav className="new-service__navbar">
                    <div className="new-service__navbar-list" onClick={() => setContent('overview')}
                    >Overview
                        </div>
                    <div className="new-service__navbar-list" onClick={() => setContent('pricing')}
                    >Pricing</div>
                    <div className="new-service__navbar-list" onClick={() => setContent('description')}
                    >Description & FAQ</div>
                    <div className="new-service__navbar-list" onClick={() => setContent('requirements')}
                    >Requirements</div>
                </nav>

                <div className="new-service__overview-wrapper">
                    <div className="new-service__header-overview">Overview</div>
                    <div className="new-service__overview-content">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewService;