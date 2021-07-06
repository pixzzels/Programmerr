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
                    <a className="footer-flex set-width" href="https://www.linkedin.com/in/ellen-park-2b32a9172/">
                        <p>Linkedin</p>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="footer-flex set-width" href="https://github.com/pixzzels/Programmerr">
                        <p>Github</p>
                        <i className="fab fa-github-square"></i>
                    </a>
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