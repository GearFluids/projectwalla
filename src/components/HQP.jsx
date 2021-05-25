import React, {Fragment} from 'react';
import {ContainerHSS} from "../services/HQPService";
import ImgBox from "./Common/Img_Box";
import TextBox from "./Common/Text_Box";

const HQP = () => {
    return (
        <Fragment>
            <div className="banner-bottom" id="hss">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        High Quality Project Solution
                        <span>We'll cover you on High Software Solutions</span>
                    </h3>
                    <div className="w3ls_banner_bottom_grids">
                        <ImgBox
                            aosType="fade-right"
                            imgUrl="https://gearfluids.com/assets/images/gearfluids-about-us.jpg"
                            altName="High Software Security"
                            imgQuote="ProjectWalla - The best Project Research in India"
                            width="100%"
                            height="auto"
                        />
                        <TextBox
                            aosType="fade-left"
                            data={ContainerHSS}
                        />
                        <div className="clearfix"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default HQP;
