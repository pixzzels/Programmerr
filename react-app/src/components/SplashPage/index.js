import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from 'react-router-dom';
import { loadServices } from '../../store/service';
import NavBar from '../NavBar';
import ServiceCard from '../ServiceCard';
import LoginFormModal from '../LoginFormModal';
import "./SplashPage.css"

function SplashPage() {

    const dispatch = useDispatch();

    // const user = useSelector(state => state.session.user)
    const services = useSelector(state => state.service.services)

    useEffect(() => {
        dispatch(loadServices())
    }, [dispatch])


    
    const [showJesse, setShowJesse] = useState(1)
    const [showBrad, setShowBrad] = useState(0)
    const [showEunice, setShowEunice] = useState(0)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    useEffect(() => {
        const changeBackground = setInterval(() => {
            
            let num = getRandomInt(3)
            if (num === 0) {
                setShowJesse(1)
                setShowBrad(0)
                setShowEunice(0)
                return
            } else {
                setShowJesse(0)
            }
            if (num === 1) {
                setShowBrad(1)
                setShowJesse(0)
                setShowEunice(0)
                return
            } else {
                setShowBrad(0)
            }
            if (num === 2) {
                setShowEunice(1)
                setShowBrad(0)
                setShowJesse(0)
                return
            } else {
                setShowEunice(0)
            }
        }, 3000);
        
        return function cleanup() {
            clearInterval(changeBackground)
        }
    }, [showJesse, showBrad, showEunice])
    
    
    
    if (!services) return null
    
    let component =
    <>
            <div className="hero-container-side">
                <p style={{ fontSize: "48px" }}><b>Find the perfect </b><i style={{ fontFamily: "DomaineDisplay" }}>freelance</i> <b>coding <br></br>services for your business</b></p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        className="search-bar"
                        type='search'
                        placeholder='Try "web development"'>
                    </input>
                    <button className="search-icon">
                        Search
                    </button>
                </div>
            </div>
        </>
    return (


        <>
            <div className="main-wrapper">
                <div>

                    <nav className="navbar-container sticky" style={showJesse === 1 ? { backgroundColor: "#5880a5" } : showBrad === 1 ? { backgroundColor: "#58a581" } : showEunice === 1 ? { backgroundColor: "#a5587c" } : {}}>
                        <div className="navbar__header">

                            <div className="navbar__logo">
                                <span className="navbar__logo-name">Programmerr</span>
                                <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                            </div>

                            <div className="navbar-buttons">
                                <LoginFormModal />
                                <LoginFormModal text={"Join"} />
                            </div>

                        </div>
                        <div className="navbar__categories">

                        </div>
                    </nav>


                    <div className="heros">
                        <div className={"hero jesse " + (showJesse == 0 ? "hidden" : "")} style={{ backgroundColor: "#5880a5", opacity: showJesse }}>
                            {component}
                            {/* <img src="https://i.ibb.co/YpDzKRp/IMG-0984.png"></img> */}
                        </div>
                        <div className={"hero brad " + (showBrad == 0 ? "hidden" : "")} style={{ backgroundColor: "#58a581", opacity: showBrad }}>
                            {component}
                            {/* <img src="https://i.ibb.co/6BwG9ZF/IMG-0989.png"></img> */}
                        </div>
                        <div className={"hero eunice " + (showEunice === 0 ? "hidden" : "")} style={{ backgroundColor: "#a5587c", opacity: showEunice }}>
                            {component}
                            {/* <img src="https://i.ibb.co/q0vzrG6/IMG-0987.png"></img> */}
                        </div>
                    </div>

                </div>
                <div className="homepage_container">
                    <h3 style={{ paddingLeft: "18px" }}>Editors Picks'</h3>
                    <div className="services-container">
                        {services && services.map((service => {
                            return (
                                <ServiceCard service={service} key={service.id} />
                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage