import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/img/image-footer-logo.png'
import footerPng from '../../assets/img/line-footer.png'

const Footer = () => {
    return (
        <div>
            {/* <div className="line-bg">
            <img src={footerPng} alt='footer img'/>
        </div> */}
            <footer className="site-footer ">
                <div className="footer-links">
                    <img src={footerLogo} alt="KazaSwap logo" className="footer-logo" />
                    <div className="d-flex justify-content-around gap-100">
                        <Link to="/confidential" className="footer-link">Confidentiality</Link>
                        <Link to="/terms" className="footer-link">Terms of Use</Link>
                    </div>
                    <div className="footer-contact">
                        <a href="mailto:community@kazaswap.co" className="contact-email">community@kazaswap.co</a><br />
                    </div>
                </div>
                {/* <!-- <p className="made-by-text"><img src="assets/img/heart-img.png" width="18px"> Made by Friends</p>
        --> */}

            </footer></div>
    )
}

export default Footer