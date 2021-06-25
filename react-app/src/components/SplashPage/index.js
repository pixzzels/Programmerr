import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { loadServices } from '../../store/service';
import ServiceCard from '../ServiceCard';
import LoginFormModal from '../LoginFormModal';
import "./SplashPage.css"

function SplashPage() {

    const dispatch = useDispatch();

    const services = useSelector(state => state.service.services)

    useEffect(() => {
        dispatch(loadServices())
    }, [dispatch])

    const [showJesse, setShowJesse] = useState(1)
    const [showBrad, setShowBrad] = useState(0)
    const [showEunice, setShowEunice] = useState(0)
    const [showChris, setShowChris] = useState(0)


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        const changeBackground = setInterval(() => {

            let num = getRandomInt(4)
            if (num === 0) {
                setShowChris(0)
                setShowBrad(0)
                setShowEunice(0)
                setShowJesse(1)
                return
            } else {
                setShowJesse(0)
            }
            if (num === 1) {
                setShowChris(0)
                setShowJesse(0)
                setShowEunice(0)
                setShowBrad(1)
                return
            } else {
                setShowBrad(0)
            }
            if (num === 2) {
                setShowChris(0)
                setShowBrad(0)
                setShowJesse(0)
                setShowEunice(1)
                return
            } else {
                setShowEunice(0)
            }
            if (num === 3) {
                setShowBrad(0)
                setShowJesse(0)
                setShowEunice(0)
                setShowChris(1)
                return
            } else {
                setShowChris(0)
            }
        }, 3000);

        return function cleanup() {
            clearInterval(changeBackground)
        }
    }, [showJesse, showBrad, showEunice, showChris])

    // useEffect(() => {
    //     const jesse = setTimeout(() => {
    //         setShowChris(0)
    //         setShowBrad(0)
    //         setShowEunice(0)
    //         setShowJesse(1)
    //     }, 3000)

    //     const brad = setTimeout(() => {
    //         setShowChris(0)
    //         setShowEunice(0)
    //         setShowJesse(0)
    //         setShowBrad(1)
    //     }, 6000)

    //     const chris = setTimeout(() => {
    //         setShowEunice(0)
    //         setShowJesse(0)
    //         setShowBrad(0)
    //         setShowChris(1)
    //     }, 9000)

    //     return function cleanup() {
    //         clearInterval(jesse)
    //         clearInterval(brad)
    //         clearInterval(chris)

    //     }
    // })



    if (!services) return null

    const setHeroContent = (name, description) => {
        return (
            <>
                <div className="hero-container-side">
                    <p style={{ fontSize: "48px" }}><b>Find the perfect </b><i style={{ fontFamily: "DomaineDisplay" }}>freelance</i> <b>coding <br></br>services for your business</b></p>
                    <div style={{ display: "flex", alignItems: "center" }}>

                        {/* <input
                        className="search-bar"
                        type='search'
                        placeholder='Try "web development"'>
                    </input> */}
                        {/* <button className="search-icon">
                        Search
                    </button> */}
                    </div>
                    <div className="hero-description">
                        <div><b>{name}</b></div>
                        <div><i>{description}</i></div>
                    </div>
                </div>
            </>
        )
    }
    // let component =
    //     <>
    //         <div className="hero-container-side">
    //             <p style={{ fontSize: "48px" }}><b>Find the perfect </b><i style={{ fontFamily: "DomaineDisplay" }}>freelance</i> <b>coding <br></br>services for your business</b></p>
    //             <div style={{ display: "flex", alignItems: "center" }}>
    //                 {/* <input
    //                     className="search-bar"
    //                     type='search'
    //                     placeholder='Try "web development"'>
    //                 </input> */}
    //                 {/* <button className="search-icon">
    //                     Search
    //                 </button> */}
    //             </div>
    //         </div>
    //     </>
    return (


        <>
            <div className="main-wrapper">
                <div>

                    <nav className="navbar-container sticky" style={showJesse === 1 ? { backgroundColor: "#5880a5" } : showBrad === 1 ? { backgroundColor: "#58a581" } : showEunice === 1 ? { backgroundColor: "#a5587c" } : showChris === 1 ? { backgroundColor: "#6356a0" } : {}}>
                        <div className="navbar__header">

                            <div className="navbar__logo">
                                <NavLink className="navbar__logo-name-splash" to={`/`}>Programmerr</NavLink>
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
                            {setHeroContent("Wong, Jesse", "Lead Instuctor, Mentor")}
                            <img src="https://i.ibb.co/YpDzKRp/IMG-0984.png" alt="jesse image"></img>

                        </div>
                        <div className={"hero brad " + (showBrad == 0 ? "hidden" : "")} style={{ backgroundColor: "#58a581", opacity: showBrad }}>
                            {setHeroContent("Simpson, Brad", "Mentor, Advisor, Supporter")}
                            <img src="https://i.ibb.co/6BwG9ZF/IMG-0989.png" alt="brad image"></img>
                        </div>
                        <div className={"hero eunice " + (showEunice === 0 ? "hidden" : "")} style={{ backgroundColor: "#a5587c", opacity: showEunice }}>
                            {setHeroContent("Park, Eunice", "Sister, Supporter")}
                            <img src="https://i.ibb.co/q0vzrG6/IMG-0987.png" alt="eunice image"></img>
                        </div>
                        <div className={"hero chris " + (showChris === 0 ? "hidden" : "")} style={{ backgroundColor: "#6356a0", opacity: showChris }}>
                            {setHeroContent("Oney, Chris", "Mentor, Advisor, Supporter")}
                            <img src="https://i.ibb.co/vxx79jv/IMG-1081.png" alt="chris image"></img>
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