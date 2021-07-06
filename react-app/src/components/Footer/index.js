import React from 'react';

import './Footer.css'

function Footer() {

    return (
        <>
            <div className="footer-container">
                <div style={{display:"flex"}}>
                    <div className="footer-flex">
                        <p>Developed by <b> Pixzzels</b></p>
                    </div>
                    <div className="footer-flex">
                        <p>Linkedin</p>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="footer-flex">
                        <p>Github</p>
                        <i className="fab fa-github-square"></i>
                    </div>
                </div>
                <div className="footer-flex">
                    <i className="far fa-copyright"></i>
                    <p>2021 Programmerr, Inc.</p>
                </div>
            </div>
        </>
    )
};

export default Footer;