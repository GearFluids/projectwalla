import React, { Fragment } from "react";
import ImgTextBlock from "../components/Common/Img_Text_Block";
import ImgTextListBox from "../components/Common/Img_Text_List_Box";
import {
  proofreading,
  serviceProjectProcedure,
} from "../services/ImgUrlService";
import {
  ProofReadingData,
  ProofReadingSubData,
} from "../services/ServiceSimpleData";

function ProofReadingPage(props) {
  return (
    <Fragment>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Our Proofreading &amp; Editing
            {/* <span>We Provide Best Service Possible.</span> */}
          </h3>
          <ImgTextBlock
            data={ProofReadingData}
            aosTypeText="fade-down"
            aosTypeImg="fade-up"
            imgUrl={proofreading}
            altName="proofreading"
            imgQuote="“It’s two more sets of eyes to see what we are doing”"
          />
          <ImgTextListBox
            data={ProofReadingSubData}
            head="Proofreading Features"
            para="There are the Main point that every student must remember while doing any project."
            aosTypeText="fade-down"
            aosTypeImg="fade-right"
            imgUrl={serviceProjectProcedure}
            altName="proofreading_main_features"
            imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
          />
          <div className="col-md-6 agileits_services_grid" data-aos="fade-down">
            <p>
              So, we will audit the project works according to your assertion
              and deliver it with perfection to satisfy your needs completely.
            </p>
            <p>
              Send your manuscript for professional editing and proofreading to{" "}
              <a href="mailto:project@projectwalla.com">
                project@projectwalla.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProofReadingPage;
