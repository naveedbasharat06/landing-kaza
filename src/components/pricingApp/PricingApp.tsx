import React, { useEffect } from 'react';
import Footer from '../footer/Footer';
import oneTime from '../../assets/img/one-time-service.png';
import credits5 from '../../assets/img/credits-5.png';
import noMean from '../../assets/img/no-mem.png';
import pricingBg from '../../assets/img/pricing-bg.png';

const PricingApp = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <section className="about-section fix section-padding pricing-padding mb-0">
                <div className="container-fluid pricing_heroSection p-0">
                    <div className="about-wrapper-3 style-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-content ">
                                    <div className="section-title">

                                        <h2 className="splt-txt wow" data-splitting>
                                            How Pricing Works
                                        </h2>
                                    </div>
                                    <p className="about-p wow fadeInUp d-none d-md-block" data-wow-delay=".5s">
                                        You won't pay more, for staying longer.
                                    </p>
<p className="about-p wow fadeInUp d-md-none" data-wow-delay=".5s">
                                        There’s no membership fee and no commitment required - just simple, affordable travel
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section fix section-padding pricing-padding bg-white ">
                <div className="container-fluid p-0">
                    <div className="about-wrapper-3 style-2 p-0">
                        <div className="row mx-auto">
                            <div className="col-lg-12 p-0">
                                <div className="about-content ">


                                    <div className="row mx-auto">
                                        <div className="col-lg-4 p-0 mx-auto">
                                            <div className="feature-card p-0 card1 bg-none h-auto w-100 mb-0 pb-0 mt-0 pt-0 d-flex align-items-center p-0 mx-auto">
                                                <div className="feature-content">
                                                    <div className="feature-details">
                                                        <div className="feature-image_more">
                                                            <img src={oneTime} id='oneTime_service' alt="Feature Imag" />
                                                        </div>
                                                        <h3 className="feature-title">One-Time Service Fee</h3>
                                                        <p className="feature-description">At Kaza, we reward long-term stays -<br />
                                                            whether you're here for 7 days or 30, our<br />
                                                            <span className="fw-bold"> 150€</span> service fee never changes. No<br />
                                                            surprises, just simple pricing.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 p-0">
                                            <div className="feature-card bg-none h-auto w-100 mb-0 pb-0 mt-0 pt-0 d-flex align-items-center p-0 mx-auto">
                                                <div className="feature-content">
                                                    <div className="feature-details">
                                                        <div className="feature-image_more">
                                                            <img src={credits5} id='creditIncluded_5' alt="Feature Imag" className='image-spacing'/>
                                                        </div>
                                                        <h3 className="feature-title">5 Credits Included</h3>
                                                        <p className="feature-description">
                                                            When you register your place, you’ll <br />
                                                            <span className="fw-bold"> receive 5 credits</span>, which you can use to<br />
                                                            stay in any cities. That's 5 nights of travel<br />
                                                            on us!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 p-0">
                                            <div className="feature-card bg-none h-auto w-100 mb-0 pb-0 mt-0 pt-0 d-flex align-items-center p-0 mx-auto" >
                                                <div className="feature-content">
                                                    <div className="feature-details">
                                                        <div className="feature-image_more">
                                                            <img src={noMean} id='radically_affordable' alt="Feature Imag" />
                                                        </div>
                                                        <h3 className="feature-title">Radically Affordable Stays</h3>
                                                        <p className="feature-description">
                                                            Travel more for less with KazaSwap’s <br />
                                                            straight forward pricing model. <span className="fw-bold"> No nightly <br />
                                                                fees, no cleaning charges </span>—just a single <br />
                                                            service fee per swap.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="service-section-2 fix section-padding pricing-sec"
                style={{
                    background: `url(${pricingBg})`,
                    backgroundSize: "cover",
                    borderRadius: "30px"
                }}>

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp define-width-price" data-wow-delay=".3s">
                            <div className="service-box-items mt-0 style-2 opacity-100">

                                <div className="content">
                                    <h4 className="splt-txt wow" data-splitting style={{ textAlign: "left" }}>
                                        <a href="#!"> One-week trip in London</a>
                                    </h4>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="heading-prici">
                                                <h4>Airbnb </h4>
                                            </div>
                                            <p className="breakdown-cost">Breakdown costs</p>
                                            <div className="border-right">
                                                <div className="d-flex justify-content-between align-items-center table-structu">
                                                    <h4>Price per night </h4>
                                                    <h5>180€</h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center table-structu">
                                                    <h4>Cleaning fee </h4>
                                                    <h5>46€</h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center table-structu">
                                                    <h4>Service fee </h4>
                                                    <h5>94€</h5>
                                                </div>
                                            </div>
                                            <div className="total-btn">
                                                <p>Total</p>
                                                <h2>1500€</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="heading-prici">
                                                <h4>KazaSwap </h4>
                                            </div>
                                            <p className="breakdown-cost">Breakdown costs</p>
                                            <div className="border-right border-0 p-0">
                                                <div className="d-flex justify-content-between align-items-center table-structu">
                                                    <h4>Price per night </h4>
                                                    <h5>0€</h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center table-structu">
                                                    <h4>Cleaning fee </h4>
                                                    <h5>0€</h5>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center table-structu">
                                                    <h4>Service fee </h4>
                                                    <h5>150€</h5>
                                                </div>
                                            </div>
                                            <div className="total-btn">
                                                <p>Total</p>
                                                <h2><small>7 Credits </small><span> &</span> 150€</h2>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />

        </div>
    )
}

export default PricingApp