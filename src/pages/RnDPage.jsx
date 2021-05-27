import React, { Fragment } from "react";
import ImgTextBlock from "../components/Common/Img_Text_Block";
import { rnd } from "../services/ImgUrlService";
import { ResearchAndDevelopmentData } from "../services/ServiceSimpleData";

function RnDPage(props) {
  return (
    <Fragment>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Our Research &amp; Development
            <span>
              R&amp;D is a sector where we work with our zeal for our country
              which has many hurdles, but it can not achieve the expected
              outcomes because of several social relevance problems.
            </span>
          </h3>
          <ImgTextBlock
            data={ResearchAndDevelopmentData}
            aosTypeText="fade-down"
            aosTypeImg="fade-up"
            imgUrl={rnd}
            altName="Research and Development"
            imgQuote="“Open your minds and raise your curiosity with our Research and Development sectors”"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default RnDPage;
