import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import search from "../../assets/img/search.png"
import faqGirl from "../../assets/img/faq-girl.png"
import info1 from "../../assets/img/info-1.png"
import memberShip from "../../assets/img/membership-vip-1.png"
import hostinImg from "../../assets/img/hosting.png"
import bookinImg from "../../assets/img/booking.png"
import accountImg from "../../assets/img/accounts.png"
import securityImg from "../../assets/img/security.png"
import rewardImg from "../../assets/img/reward.png"
import firstImg from "../../assets/img/first-adge.png"
import secBadge from "../../assets/img/sec-badge.png"
import thirdBadge from "../../assets/img/third-badge.png"
import { DownOutlined, UpOutlined } from '@ant-design/icons';   

const Faqs = () => {
 const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

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
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (id: string) => {
    if (screenWidth <= 768) { // Only toggle on mobile
      setActiveAccordion(activeAccordion === id ? null : id);
    }
  };

  const isMobile = screenWidth <= 768;

   // CSS for smooth accordion animations
  const accordionStyles = `
    .accordion-content {
      overflow: hidden;
      transition: max-height 0.3s ease-out, opacity 0.2s ease;
    }
    
    .accordion-collapse.collapse {
      display: none;
    }
    
    .accordion-collapse.show {
      display: block;
      animation: fadeIn 0.3s ease-in;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    
    .accordion-button-mobile {
      position: relative;
      padding-right: 30px;
      cursor: pointer;
    }
    
    /* For yellow background sections */
    .bg-yellow .accordion-button-mobile {
      background-color: var(--yellow-bg);
    }
  `;
    return (
        <div>
          <style>{accordionStyles}</style>
{/* ********** faqs hero ***********/}
            <section className="about-section pb-0 fix section-padding pricing-padding faqs_heroSection_wrapper position-relative">
                <div className="container-fluid p-0 faqs_heroSection">
                    <div className="about-wrapper-3 style-2">
                        <div className="row justify-content-end align-items-center position-relative">
                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <div className="about-content position-relative">
                                    <div className="section-title">

                                        <h2 className="splt-txt wow" data-splitting>
                                            KazaSwap FAQ
                                        </h2>
                                    </div>
                                    <p className="about-p margin-75 mt-md-0 wow fadeInUp faqs_heroDescription" data-wow-delay=".5s">
                                        Find here all your answers for <br id='faqshero_mobileViewLineBreak' />your questions about us!
                                    </p>
                                    <div className="input-serach searchInput_box">
                                        <img src={search} id='faqs_heroInputsearchIcon' width="29px" alt='search' />
                                        <input type="text" id='faqs_heroInput' placeholder="How can i earn credits?" className="search-input" />
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-4 mt-md-5 mt-lg-0 p-0">
                                <div className="faq-img text-center position-relative">
                                    <img src={faqGirl} id='faqgirl_img1' alt='faq girl' />
                                    <img src={faqGirl} className='' id='faqgirl_img2' alt='faq girl' />
                                    <img src={faqGirl} className='d-inline d-lg-none'  id='faqs_mobileView_img' alt='faq girl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<div style={{ position: 'relative' }}>
             {/* General Information Section */}
      <section className="faq-section section-padding section-bg fix bg-white first-sect">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".3s">
                      <h5 className="accordion-header" style={{marginTop: '-42px'}}>
                        <div 
                          className={`accordion-button1 collapsed ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq1')}
                        >
                          <span><img src={info1} alt="info" width="43px" /></span> 
                          General Information
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq1' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq1" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq1') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <h4>1. What is KazaSwap?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            KazaSwap is a home exchange platform that allows members to swap homes with others using credits, offering a flexible and cost-effective way to travel.
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>2. How does KazaSwap work?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Upon registration, members receive 5 credits, equivalent to 5 nights stay in another city.To earn more credits, members can host other traveler's in their homes or participate in the reward program. There are no mandatory memberships, and credits do not expire
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
      </section>
           {/* Using the Platform Section */}
      <section className="faq-section section-padding fix bg-yellow">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion1">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".5s">
                      <h5 className="accordion-header">
                        <div 
                          className={`accordion-button1 bg-none ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq2')}
                        >
                          <span><img src={memberShip} alt="" width="52px" /></span>Using the Platform
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq2' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq2" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq2') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body bg-none">
                          <h4>3. Is there a membership fee?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            No, KazaSwap does not charge a membership fee. The platform operates on a pay-per-use model, with only a service fee applied when a swap is confirmed.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>4. How much is the service fee?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            The service fee is 150€ per trip, regardless of the stay's duration or location.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>5. Can I purchase additional credits?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Yes, but only in specific cases. While Kazaswap is designed to encourage hosting and sharing, members who are short on credits and unable to host at the moment may be eligible to purchase a limited number of top-up credits to complete a planned swap. This option is offered selectively to maintain community balance.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>6. Can I lose my credits if I don't use them quickly?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            No, credits do not expire and can be accumulated indefinitely.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>7. Does KazaSwap charge a cleaning fee?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            No, there is no cleaning fee. Members are expected to maintain their homes and leave them in good condition for the next user.
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
      </section>


      {/* Hosting and Staying Section */}
      <section className="faq-section section-padding section-bg fix bg-white">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".3s">
                      <h5 className="accordion-header">
                        <div 
                          className={`accordion-button1 ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq3')}
                        >
                          <span> <img src={hostinImg} width="51px" alt='hosting img' /></span> Hosting and Staying
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq3' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq3" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq3') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <h4>8. How do I list my home?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Create an account and provide detailed information about your property, including photos, amenities, and availability. Once your home is listed, it becomes part of the Kaza Swap community for others to request a stay.
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>9. Do I have to be present when someone stays at my home?</h4>
                          <p>
                            No, hosting can be done remotely if your home is prepared for guest arrivals. Ensure you have arrangements for access (e.g., a lockbox or trusted neighbor).
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>10. Can I host someone without traveling myself?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Yes! Hosting earns you credits that you can use later for your travels.
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>11. What happens if there is damage to my property?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            KazaSwap recommends establishing clear expectations with your guests. However, we also encourage members to maintain homeowner's or renter's insurance that covers guest stays.
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
      </section>

            {/* Bookings and Swaps Section */}
      <section className="faq-section section-padding fix bg-yellow">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion1">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".5s">
                      <h5 className="accordion-header">
                        <div 
                          className={`accordion-button1 bg-none ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq4')}
                        >
                          <span><img src={bookinImg} width="44px" alt='booking img' /> </span> Bookings and Swaps
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq4' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq4" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq4') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body bg-none">
                          <h4>12. How do I book a stay at someone else's home?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Browse available properties and send a request to the host. Once the host accepts, the swap is confirmed, and the service fee is applied.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>13. Can I cancel a swap?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Yes, but cancellations disrupt the community. If a cancellation occurs, Kazaswap will work with both parties to resolve the situation. If you cancel, your credits will be returned within a few days.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>14. What if I don't have enough credits for a swap?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            You'll need to host more travelers to earn additional credits, wait until your home is requested — or you can also top up your credits directly.
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
      </section>
             {/* Account and Community Guidelines Section */}
      <section className="faq-section section-padding section-bg fix bg-white">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".3s">
                      <h5 className="accordion-header">
                        <div 
                          className={`accordion-button1 ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq5')}
                        >
                          <span> <img src={accountImg} width="67px" alt='account img' /></span> Account and Community Guidelines
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq5' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq5" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq5') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <h4>15.  Can I join KazaSwap if I rent my home?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Yes, as long as your lease agreement allows subletting or home exchanges. Always check with your landlord if you're unsure.
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>16. Are there any restrictions on the type of homes I can list?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            KazaSwap welcomes all types of homes, from apartments to villas. The key is to provide accurate descriptions and photos of your place.
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>17. How does KazaSwap ensure the quality of listings?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            We rely on community feedback and reviews. Members can rate their experiences, ensuring transparency and quality.
                          </p>
                        </div>
                        <div className="accordion-body">
                          <h4>18. How does KazaSwap handle disputes between members?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Our Mediation Team is available to assist with disputes. We encourage open communication between members to address any issues directly.
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
      </section>

             {/* Security and Trust Section */}
      <section className="faq-section section-padding fix bg-yellow">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion1">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".5s">
                      <h5 className="accordion-header">
                        <div 
                          className={`accordion-button1 bg-none ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq6')}
                        >
                          <span><img src={securityImg} width="44px" alt='security img'/> </span> Security and Trust
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq6' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq6" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq6') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body bg-none">
                          <h4>19.  Is KazaSwap safe?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Absolutely! Kazaswap is built on a community of trust. Profiles, reviews, and open communication help ensure safe and reliable exchanges.
                          </p>
                        </div>
                        <div className="accordion-body bg-none">
                          <h4>20. What personal information is shared with other members?</h4>
                          <p className='faqsAccordion_heroDescription'>
                            Your profile includes basic details such as your first name and home listing information. Contact information is shared only when a swap is confirmed.
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
      </section>

            
      {/* Reward Program Section */}
      <section className="faq-section section-padding section-bg fix bg-white">
        <div className="container">
          <div className="faq-wrapper faqs_inner_content_wrapper">
            <div className="row">
              <div className="col-lg-10 mt-5 mt-lg-0">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item mb-4 wow fadeInUp w-100" data-wow-delay=".3s">
                      <h5 className="accordion-header">
                        <div 
                          className={`accordion-button1 ${isMobile ? 'accordion-button-mobile' : ''}`}
                          onClick={() => toggleAccordion('faq7')}
                        >
                          <span> <img src={rewardImg} width="44px" alt='reward img'/></span> Reward Program
                          {isMobile && (
                            <span className="accordion-icon">
                              {activeAccordion === 'faq7' ? <UpOutlined /> : <DownOutlined />}
                            </span>
                          )}
                        </div>
                      </h5>
                      <div 
                        id="faq7" 
                        className={`accordion-collapse ${(!isMobile || activeAccordion === 'faq7') ? 'show' : 'collapse'}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <div className="d-flex align-items-center gap-61">
                            <img src={firstImg} width="98px" alt='first img'/>
                            <div className="">
                              <h4>First Badge: "Globetrotter in Training"</h4>
                              <p className='faqsAccordion_heroDescription'>
                                How to unlock: Create a completed profile and host your first guest.<br />
                                Reward: Earn 3 bonus credits for hosting your first guest.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-body">
                          <div className="d-flex align-items-center gap-61">
                            <img src={secBadge} width="98px" alt='sec badge'/>
                            <div className="">
                              <h4>Second Badge: "Explorer Host"</h4>
                              <p className='faqsAccordion_heroDescription'>
                                How to unlock: Host 5 guests and receive 3 positive reviews.<br />
                                Reward: Earn 5 bonus credits and a special profile highlight as an "Explorer Host."
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-body">
                          <div className="d-flex align-items-center gap-61">
                            <img src={thirdBadge} width="98px" alt='third badge'/>
                            <div className="">
                              <h4>Third Badge: "Master Host Nomad"</h4>
                              <p className='faqsAccordion_heroDescription'>
                                How to unlock: Host 10+ guests with consistent positive feedback.<br />
                                Reward: Access exclusive Kazaswap perks, such as priority listing in search results or discounted service fees.
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
        </div>
      </section>
</div>

            <Footer />



        </div>
    )
}

export default Faqs