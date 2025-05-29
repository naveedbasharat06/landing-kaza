import React from 'react'
import signUpRemove from "../../assets/img/sign-up-remove.png"
// import {signup} from "../../apis/service"
//import "./sign-up.css"

const Signup = () => {


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
                        <img src="assets/img/image-footer-logo.png" alt='logo' width="150px" />
                    </div>
                    {/*               
              <!-- <div className="person-container" style="background: url(assets/img/sign-up-img.png);"> -->
                <!-- <img src="assets/img/sign-up-img.png" alt="Person with property cards" className="person-image"> -->
              <!-- </div> --> */}

                    <h2 className="tagline">Swap your place, explore the world</h2>
                </div>

                <div className="right-section">
                    <a href="index.html" className="look-around">
                        <img src={signUpRemove} width="29.84px" alt='signUp remove' />
                    </a>

                    <div className="form-container">
                        <h1>Create your<br /> account today!</h1>

                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Evelyne" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <div className="phone-input-container">
                                    <div className="country-code-dropdown">
                                        <button type="button" id="country-code-btn">+351</button>
                                        <div className="dropdown-content" id="country-dropdown">
                                            <div className="dropdown-item" data-code="+1">+1 (US/CA)</div>
                                            <div className="dropdown-item" data-code="+44">+44 (UK)</div>
                                            <div className="dropdown-item" data-code="+33">+33 (FR)</div>
                                            <div className="dropdown-item" data-code="+49">+49 (DE)</div>
                                            <div className="dropdown-item" data-code="+351">+351 (PT)</div>
                                            <div className="dropdown-item" data-code="+34">+34 (ES)</div>
                                            <div className="dropdown-item" data-code="+39">+39 (IT)</div>
                                        </div>
                                    </div>
                                    <input type="tel" id="phone" placeholder="Phone number" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Add your email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Choose password</label>
                                <div className="password-input-container">
                                    <input type="password" id="password" placeholder="Password" />
                                    <button type="button" id="toggle-password">
                                        <i data-lucide="eye"></i>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="create-account-btn">Create account</button>

                            <div className="divider">
                                <span>or</span>
                            </div>

                            <button type="button" className="google-btn">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=" alt="Google logo" />
                                Sign in with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup