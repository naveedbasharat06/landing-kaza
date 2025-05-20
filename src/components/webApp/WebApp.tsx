import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import appPage from '../../assets/img/app-page-img.png'
import barCode from '../../assets/img/barcode.png'
import mobBarCode from '../../assets/img/barcode-mob.png'
import appPage1 from "../../assets/img/app-page-bg.png"

const WebApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>


            <div className="section-padding app-section pb-82 d-block">
                <div
                    className="cta-video-wrapper bg-cover m-0 border-radius-none"
                    style={{
                        backgroundImage: `url(${appPage1})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <h2 className="app-page-heading">Search, swap, and <br />stay - all from your<br /> phone.</h2>
                                <div className="hide-on-mobile">
                                    <p className="app-page-des">Download Our App and start Exchange Homes</p>
                                    <div className="col-lg-12">
                                        <div className="btn-white inner-page-app mt-0 justify-content-start">
                                            <a href="#!" className="white">
                                                <svg
                                                    width="50"
                                                    height="50"
                                                    viewBox="-1.5 0 20 20"
                                                    fill="#000000"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M57.5709,7282.193 C58.3,7281.348 58.7914,7280.171 58.6569,7279 C57.6063,7279.04 56.3352,7279.671 55.5819,7280.515 C54.9054,7281.264 54.3148,7282.461 54.4736,7283.609 C55.6456,7283.696 56.8418,7283.039 57.5709,7282.193 Z" />
                                                </svg>

                                                <p>Download on the
                                                    App Store</p>
                                            </a>
                                            <a href="#!" className="d-flex align-items-center white">

                                                <svg
                                                    width="50"
                                                    height="50"
                                                    viewBox="-1.5 0 20 20"
                                                    fill="#000000"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M57.5709,7282.193 C58.3,7281.348 58.7914,7280.171 58.6569,7279 C57.6063,7279.04 56.3352,7279.671 55.5819,7280.515 C54.9054,7281.264 54.3148,7282.461 54.4736,7283.609 C55.6456,7283.696 56.8418,7283.039 57.5709,7282.193 Z" />
                                                </svg>

                                                <p>Get it on the
                                                    GooglePlay</p>
                                            </a>
                                        </div>
                                        <div className="barcode-img text-center">
                                            <img src={barCode} alt="barcode" width="155px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="app-img">
                                    <img src={appPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white new-sec-for-mobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">


                                <div className="barcode-img text-center">
                                    <img src={mobBarCode} alt="barcode" />
                                </div>
                                <p className="app-page-des">Download Our App and start <br /> Exchange Homes</p>
                                <div className="col-lg-8">
                                    <div className="btn-white inner-page-app mt-0 justify-content-start">
                                        <a href="#!" className="white">
                                            <svg
                                                width="50"
                                                height="50"
                                                viewBox="-1.5 0 20 20"
                                                fill="#000000"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M57.5709,7282.193 C58.3,7281.348 58.7914,7280.171 58.6569,7279 C57.6063,7279.04 56.3352,7279.671 55.5819,7280.515 C54.9054,7281.264 54.3148,7282.461 54.4736,7283.609 C55.6456,7283.696 56.8418,7283.039 57.5709,7282.193 Z" />
                                            </svg>

                                            <p>Download on the
                                                App Store</p>
                                        </a>
                                        <a href="#!" className="d-flex align-items-center white">

                                            <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path></g></svg>
                                            <p>Get it on the
                                                GooglePlay</p>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default WebApp