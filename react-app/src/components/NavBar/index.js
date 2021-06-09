import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { loadCategories } from '../../store/category';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'


function NavBar() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const categories = useSelector(state => state.category.categories)
    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch])

    const [showDropDown, setshowDropDown] = useState(false);
    const ref = useRef(null);


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setshowDropDown(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);


    return (
        <nav className="navbar-container-home">
            <div className="navbar__header-home">

                <div className="navbar__logo">
                    <NavLink className="navbar__logo-name-home" to={`/`}>Programmerr</NavLink>
                    <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                </div>

                <div className="navbar-buttons-home">
                    {/* <LogoutButton /> */}
                    <button className="profile-img-btn" onClick={() => setshowDropDown(!showDropDown)}><img src={user.profile_img}></img></button>
                </div>
                {showDropDown &&
                    <>
                        <div ref={ref} className="profile-drop-down-home">
                            <NavLink className="profile-drop-down__nav-link" to={`/profile/`}>Profile</NavLink>
                            {/* <NavLink className="profile-drop-down__nav-link"  to={`/users/${user.id}`}>Dashboard</NavLink> */}
                            {/* <NavLink className="profile-drop-down__nav-link"  to={`/users/${user.id}`}>Manage Requests</NavLink> */}
                            {/* <NavLink className="profile-drop-down__nav-link"  to={`/users/${user.id}`}>Post a Request</NavLink> */}
                            {/* <NavLink className="profile-drop-down__nav-link"  to={`/profile`} style={{borderTop:"1px solid #7A7D85"}}>Become a Seller</NavLink> */}
                            <LogoutButton />


                        </div>
                    </>
                }

            </div>
            <hr></hr>
            <div className="navbar__categories-home">
                {categories && categories.map((category => {
                    return (
                        <NavLink to={`/category/${category.id}`} className="navbar__category-home" key={category.id}>{category.name}</NavLink>
                    )

                }))

                }
            </div>
            <hr style={{marginBottom:"0px"}}></hr>
        </nav>
    );
}

export default NavBar;
