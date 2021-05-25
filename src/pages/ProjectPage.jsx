import React, {Fragment} from 'react';
import ImgTextBlock from "../components/Common/Img_Text_Block";
import {ResearchSimpleData, ResearchSubData} from "../services/ResearchService";
import { researchTopic, serviceProjectProcedure} from "../services/ImgUrlService";
import Client from "../components/Client";
import ImgTextListBox from "../components/Common/Img_Text_List_Box";

const ProjectPage = () => {
    return (
        <Fragment>
            <div className="banner-bottom" id="about">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        Project Domain
                        <span>We Provide Best Research Domain Possible.</span>
                    </h3>
                    <ImgTextBlock
                        data={ResearchSimpleData}
                        aosTypeText="fade-down"
                        aosTypeImg="fade-up"
                        imgUrl={researchTopic}
                        altName="High Security Solution"
                        imgQuote="ProjectWalla - The best Project Research in India"
                    />
                    <ImgTextListBox
                        data={ResearchSubData}
                        head="Fields We Cover"
                        para="These are the following fields we cover to so that we can give our service to as many students as possible."
                        aosTypeText="fade-down"
                        aosTypeImg="fade-right"
                        imgUrl={serviceProjectProcedure}
                        altName="ProjectWalla Mission and Vision"
                        imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
                    />

                </div>
            </div>
            <Client/>
        </Fragment>
    );
};

export default ProjectPage;