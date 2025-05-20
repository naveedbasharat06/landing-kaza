import React from 'react'
import signUpRemove from "../../assets/img/sign-up-remove.png"
import footerLogo from "../../assets/footer-logo.png"
//import "./sign-up.css"

const Forgot = () => {
    return (
        <div>
            <div className="container w-100">
                <div
                    className="left-section"
                    style={{
                        backgroundImage: 'url(assets/img/sign-up-img.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="logo">
                        <img src={footerLogo} width="150px" />
                    </div>



                    <h2 className="tagline">Swap your place, explore the world</h2>
                </div>

                <div className="right-section">
                    <a href="index.html" className="look-around">
                        <img src={signUpRemove} width="29.84px" />
                    </a>

                    <div className="form-container">
                        <h1>Forgot password?</h1>
                        <p>No worries, we'll send you reset instructions.</p>

                        <form action="otp.html">

                            <div className="form-group text-center">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="evelyne@gmail.com" value="" />
                            </div>





                            <button type="submit" className="create-account-btn">Confirm</button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot