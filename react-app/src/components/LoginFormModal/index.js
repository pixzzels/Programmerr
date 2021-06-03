import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Login from './Login';
import Signup from './Signup';
// import Button from '../Button';


function LoginFormModal({ text = 'Sign In' }) {
    const [showModal, setShowModal] = useState(false);

    // console.log(showModal)

    let component;
    if (text === "Sign In") {
        component =
            <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
                <Login />
            </Modal>
    }

    if (text === "Join") {
        component =
            <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
                <Signup />
            </Modal>
    }

    const onClick = () => {
        setShowModal(true)
    }

    return (
        <>
            {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
            <button onClick={onClick}>{text}</button>

            {showModal && (
                component
                // <>
                //     <div>hello</div>
                // <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
                //     <LoginSignupForm />
                // </Modal>
                // </>
            )}
        </>
    );
}

export default LoginFormModal;