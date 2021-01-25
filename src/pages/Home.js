import React from "react";

import Layout from "../components/layout";
import Carousel from "../components/Carousel";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <>
      <Layout>
        <section id="hero">
          <Carousel />
        </section>

        <section className="about container">
          <div className="section-padd">
            <Heading>
              <h3 className="section-heading p-2">WHY US</h3>
            </Heading>
            <div className="cards">
              <div className="row">
                <div className="col-sm-4">
                  <div className="cards-container">
                    <div className="icon">
                      <div className="all-day"></div>
                    </div>
                    <h3>24HRS Support</h3>
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
                    <h3>Secured Payment</h3>
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
                    <h3>Buy now Pay later</h3>
                    <p>
                      Electricity loan with a guaranteed 21 days payback period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="service-provider container">
          <div className="section-padd">
            <Heading>
              <h3 className="section-heading p-2">Service Provider</h3>
            </Heading>
            <div className="cards">
              <div className="row">
                <div className="col-md-3">
                  <div className="provider-container">
                    <div className="ie"></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="provider-container">
                    <div className="ekedc"></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="provider-container">
                    <div className="etransact"></div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="provider-container">
                    <div className="interswitch"></div>
                  </div>
                </div>
              </div>
            </div>

            <section className="get-started container">
              <Heading>
                <h3 className="section-heading p-2">Get started with Liight today</h3>
              </Heading>
              <p>Download and start buying electricity with ease.</p>
              <div className="download-appstore">
                <div className="googleplay"></div>
                <div className="appstore"></div>
              </div>
            </section>
          </div>
        </section>

        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="banner">
                  <div></div>
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
                    <span></span>
                  </button>
                  <button className="twitter">
                    <span></span>
                  </button>
                  <button className="instagram">
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="support">
            <button className="customer-support"></button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
