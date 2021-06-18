import React, { Fragment } from "react";
import { contact } from "../services/ImgUrlService";

const ContactPage = () => {
  return (
    <Fragment>
      <div className="banner-bottom" id="contact-detail">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Contact Us
            <span />
          </h3>
          <div className="container">
            <div className="card">
              <div className="row">
                <div className="col-md-6 agileits_services_grid text-center">
                  <div className="w3_agile_services_grid1">
                    <img
                      src={contact}
                      alt="contact"
                      width="auto"
                      height="300px"
                    />
                  </div>
                </div>
                <div
                  className="col-md-6 agileits_services_grid text-center"
                  // style={{ margin: "5em 0" }}
                >
                  {/* <a href="/home">Delhi, Bangalore</a>
                  <a href="tel:9972461001">+91-9972461001</a>
                  <a href="tel:9945121001">+91-9945121001</a>
                  <a href="mailto:project@projectwalla.com">
                    project@projectwalla.com
                  </a> */}
                  <div id="contact" class="contact">
                    <div className="">
                      <div className="col-md-8">
                        <div className="info">
                          <div className="address">
                            <i className="fa fa-map-marker"></i>
                            <h4>Location:</h4>
                            <p>
                              <a href="/home">Delhi, Bangalore</a>
                            </p>
                          </div>

                          <div className="email">
                            <i className="fa fa-envelope"></i>
                            <h4>Email:</h4>
                            <p>
                              <a href="mailto:project@projectwalla.com">
                                project@projectwalla.com
                              </a>
                            </p>
                          </div>

                          <div className="phone">
                            <i className="fa fa-phone"></i>
                            <h4>Call:</h4>
                            <p>
                              <a href="tel:9972461001">+91-9972461001</a>,
                              &nbsp;&nbsp;
                              <a href="tel:9945121001">+91-9945121001</a>
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
    </Fragment>
  );
};

export default ContactPage;
