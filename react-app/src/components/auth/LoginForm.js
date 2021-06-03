import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from "../../store/session";
import './LoginSignup.css'

function LoginForm({ handleClick }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const data = await dispatch(sessionActions.login(email, password))
        if (data && data.errors) {
            setErrors(data.errors);
        };
    }

    const demoSubmit = (e) => {
        e.preventDefault();
        const email = 'demo@example.com'
        const password = 'password'
        return dispatch(sessionActions.login(email, password))
            .catch(async (res) => {
                const data = await res.json();
                // console.log(data)
                // if (data && data.errors) setErrors(data.errors);
            })
    }

    return (
        <>
            <form className='modalForm' onSubmit={handleSubmit}>
                <div className='login-register'>
                    <h1>Sign In to Programmerr</h1>
                </div>
                <ul className='errors-list'>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className='login-container'>
                    <label className='usernameLabel'>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className='passwordLabel'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-signup-submit-btn">Continue</button>
                <button onClick={demoSubmit} className="login-signup-submit-btn" type="button">Demo Log In</button>
                <footer className="login-signup-footer">
                    Not a member yet? <button className="login-signup-switch-btn" type="button" onClick={handleClick}>Join now</button>
                </footer>
            </form>
        </>
    );
}

export default LoginForm;