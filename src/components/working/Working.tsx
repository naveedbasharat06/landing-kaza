import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import path1 from '../../assets/img/Path-1.png'
import howCredit from '../../assets/img/how-credit.png'
import path2 from '../../assets/img/Path-2.png'
import noSubs from '../../assets/img/no-subs.png'
import path3 from '../../assets/img/Path-3.png'
import byHosting from '../../assets/img/by-hosting.png'
import path4 from '../../assets/img/Path-4.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path4Mob from "../../assets/img/Path-4-mob.png"
import trueSharing from '../../assets/img/true-sharing.png'
import howItWorks from '../../assets/img/how-it-works-phone-2.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path3Mob from '../../assets/img/Path-3-mob.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import howItWorksPhone from '../../assets/img/how-it-works-phone-2.png'
import exchange from "../../assets/img/exchange-bg.png"
import coin1 from "../../assets/img/coin-1.png"
import coin2 from "../../assets/img/coin-2.png"
import coin3 from "../../assets/img/coin-3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const Working = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }


  }, [])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>

      <section
        className="about-section fix section-padding pricing-padding"
        style={{
          background: "linear-gradient(0deg, #F7F6E9 47.95%, #FFFFFF 119.86%)",
          backgroundSize: "cover"
        }}
      >
        <div className="container-fluid HowKazaWorks_hero_text">
          <div className="about-wrapper-3 style-2">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-content">
                  <div className="section-title">

                    <h2 className="splt-txt wow howItworkPage_title" data-splitting>
                      How It Works with KazaSwap
                    </h2>
                  </div>
                  <p className="about-p wow fadeInUp" data-wow-delay=".5s">
                    KazaSwap is a global community of travellers <br />sharing their homes.
                  </p>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {screenWidth <= 990 && (
<>
                     <style>{`
    .swiper-pagination-bullets {
      margin-top: 20px !important;
    }
    .swiper-pagination-bullet {
      width: 6px !important;
      height: 6px !important;
     
      background: transparent !important; /* No background */
      border: 1px solid #999 !important; /* Gray border */
      opacity: 0.5 !important;
      transition: all 0.3s ease !important;
    }
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
       background: #000 !important;
     border-color: #000 !important; /* Optional: match border to background */
      transform: scale(1.2) !important;
    }
  `}</style>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >



          <SwiperSlide>
            <div className="col-lg-12 text-center">
             
              <div className="credit-img">
                <img src={howCredit} style={{ width: "188px", marginBottom:'80px' }} alt='how credit'/>
              </div>
              <div className="credit-trext">
                <h5>Start with 5 Credits</h5>
                <p>When you join KazaSwap, you’ll receive 5 credits, giving you 5 nights to stay at any member’s home.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 text-center">
             
              <div className="credit-img">
                <img src={noSubs} style={{ width: "220px" , marginBottom:'35px'}} alt='no subs'/>
              </div>
              <div className="credit-trext">
                <h5>No Subscriptions, No <br /> Commitments</h5>
                <p>KazaSwap only charges a small service fee when you confirm a swap—no subscriptions, no recurring payments.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 text-center">
              
              <div className="credit-img">
                <img src={byHosting} className="mb-0 img-big" style={{ width: "288px" }} alt='by hosting'/>
              </div>
              <div className="credit-trext">
                <h5>Earn Credits by Hosting</h5>
                <p>The only way to earn more credits is by hosting other members in your home, ensuring a truly authentic sharing economy.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-lg-12 text-center">
             
              <div className="credit-img">
                <img src={trueSharing} style={{ width: "342px" , marginBottom:'40px'}} className='img-big'alt='true sharing' />
              </div>

              <div className="credit-trext">
                <h5>Promoting True Sharing</h5>
                <p>Credits can be topped up through payment each credit still represents a meaningful exchange within the travel community.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper >
</>
      )}



      <section className="about-section row hide-on-mobile fix1 section-padding exchange-div position-relative">
        <div className="container-fluid">
          <div className="about-wrapper-3 style-2">
            <div className="row">
              <div className="col-lg-12 mt-5 mt-lg-0">
                <div className="about-content text-center works-flow">



                  <div className="row ">
                    <div className="col-lg-4">
                      <div className="col-lg-12">
                        <div className="path-img position-relative">
                          <img src={path1} alt='path'/>
                        </div>
                        <div className="credit-img-howCredit">
                          <img src={howCredit} width="188px" alt='how credit' />
                        </div>
                        <div className="credit-trext">
                          <h5>Start with 5 Credits</h5>
                          <p>When you join KazaSwap, you’ll receive 5 credits, giving you 5 nights to stay at any member’s home.</p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="path-img position-relative">
                          <img src={path2} id='path-img-NoSubs'  alt='path'/>
                        </div>
                        <div className="credit-img-noSubs">
                          <img src={noSubs} width="220px" alt='no subs' />
                        </div>
                        <div className="credit-trext">
                          <h5>No Subscriptions, No Commitments</h5>
                          <p>KazaSwap only charges a small service fee when you confirm a swap—no subscriptions, no recurring payments.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <img src={howItWorks} id='howItWorks_centerMobile'  className='small-size' alt='how it works' />
                    </div>
                    <div className="col-lg-4">

                      <div className="col-lg-12">
                        <div className="path-img position-relative">
                          <img src={path3} className="path3" width="342px"  alt='path'/>
                        </div>
                        <div className="credit-img-byHosting">
                          <img src={byHosting} className="mb-0" width="250px" alt='path'/>
                        </div>
                        <div className="credit-trext">
                          <h5>Earn Credits by Hosting</h5>
                          <p>The only way to earn more credits is by hosting other members in your home, ensuring a truly authentic sharing economy.</p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="path-img position-relative">
                          <img src={path4} className="path4" width="342px" alt='path'/>
                        </div>
                        <div className="credit-img-trueSharing">
                          <img src={trueSharing} width="222px" alt='true sharing'/>
                        </div>

                        <div className="credit-trext">
                          <h5>Promoting True Sharing</h5>
                          <p>Credits can be topped up through payment each credit still represents a meaningful exchange within the travel community.</p>
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

      <section
        className="service-section-2 fix section-padding pricing-sec exchange-sec howHomeExchangeWork"
      
      >
        <div className="container-md">
          <div className="row align-items-center">

            <div className="col-xl-8 col-lg-8 col-sm-12 wow fadeInUp define-width-price p-0" data-wow-delay=".3s">
              <div className="row hide-on-mobile">
                <h4 className="splt-txt wow heading-exchange" data-splitting style={{ textAlign: "left" }}>
                  <a href="#!"> How Home Exchange Works</a>

                </h4>
                <div className="exchange-para">
                  <p>Discover new destinations while saving with<br /> KazaSwap.</p>
                </div>
              </div>
              <div className="exchange-offer-section">
                <div className="row hide-on-desktop">
                  <h4 className="splt-txt wow heading-exchange" data-splitting style={{ textAlign: "left" }}>
                    <a href="#!"> How Home <br />Exchange Works</a>

                  </h4>
                  <div className="exchange-para">
                    <p>Discover new destinations while saving<br /> with KazaSwap.</p>
                  </div>
                </div>


  <div className="content row hide-on-desktop">

                    <div className="exchnage-coin-2">
                  <div className="coin-sec d-flex align-items-center gap-3 mb-0">
                    <div className="coin-img2">
                      <img src={coin1} id='coinImg4_mobile'  alt='coin'/>
          
                      <h5>Spend Credits to Stay Anywhere</h5>
                    
                    </div>
                  </div>
                     <p>Send a request to connect and start your adventure. Use 1 credit per night to book your stay at any member’s home.
                      </p>
                   </div>

                     <div className="exchnage-coin-2">
                <div className="coin-sec d-flex align-items-center gap-3 mb-0">
                    <div className="coin-img2">
                      <img src={coin2}  id='coinImg4_mobile' alt='coin'/>
               
                      <h5>Unlimited Credit Accumulation</h5>
                   
                   
                    </div>

                  </div>
                     <p>Your credits never expire, so you can save them for future travels or use them whenever you're ready. </p>
                  </div>
                    <div className="exchnage-coin-2">
                  <div className="coin-sec d-flex align-items-center gap-3 mb-0">
                    <div className="coin-img2">
                      <img src={coin3}  id='coinImg4_mobile'  alt='coin'/>
                    
                      <h5>Simple and Transparent</h5>
                  
                    </div>

                  </div>
                     <p>With no nightly fees and no cleaning charges, traveling with KazaSwap is straightforward and affordable. </p>
                    
                  </div>
                </div>

                <div className="content row hide-on-mobile">
                  <div className="coin-sec d-flex align-items-start">
                    <div className="coin-img">
                      <img src={coin1}  alt='coin'/>
                    </div>
                    <div className="">
                      <h5>Spend Credits to Stay Anywhere</h5>
                      <p>Send a request to connect and start your adventure. Use 1 credit per night to book your stay at any member’s home.
                      </p>
                    </div>

                  </div>
                  <div className="coin-sec d-flex align-items-start">
                    <div className="coin-img">
                      <img src={coin2} alt='coin'/>
                    </div>
                    <div className="">
                      <h5>Unlimited Credit Accumulation</h5>
                      <p>Your credits never expire, so you can save them for future travels or use them whenever you're ready. </p>
                    </div>

                  </div>
                  <div className="coin-sec d-flex align-items-start mb-0">
                    <div className="coin-img">
                      <img src={coin3}  alt='coin'/>
                    </div>
                    <div className="">
                      <h5>Simple and Transparent</h5>
                      <p>With no nightly fees and no cleaning charges, traveling with KazaSwap is straightforward and affordable. </p>
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

export default Working