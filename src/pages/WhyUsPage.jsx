import React, { Fragment } from "react";
import { WhyUsSubData } from "../services/WhyUsService";
import ImgTextListBox from "../components/Common/Img_Text_List_Box";
import OurFeature from "../components/Common/OurFeature";
import { projectwallaLogo } from "../services/ImgUrlService";

const WhyUsPage = () => {
  return (
    <Fragment>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Why Us
            <span>
              We Provide Best Project according to user needs with effective
              work.
            </span>
          </h3>
          <ImgTextListBox
            data={WhyUsSubData}
            head="We Support u at each stage."
            para=""
            aosTypeText="fade-left"
            aosTypeImg="fade-right"
            imgUrl={projectwallaLogo}
            altName="ProjectWalla Mission and Vision"
            imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
          />
        </div>
      </div>
      <OurFeature />
    </Fragment>
  );
};

export default WhyUsPage;
