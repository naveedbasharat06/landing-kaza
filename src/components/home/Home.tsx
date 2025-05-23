import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import earningCredit from "../../assets/earning-credit-bg.png";
import appSec from "../../assets/app-sec-bg.png";
import $ from "jquery";
import "fullpage.js/dist/fullpage.min.css";
import fullpage from "fullpage.js";
import img1 from "../../assets/img/img-1.png";
import img2 from "../../assets/img/img-2.png";
import img3 from "../../assets/img/img-3.png";
import img4 from "../../assets/img/img-4.png";
import img5 from "../../assets/img/img-5.png";
import img11 from "../../assets/img/img-11.jpg";

import img7 from "../../assets/img/img-7.png";
import img8 from "../../assets/img/img-8.png";
import img9 from "../../assets/img/img-9.png";
import img10 from "../../assets/img/img-10.png";
import img12 from "../../assets/img/img-12.jpg";
import img13 from "../../assets/img/img-13.jpg";
import img14 from "../../assets/img/img-14.jpg";
import img15 from "../../assets/img/img-15.jpg";
import addPlace from "../../assets/img/add-place.png";
import earnCredit from "../../assets/img/earn-credit.png";
import useCredit from "../../assets/img/use-credit.png";
import earningHost from "../../assets/img/earning-host-icon.png";
import earnMob from "../../assets/img/earn-mob.png";
import memeberShip from "../../assets/img/membership-vip 1.png";
import noHidenCost from "../../assets/img/no-hidden-cost.png";
import logoBlack from "../../assets/img/white-bg.png";
import appleIcon from "../../assets/img/apple-icon.png";
import androidIcon from "../../assets/img/android-icon.png";
import appImg from "../../assets/img/app-img.png";
import appImgMob from "../../assets/img/app-img-mob.png";
import instaBg from "../../assets/img/insta-bg.png";
import instagramImg from "../../assets/img/instagram.png";
import instaPic from "../../assets/img/insta-pic.png";
import instaPic1 from "../../assets/img/insta-1.png";
import instaPic2 from "../../assets/img/insta-2.png";
import instaPic3 from "../../assets/img/insta-3.png";
import instaPic4 from "../../assets/img/insta-4.png";
import instaPic5 from "../../assets/img/insta-5.png";

import cookie from "../../assets/img/cookie.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// import './main.css'

declare global {
  interface Window {
    fullpage_api?: any;
  }
}

