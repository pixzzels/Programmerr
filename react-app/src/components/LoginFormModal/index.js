import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Login from './Login';
import Signup from './Signup';
import './LoginFormModal.css'


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

    function changeBackground(e) {
        e.target.style.background = '#1DBF73';
    }

    function changeBackground2(e) {
        e.target.style.background = 'transparent';
    }

    return (
        <>
            {text === "Sign In" &&
                <button style={{
                    color: "white",
                    backgroundColor: "transparent",
                    border: "0px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginRight: "10px"
                }}
                onClick={onClick}
                >{text}
                </button>
            }

            {text === "Join" &&
                <button style={{
                    color: "white",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "7px 20px",
                    borderRadius: "3px",
                    marginRight: "10px"
                }}
                    onClick={onClick}
                    onMouseOver={changeBackground}
                    onMouseLeave={changeBackground2}
                >{text}
                </button>
            }

            {showModal && (
                component
            )}
        </>
    );
}

export default LoginFormModal;