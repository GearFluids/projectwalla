import React, { Fragment } from "react";
import ImgTextBlock from "../components/Common/Img_Text_Block";
import { charts, idea } from "../services/ImgUrlService";
import { AcademicData, AcademicSubData } from "../services/ServiceSimpleData";
import ImgTextListBox from "./../components/Common/Img_Text_List_Box";
function AcademicPage(props) {
  return (
    <Fragment>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Our Assistance
            <span>
              Academic project assistance is one of our most valuable services
              for our customers, in which our brilliant experts are employed.
              And, due to their creative minds, they can provide devising ideas
              for the development of the careers of our clients.
            </span>
          </h3>
          <ImgTextBlock
            data={AcademicData}
            aosTypeText="fade-down"
            aosTypeImg="fade-up"
            imgUrl={idea}
            altName="projectwalla idea"
            imgQuote="“It’s two more sets of eyes to see what we are doing”"
            width="100%"
            heigth="auto"
          />
          <ImgTextListBox
            data={AcademicSubData}
            head="
          Why Choose Us"
            para=""
            aosTypeText="fade-down"
            aosTypeImg="fade-right"
            imgUrl={charts}
            altName="academic-project-assistance"
            imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default AcademicPage;