const Home: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 768) {
      return;
    }
    if ($("#fullpage").length > 0) {
      new fullpage("#fullpage", {
        sectionSelector: ".vertical-scrolling",
        slideSelector: ".horizontal-scrolling",
        anchors: [
          "welcome",
          "how-it-works",
          "earning-credit",
          "download-app",
          "faqs",
          "follow-us",
          "success-stories",
          "services",
          "technology-expertise",
          "engagement-models",
          "happy_clients",
          "journey",
          "corporate-social-responsibilities",
          "group-of-companies",
          "cheerful-workforce",
          "global-presence",
        ],
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        scrollingSpeed: 700,
        fitToSection: true,
        verticalCentered: false,
        lazyLoading: true,
        scrollOverflow: true,
        // parallax: true,
        // parallaxOptions: {
        //   type: "reveal",
        //    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
        // },
      });
    }

    return () => {
      if (typeof window.fullpage_api !== "undefined") {
        window.fullpage_api.destroy("all");
      }
    };
  }, []);

  useEffect(() => {
    const setupMarquee = (
      selector: string,
      speed: number,
      direction: "left" | "right" = "left"
    ): void => {
      const marquee = document.querySelector<HTMLElement>(selector);
      if (!marquee) return;

      const originalContent = marquee.innerHTML;
      const duplicateCount = 2;
      for (let i = 0; i < duplicateCount; i++) {
        marquee.innerHTML += originalContent;
      }

      const contentWidth = marquee.scrollWidth / (duplicateCount + 1);
      let scrollAmount = direction === "left" ? 0 : -contentWidth;
      let isHovered = false;

      const startScrolling = () => {
        if (!isHovered) {
          scrollAmount += direction === "left" ? -speed : speed;

          if (direction === "left" && Math.abs(scrollAmount) >= contentWidth) {
            scrollAmount = 0;
          } else if (direction === "right" && scrollAmount >= 0) {
            scrollAmount = -contentWidth;
          }

          marquee.style.transform = `translateX(${scrollAmount}px)`;
        }

        requestAnimationFrame(startScrolling);
      };

      marquee.addEventListener("mouseover", () => (isHovered = true));
      marquee.addEventListener("mouseout", () => (isHovered = false));

      startScrolling();
    };

    setupMarquee(".marquee-inner", 0.5, "left");
    setupMarquee(".marquee-inner1", 0.5, "right");
    setupMarquee(".marquee-inner2", 0.5, "left");
    setupMarquee(".marquee-inner3", 0.5, "right");
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="fullpage">
        <div
          className="main-hero-sec fix vertical-scrolling"
          data-anchor="welcome"
        >
          <section className="hero-section hero-4">
            <div className="container homePage_Herosection_heading">
              <div className="row g-0">
                <div className="col-lg-10">
                  <div className="hero-content">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                      Swap your place, explore the world.
                    </h1>
                    <div className="d-flex justify-content-between align-items-center discover-btn">
                      <p className="wow fadeInUp" data-wow-delay=".5s">
                        Join a global community of explorers, swapping
                        <br /> homes and saving on travel.
                      </p>
                      <a
                        href="#!"
                        className="theme-btn padding-style wow fadeInUp bg-black "
                        data-wow-delay=".7s"
                      >
                        Discover our places
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marquee">
              <div className="marquee-inner">
                <img src={img1} alt="Image 1" />
                <img src={img2} alt="Image 3" />
                <img src={img3} alt="Image 2" />
                <img src={img4} alt="Image 4" />
                <img src={img5} alt="Image 5" />
              </div>
            </div>

            <div className="marquee-wrapper">
              <div className="marquee-inner1">
                <img src={img11} alt="Image 1" />
                <img src={img7} alt="Image 3" />
                <img src={img8} alt="Image 2" />
                <img src={img9} alt="Image 4" />
                <img src={img10} alt="Image 5" />
                <img src={img12} alt="Image 1" />
                <img src={img13} alt="Image 3" />
                <img src={img14} alt="Image 2" />
                <img src={img15} alt="Image 4" />
                <img src={img10} alt="Image 5" />
              </div>
            </div>

            <div className="row hide-on-desktop">
              <a
                href="#!"
                className="theme-btn padding-style wow fadeInUp bg-black bottom-new"
                data-wow-delay=".7s"
              >
                Discover our places
              </a>
            </div>
          </section>
        </div>

        <section
          className="about-section fix section-padding vertical-scrolling"
          data-anchor="about"
        >
          <div className="container">
            <div className="about-wrapper-3 style-2">
              <div className="row">
                <div className="col-lg-12 mt-5 mt-lg-0">
                  <div className="about-content text-center">
                    <div className="section-title">
                      <h2 className="splt-txt wow" data-splitting>
                        How it works
                      </h2>
                    </div>
                    <p
                      className="mt-3 about-p mt-md-0 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      Swap your home, earn credits, and explore the world like
                      never before!
                    </p>

                    <div className="row-grid mt-1 hide-on-mobile">
                      <div className="">
                        <div className="feature-card card1">
                          <div className="feature-content">
                            <div className="feature-details">
                              <div className="feature-number">01</div>
                              <h3 className="feature-title">Add your place</h3>
                            </div>

                            <div className="feature-image">
                              <img
                                src={addPlace}
                                className="w-100"
                                alt="Feature Imag"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="feature-card">
                          <div className="feature-content">
                            <div className="feature-details">
                              <div className="feature-number">02</div>
                              <h3 className="feature-title">
                                Earn Credits by hosting
                              </h3>
                              <p className="feature-description">
                                Earn credits every time someone
                                <br /> stays at your place
                              </p>
                            </div>

                            <div className="feature-image">
                              <img
                                src={earnCredit}
                                className="w-100"
                                alt="Feature Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="feature-card d-block image-need">
                          <div className="feature-content">
                            <div className="feature-details">
                              <div className="feature-number">03</div>
                              <h3 className="feature-title">Use Credits</h3>
                            </div>
                          </div>
                          <div className="feature-image-img">
                            <img
                              src={useCredit}
                              className=""
                              alt="Feature Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {screenWidth <= 990 && (
                      <>
                        <style>{`
    .swiper-pagination-bullets {
      margin-top: 20px !important;
    }
    .swiper-pagination-bullet {
      width: 12px !important;
      height: 12px !important;
      background: #000 !important;
      opacity: 0.5 !important;
      transition: all 0.3s ease !important;
    }
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
      background: #000 !important;
      transform: scale(1.2) !important;
    }
  `}</style>

                        <Swiper
                          modules={[Pagination, Autoplay]}
                          spaceBetween={10}
                          slidesPerView={1.1} // Show 1 full + 10% of next
                          loop={true}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          breakpoints={{
                            640: {
                              slidesPerView: 1.1,
                            },
                            768: {
                              slidesPerView: 2.1,
                            },
                            1024: {
                              slidesPerView: 3.1,
                            },
                          }}
                        >
                          <SwiperSlide>
                            <div className="col-lg-12">
                              <div className="feature-card homepage card1">
                                <div className="feature-content">
                                  <div className="feature-details">
                                    <div className="feature-number">01</div>
                                    <h3 className="feature-title">
                                      Add your place
                                    </h3>
                                  </div>

                                  <div className="feature-image">
                                    <img
                                      src={addPlace}
                                      className="w-100"
                                      alt="Feature Image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>

                          <SwiperSlide>
                            <div className="col-lg-12">
                              <div className="feature-card homepage">
                                <div className="feature-content">
                                  <div className="feature-details">
                                    <div className="feature-number">02</div>
                                    <h3 className="feature-title">
                                      Earn Credits by hosting
                                    </h3>
                                    <p className="feature-description">
                                      Earn credits every time someone
                                      <br /> stays at your place
                                    </p>
                                  </div>

                                  <div className="feature-image">
                                    <img
                                      src={earnCredit}
                                      className="w-100"
                                      alt="Feature Image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="">
                              <div className="feature-card homepage image-need">
                                <div className="feature-content">
                                  <div className="feature-details">
                                    <div className="feature-number">03</div>
                                    <h3 className="feature-title">
                                      Use Credits
                                    </h3>
                                  </div>
                                </div>
                                <div className="feature-image-img">
                                  <img
                                    src={useCredit}
                                    className=""
                                    alt="Feature Image"
                                  />
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </>
                    )}

                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <a
                        href="#!"
                        className="theme-btn padding-style register-btn"
                      >
                        Register your place
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="service-section-2 fix section-padding vertical-scrolling"
          data-anchor="service"
          style={{
            backgroundImage: `url(${earningCredit})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp define-width"
                data-wow-delay=".3s"
              >
                <div className="service-box-items style-2">
                  <div className="content">
                    <h4 className="splt-txt wow" data-splitting>
                      <a href="#!">Earning credits by Hosting</a>
                    </h4>
                    <p>
                      For every night a guest stays at <br />
                      your place, receive{" "}
                      <span className="credt-bold"> 1 credit!</span>
                    </p>
                    <img src={earningHost} className="hide-on-mobile" />
                    <div className="row hide-on-desktop">
                      <img src={earnMob} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3 align-items-center nocost mobile">
                <a href="" className="no-member">
                  <img src={memeberShip} /> No membership fees
                </a>
                <a href="" className="no-member hiden-cost">
                  <img src={noHidenCost} width="29px" />
                  No hidden costs
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          className="section-padding app-section vertical-scrolling"
          data-anchor="app"
        >
          <div
            className="cta-video-wrapper bg-cover application"
            style={{
              backgroundImage: `url(${appSec})`,
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="logo-icon">
                    <img src={logoBlack} width="99.26px" />
                  </div>
                  <h2>
                    Make it easier, <br />
                    download our <br />
                    mobile App
                  </h2>

                  <div className="btn-white mob-new">
                    <a href="#!" className="white">
                      <p>Coming Soon</p>
                    </a>
                    <a
                      href="#!"
                      className="d-flex align-items-center white opacity-low"
                    >
                      <img src={appleIcon} width="29px" alt="App Store" />
                      <img src={androidIcon} width="26px" alt="App Store" />
                      <p>Install App</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="app-img homescreen">
                    <img src={appImg} className="hide-on-mobile" />
                    <div className="row hide-on-desktop">
                      <img src={appImgMob} className="app-mob" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="faq-section section-padding fix vertical-scrolling"
          data-anchor="faq"
        >
          <div className="container">
            <div className="faq-wrapper">
              <div className="faq-content text-center">
                <div className="section-title">
                  <h2 className="splt-txt wow" data-splitting>
                    Any questions?
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Want to be part of our community? Learn more.
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 mt-5 mt-lg-0">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      <div
                        className="accordion-item mb-4 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="false"
                            aria-controls="faq1"
                          >
                            What is the KazaSwap community?
                          </button>
                        </h5>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            KazaSwap is a home exchange platform that allows
                            members to swap homes with others using credits,
                            offering a flexible and cost-effective way to
                            travel.
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item mb-4 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            How to earn credits?
                          </button>
                        </h5>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Credits can be earned by hosting people at your
                            place with our app, or with the Reward Program
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item mb-4 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            How does KazaSwap work?
                          </button>
                        </h5>
                        <div
                          id="faq3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Upon registration, members receive 5 credits,
                            equivalent to 5 nights stay in another city.To earn
                            more credits, members can host other traveler's in
                            their homes or participate in the reward program.
                            There are no mandatory memberships, and credits do
                            not expire.
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item wow  mb-4  fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq4"
                            aria-expanded="false"
                            aria-controls="faq4"
                          >
                            How do I list my home?
                          </button>
                        </h5>
                        <div
                          id="faq4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Create an account and provide detailed information
                            about your property, including photos, amenities,
                            and availability. Once your home is listed, it
                            becomes part of the Kaza Swap community for others
                            to request a stay.
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <h5 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq5"
                            aria-expanded="false"
                            aria-controls="faq5"
                          >
                            How do I book a stay at someone else’s home?
                          </button>
                        </h5>
                        <div
                          id="faq5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            Browse available properties and send a request to
                            the host. Once the host accepts, the swap is
                            confirmed, and the service fee is applied.
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

        <div className="last-section vertical-scrolling" data-anchor="insta">
          <div className="section-padding pb-0 insta-section">
            <div
              className="cta-video-wrapper bg-cover1 insta-img"
              style={{
                backgroundImage: `url(${instaBg})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <h2>
                      Follow us on <br />
                      <img src={instagramImg} width="50px" /> Instagram,
                      <br />
                      and share your <br />
                      journey!
                    </h2>

                    <div className="btn-white justify-content-start">
                      <a
                        href="https://www.instagram.com/kazaswap.app/"
                        className="white yellow"
                      >
                        <p>Follow Us</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="row hide-on-desktop">
                      <div className="marquee">
                        <div className="marquee-inner2">
                          <img src={instaPic} alt="Image 1" />
                          <img src={instaPic1} alt="Image 3" />
                          <img src={instaPic2} alt="Image 2" />
                        </div>
                      </div>

                      <div className="marquee-wrapper">
                        <div className="marquee-inner3">
                          <img src={instaPic3} alt="Image 5" />
                          <img src={instaPic4} alt="Image 1" />
                          <img src={instaPic5} alt="Image 3" />
                        </div>
                      </div>
                    </div>
                    <div className="app-img-new hide-on-mobile">
                      <div className="gallery">
                        <div className="block-33 display--inline-top">
                          <div className="gutter relative">
                            <div className="gallery-h">
                              <div className="gallery-image relative">
                                <div className="gallery-image__img relative">
                                  <div
                                    className="fill-dimensions cover-img"
                                    style={{
                                      backgroundImage: `url(${instaPic})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div className="gallery-image">
                                <div className="gallery-image__img relative">
                                  <div
                                    className="fill-dimensions cover-img"
                                    style={{
                                      backgroundImage: `url(${instaPic1})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div className="gallery-image">
                                <div className="gallery-image__img relative">
                                  <div
                                    className="fill-dimensions cover-img"
                                    style={{
                                      backgroundImage: `url(${instaPic2})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="block-33 display--inline-top">
                          <div className="gutter relative">
                            <div className="gallery-h gallery-h--tb">
                              <div className="gallery-image relative">
                                <div className="gallery-image__img relative">
                                  <div
                                    className="fill-dimensions cover-img"
                                    style={{
                                      backgroundImage: `url(${instaPic3})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div className="gallery-image">
                                <div className="gallery-image__img relative">
                                  <div
                                    className="fill-dimensions cover-img"
                                    style={{
                                      backgroundImage: `url(${instaPic4})`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div className="gallery-image">
                                <div className="gallery-image__img relative">
                                  <div
                                    className="fill-dimensions cover-img"
                                    style={{
                                      backgroundImage: `url(${instaPic5})`,
                                    }}
                                  ></div>
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
            </div>

            <Footer />
          </div>
        </div>
      </div>

      <div fs-cc="banner" className="cookie-popup">
        <div className="cookie-popup__block">
          <div className="cookie-popup__icon">
            <img
              src={cookie}
              loading="lazy"
              alt="cookie
        "
            />
          </div>
          <div className="cookie-popup__text">
            We use cookies to provide you with a personalised experience. To
            find out more and learn how to opt out, read our cookie policy.
          </div>
          <div className="cookie-popup__buttons">
            <a
              fs-cc="deny"
              href="#!"
              className="cookie-popup__link grey w-button"
              role="button"
              tabIndex={0}
            >
              Reject
            </a>
            <a
              fs-cc="allow"
              href="#!"
              className="cookie-popup__link w-button"
              role="button"
              tabIndex={0}
            >
              Agree &amp; Proceed
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Chatbot --> */}
      {/* <div className="botIcon">
                <div className="botIconContainer">
                    <div className="iconInner">
                        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                                    stroke="#FFE361" stroke-width="1.5"></path>
                                <path d="M8 10.5H16" stroke="#FFE361" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M8 14H13.5" stroke="#FFE361" stroke-width="1.5" stroke-linecap="round"></path>
                            </g>
                        </svg>
                    </div>
                </div>

            </div> */}
    </>
  );
};

export default Home;
