import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';

function NavBar() {
    return (
        <nav className="navbar-container">
            <div className="navbar__header">

                <div className="navbar__logo">
                    <span className="navbar__logo-name">Programmerr</span>
                    <span><i className="fas fa-circle navbar__logo-dot"></i></span>
                </div>

                <div className="">
                    <LoginFormModal />
                </div>

            </div>
            <div className="navbar__categories">

            </div>
            {/* <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul> */}
        </nav>
    );
}

export default NavBar;
