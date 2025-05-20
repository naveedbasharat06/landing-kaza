import React from "react";
import signUpRemove from "../../assets/img/sign-up-remove.png"
//import "./sign-up.css"

const OTP = () => {
    return (
        <div className="container w-100">
            <div
                className="left-section"
                style={{
                    backgroundImage: "url(assets/img/sign-up-img.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="logo">
                    <img src="assets/img/image-footer-logo.png" width="150px" alt="Logo" />
                </div>

                <h2 className="tagline">Swap your place, explore the world</h2>
            </div>

            <div className="right-section">
                <a href="index.html" className="look-around">
                    <img src={signUpRemove} width="29.84" alt="Close" />
                </a>

                <div className="form-container">
                    <h1>Enter verification code</h1>
                    <p>
                        <span style={{ opacity: 0.5 }}>We've sent a code to </span>
                        <span className="color-000">evelyne@gmail.com</span>
                    </p>

                    <form action="reset-pass.html">
                        <div className="form-group text-center">
                            <label htmlFor="otp">Verification code</label>
                            <div className="otp-field">
                                {/* Inputs must be self-closing */}
                                <input className="" type="text" maxLength={1} data-index="0" />
                                <input className="" type="text" maxLength={1} data-index="1" />
                                <input className="" type="text" maxLength={1} data-index="2" />
                                <input className="" type="text" maxLength={1} data-index="3" />
                            </div>
                        </div>

                        <button type="submit" className="create-account-btn">
                            Verify
                        </button>

                        <div className="dont-acc dont-acc-1">
                            <p>
                                <span style={{ opacity: 0.5 }}>Didn't get a code? </span>
                                <a href="otp.html" className="color-000">
                                    Click to resend
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTP;
