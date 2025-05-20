import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import search from "../../assets/img/search.png"
import down from "../../assets/img/down.png"
import date from "../../assets/img/date-new.png"
import filter from "../../assets/img/filters.png"
import property from "../../assets/img/property-1.png"
import userPic1 from "../../assets/img/userpic1.png"
import dateIcon from "../../assets/img/date-icon.png"
import locationIcon from "../../assets/img/location-icon.png"
import property2 from "../../assets/img/property-2.png"
import userPic2 from "../../assets/img/userpic2.png"
import userPic3 from "../../assets/img/userpic3.png"
import userPic4 from "../../assets/img/userpic4.png"
import userPic5 from "../../assets/img/userpic5.png"
import property3 from "../../assets/img/property-3.png"
import property4 from "../../assets/img/property-4.png"
import property5 from "../../assets/img/property-5.png"
import userPic11 from "../../assets/img/userpic11.png"
import userPic10 from "../../assets/img/userpic10.png"
import property10 from "../../assets/img/property-10.png"
import property11 from "../../assets/img/property-10.png"
import property12 from "../../assets/img/property-12.png"
import userPic12 from "../../assets/img/userpic12.png"


const Properties = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>

            <section className="about-section fix section-padding properties-padding">
                <div className="container">
                    <div className="about-wrapper-3 style-2">
                        <div className="row justify-content-end mobile-view">
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div className="input-serach">
                                    <img src={search} width="29px" />
                                    <input type="text" placeholder="Where would you like to go?" className="search-input" />
                                </div>
                            </div>
                            <div className="col-lg-3 mt-5 mt-lg-0 date-div">
                                <div className="select-div-item position-relative">
                                    <select className="select-control">
                                        <option value="1">Choose dates</option>
                                        <option value="2">10 April</option>
                                        <option value="3">20 April</option>
                                    </select>
                                    <img src={down} width="30px" />
                                </div>
                            </div>
                            <div className="col-lg-3 mt-5 mt-lg-0 d-xxl-none d-lg-block">
                                <div className="filter-img">
                                    <img src={date} width="49px" />
                                </div>
                            </div>
                            <div className="col-lg-3 mt-5 mt-lg-0">
                                <div className="filter-img">
                                    <img src={filter} width="49px" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="properties-section section-padding prop">
                <div className="container">
                    <div className="row grid-proprty">
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic1} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property2} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic2} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property3} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic3} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property4} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic4} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property5} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic5} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/location-icon.png" width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src="assets/img/property-6.png" width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src="assets/img/userpic6.png" />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/date-icon.png" width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/location-icon.png" width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src="assets/img/property-7.png" width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src="assets/img/userpic7.png" />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/date-icon.png" width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/location-icon.png" width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src="assets/img/property-8.png" width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src="assets/img/userpic8.png" />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/date-icon.png" width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/location-icon.png" width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src="assets/img/property-9.png" width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src="assets/img/userpick-9.png" />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src="assets/img/date-icon.png" width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property10} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic10} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property11} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic11} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>
                        <div className="properties-div">
                            <div className="properties-sec">
                                <img src={property12} width="100%" />
                            </div>
                            <div className="user-profile">
                                <img src={userPic12} />
                            </div>
                            <div className="user-text">
                                <div className="d-flex align-items-center">
                                    <img src={dateIcon} width="18px" /> <span>Nov 25</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={locationIcon} width="18px" /> <span>Cape Town</span>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="text-center">
                        <a href="#!" className="theme-btn padding-style wow fadeInUp bg-black loadmore" data-wow-delay=".7s">
                            Load more
                        </a>
                    </div>


                </div>
            </section>
            <Footer />


        </div>
    )
}

export default Properties