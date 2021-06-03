import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginSignupForm from './LoginSignupForm';
// import Button from '../Button';


function LoginFormModal({ text = 'Log In' }) {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal)

    const onClick = () => {
        setShowModal(true)
    }

    return (
        <>
            {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
            <button onClick={onClick}>{text}</button>
            
            {showModal && (
                // <>
                //     <div>hello</div>
                    <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
                        <LoginSignupForm />
                    </Modal>
                // </>
            )}
        </>
    );
}

export default LoginFormModal;