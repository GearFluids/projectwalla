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
                  style={{ margin: "5em 0" }}
                >
                  <div className="card-body">
                    <dl className="row remove-anchore-link">
                      <dt className="col-sm-2 text-center bg-info my-auto p-3 rounded">
                        <i className="fa fa-map-marker" />
                      </dt>
                      <dd className="col-sm-10 justify-content-around my-auto">
                        <a href="/home">Delhi, Bangalore</a>
                      </dd>
                    </dl>
                    <dl className="row remove-anchore-link">
                      <dt className="col-sm-2 text-center bg-info my-auto p-3 rounded">
                        <i className="fa fa-phone" />
                      </dt>
                      <dd className="col-sm-10 julist-groupy-content-around my-auto">
                        <li className="list-group">
                          <a href="tel:9972461001">+91-9972461001</a>
                        </li>
                        <li className="list-group">
                          <a href="tel:9945121001">+91-9945121001</a>
                        </li>
                      </dd>
                    </dl>
                    <dl className="row remove-anchore-link">
                      <dt className="col-sm-2 text-center bg-info my-auto p-3 rounded">
                        <i className="fa fa-envelope" />
                      </dt>
                      <dd className="col-sm-10 justify-content-around my-auto">
                        <a href="mailto:project@projectwalla.com">
                          project@projectwalla.com
                        </a>
                      </dd>
                    </dl>
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
