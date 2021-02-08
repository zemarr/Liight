import React from "react";

import Layout from "../components/layout";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";
import ScrollToTop from "../components/ScrollToTop";

import Logo from "../emblem.png";
import ie from "../ike.svg";
import etransact from "../Etranzact.svg";
import ekedc from "../ekedc.svg";
import interswitch from "../Interswitch.svg";
import GooglePlay from "../googleplay.svg";
import AppStore from "../appstore.svg";
import facebook from "../facebook.svg";
import twitter from "../twitter.svg";
import instagram from "../instagram.svg";
import ChatWidget from "../components/ChatWidget";
import { WidgetContextProvider } from "../context/WidgetContext";

const Home = () => {
  // console.log(document.body.clientWidth) // get the width of the website body
  // const [isMobile, setIsMobile] = useState();

  // const documentWidthHandler = () => {
  //   let width = document.body.clientWidth;
  //   let height = document.body.clientHeight;
  //   if (width > 768) {
  //     console.log("Desktop View");
  //     console.log(width, height);
  //   }
  //   if (width <= 768) {
  //     console.log("Mobile view");
  //     console.log(width, height);
  //   } else {
  //     return;
  //   }
  // };
  // documentWidthHandler();

  return (
    <>
      <Layout>
        <section id="hero">
          <Carousel />
        </section>

        <section className="about">
          <div className="container">
            <div className="section-padd">
              <Heading>
                <h4 className="section-heading p-2">WHY US</h4>
              </Heading>
              <div className="cards">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="cards-container">
                      <div className="icon">
                        <div className="all-day"></div>
                      </div>
                      <h5>24HRS Support</h5>
                      <p>
                        Automated 24 Hours self-service contacts to save time,
                        hassel and frustration
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="cards-container">
                      <div className="icon">
                        <div className="secure-payment"></div>
                      </div>
                      <h5>Secured Payment</h5>
                      <p>
                        High level security encryption to ensure information is
                        protected from fraud
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="cards-container">
                      <div className="icon">
                        <div className="loan"></div>
                      </div>
                      <h5>Buy now Pay later</h5>
                      <p>
                        Electricity loan with a guaranteed 21 days payback
                        period
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <hr /> */}

        <section className="service-provider">
          <div className="section-padd container">
            <Heading>
              <h4 className="section-heading p-2">Service Providers</h4>
            </Heading>
            <div className="cards">
              <div className="row">
                <div className="col-md-3">
                  <div className="provider-container">
                    <img
                      src={ie}
                      alt="Ikeja electric"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="provider-container">
                    <img src={ekedc} alt="Ekedc" className="img-responsive" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="provider-container">
                    <img
                      src={etransact}
                      alt="E-transact"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="provider-container">
                    <img
                      src={interswitch}
                      alt="Interswitch"
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>

            <section className="get-started container">
              <Heading>
                <h4 className="section-heading p-2">
                  Get started with Liight today
                </h4>
              </Heading>
              <p>Download and start buying electricity with ease.</p>
              <div className="download-appstore">
                <img src={GooglePlay} alt="App on Googleplay" />
                <img src={AppStore} alt="App on Appstore" />
              </div>
            </section>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="banner">
                  <img src={Logo} alt="Official Logo" height="100%" />
                  <p>
                    <b>&copy;</b>2021 All rights reserved
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="head">
                  <h4>Learn</h4>
                  <button>Blog</button>
                  <button>FAQ</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="head">
                  <h4>Legal</h4>
                  <button>Terms of Use</button>
                  <button>Privacy Policy</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="head">
                  <h4>Contact Us</h4>
                  <button>hello@Liight.com.ng</button>
                </div>
                <div className="social-media">
                  <button className="facebook">
                    <img src={facebook} alt="Facebook" height="25px" />
                  </button>
                  <button className="twitter">
                    <img src={twitter} alt="Twitter" height="25px" />
                  </button>
                  <button className="instagram">
                    <img src={instagram} alt="Instagram" height="25px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ScrollToTop />
          <WidgetContextProvider>
            <div className="support">
              <ChatWidget />
            </div>
          </WidgetContextProvider>
        </section>
      </Layout>
    </>
  );
};

export default Home;
