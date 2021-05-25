import React, {Fragment} from 'react';
import {AboutData, AboutSubData} from "../services/AboutUsService";
import ModalData from "../components/Common/ModalData";
import ImgTextBlock from "../components/Common/Img_Text_Block";
import ImgTextListBlock from "../components/Common/Img_Text_List_Block";
import mission_vision from '../media/projectwalla-aboutus-mission-vision.png';
import {aboutResearch} from "../services/ImgUrlService";

const AboutUsPage = () => {
    return (
        <Fragment>
            <ModalData/>
            <div className="banner-bottom" id="about">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        About Us
                        <span>We Provide Best Project according to user needs with effective work.</span>
                    </h3>
                    <ImgTextBlock
                        data={AboutData}
                        aosTypeText="fade-down"
                        aosTypeImg="fade-up"
                        imgUrl={aboutResearch}
                        altName="High Security Solution"
                        imgQuote="ProjectWalla - The best Project Research in India"
                    />
                    <ImgTextListBlock
                        data={AboutSubData}
                        aosTypeText="fade-left"
                        aosTypeImg="fade-right"
                        imgUrl={mission_vision}
                        width="100%"
                        heigth="auto"
                        altName="ProjectWalla Mission and Vision"
                        imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default AboutUsPage;
