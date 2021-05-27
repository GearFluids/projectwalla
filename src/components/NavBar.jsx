import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { projectwallaLogo } from "../services/ImgUrlService";
import Stars from "./Common/Stars";

const NavBar = ({ phoneNumber }) => {
  const url = `tel:{phoneNumber}`;
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="marquee_status">
          <marquee
            behavior="scroll"
            direction="left"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            Hi there, welcome to our site, we are your complete phd guidance
            spot, where you can expect a high quality work. Your work will be
            secured since we neither have tie-up with any university nor
            outsource your work. We don’t share your details with other clients.
            The person next to you might also be our client, but you may not
            know… we are that confidential. And our employees are full-time
            workers.
          </marquee>
        </div>
        <div className="left-content common-content">
          <span>
            <Stars />
            &nbsp;<span className="badge rating-success">4.7/5</span>
          </span>
        </div>
        <div className="right-content common-content">
          <span>
            <a href={url} rel="noreferrer">
              <i className="fa fa-whatsapp" /> 9972461001
            </a>
          </span>
        </div>
      </div>
      <div className="navbar-common">
        <div className="wthree-different-dot">
          <div className="head">
            <div className="container">
              <div className="navbar-top">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <div
                    className="navbar-brand logo"
                    onClick={() => window.location.reload(false)}
                  >
                    <span>
                      <Link to="/">
                        <img
                          src={projectwallaLogo}
                          alt="ProjectWalla-logo"
                          width="50px"
                          height="auto"
                        />
                        &nbsp; ProjectWalla
                      </Link>
                    </span>
                  </div>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav link-effect-4">
                    <li
                      className="active first-list"
                      onClick={() => window.location.reload(false)}
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us" className="scroll">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/why-us" className="scroll">
                        Why Us
                      </Link>
                    </li>
                    {/*<li><Link to="/services" className="scroll">services</Link></li>*/}
                    <li>
                      <Link
                        to="/services"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span data-letters="Pages">Services</span>
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/academic" className="scroll">
                            {" "}
                            <i className="fa fa-angle-right" />
                            &nbsp;Academic Project Assistance
                          </Link>
                        </li>
                        <li>
                          <Link to="/research" className="scroll">
                            {" "}
                            <i className="fa fa-angle-right" />
                            &nbsp;Research &amp; Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/proofreading" className="scroll">
                            {" "}
                            <i className="fa fa-angle-right" />
                            &nbsp;ProofReading
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/project-domain" className="scroll">
                        Project Domain
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs" className="scroll">
                        Blog
                      </Link>
                    </li>

                    <li>
                      <a
                        href="?"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span data-letters="Pages">Contact</span>
                        <span className="caret" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/contact-us" className="scroll">
                            <i className="fa fa-angle-right" />
                            &nbsp;Contact Us
                          </Link>
                        </li>
                        <li>
                          <NavLink to="" className="scroll">
                            <i className="fa fa-angle-right" />
                            &nbsp;Careers
                          </NavLink>
                        </li>
                        {/*<li><a href="#" className="scroll"><i className="fa fa-angle-right"/>&nbsp;FAQ</a></li>*/}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid white-border-line" />
    </Fragment>
  );
};

export default NavBar;
