import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <Fragment>
      <div className="w3-banner jarallax">
        <div className="banner">
          <div className="container">
            <div className="slider">
              <div id="top" className="callbacks_container-wrap">
                <ul className="rslides" id="slider3">
                  <li>
                    <div className="slider-info" data-aos="fade-left">
                      {/*<h6 data-aos = "zoom-in">PARTY OF THIS YEAR</h6>*/}
                      <h3
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        style={{ textTransform: "none", letterSpacing: "2px" }}
                      >
                        Revolutionising Education
                      </h3>
                      <p data-aos="fade-left" style={{ fontWeight: "bold" }}>
                        Build the project with us and understand the better way
                        of approaching the Education.
                      </p>
                      <div className="more-button">
                        <Link
                          to="/services"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBanner;
