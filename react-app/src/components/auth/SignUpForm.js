import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { signUp } from '../../store/session'
import './LoginSignup.css'


function SignupForm({ handleClick }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            //   setErrors([]);
            await dispatch(sessionActions.signUp(username, email, password))
            // .catch(async (res) => {
            //   const data = await res.json();
            //   if (data && data.errors) setErrors(data.errors);
            // });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    if (sessionUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <form className='modalForm' onSubmit={handleSubmit}>
                <div className='login-register'>
                    <h1>Join Programmerr!</h1>
                </div>
                <ul className='errors-list'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className='login-container'>
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-signup-submit-btn">Continue</button>
                <footer className="login-signup-footer">
                    Already a member? <button className="login-signup-switch-btn" type="button" onClick={handleClick}>Sign in</button>
                </footer>
            </form>
        </>
    );
}

export default SignupForm;