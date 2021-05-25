import React, {Fragment} from 'react';
import FeatureBox from "./Feature_Box";
import {WhyUsOurFeature} from "../../services/WhyUsService";

const OurFeature = () => {
    return (
        <Fragment>
            <div className="services jarallax" id="services">
                <h3 className="heading-agileinfo" data-aos="zoom-in">Services
                    <span className="thr">We Provide Best Service to complete your Project in best possible way.</span>
                </h3>
                <FeatureBox data={WhyUsOurFeature}/>
            </div>
        </Fragment>
    );
};

export default OurFeature;