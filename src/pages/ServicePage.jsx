import React, {Fragment} from 'react';
import ImgTextBlock from "../components/Common/Img_Text_Block";
import {ServiceSimpleData, ServiceSubData} from "../services/ServiceSimpleData";
import ImgTextListBox from "../components/Common/Img_Text_List_Box";
import {serviceHighlight, serviceProjectProcedure} from "../services/ImgUrlService";

const ServicePage = () => {
    return (
        <Fragment>
            <div className="banner-bottom" id="about">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        Services
                        <span>We Provide Best Service Possible.</span>
                    </h3>
                    <ImgTextBlock
                        data={ServiceSimpleData}
                        aosTypeText="fade-down"
                        aosTypeImg="fade-up"
                        imgUrl={serviceHighlight}
                        altName="High Security Solution"
                        imgQuote="ProjectWalla - The best Project Research in India"
                    />
                    <div className="col-md-12 agileits_services_grid">
                    <h3>Are you struggling? Are you low on your budget? We will save you from this tragedian!</h3>
                    <p>Our dear client! As a great researchProposal support company, we are ready to shape you! As a result of our efforts, we provide our clients with great work and great guidance and support in publishing journal articles and writing researchProposal treatises. We are affordable for all kinds of services. Therefore, we have earned the best name as the best researchProposal support in India. We are a great molder who molds you like a diamond with great guidance. We can ensure that we make the most of our knowledge to provide the best researchProposal guidance and academic researchProposal project support for all our work. We also develop all the work of the project with a vast group of experts who have vast knowledge in a particular field. All you need to do is ... hire us! We set your mind stress-free Complete Process of your Research project done with us!!</p>
                    </div>
                    <ImgTextListBox
                        data={ServiceSubData}
                        head="Project Procedure"
                        para="Follow these steps and you will able to complete you project in no time."
                        aosTypeText="fade-down"
                        aosTypeImg="fade-right"
                        imgUrl={serviceProjectProcedure}
                        altName="ProjectWalla Mission and Vision"
                        imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ServicePage;
