import React, {Fragment} from 'react';
import {WhyUsSubData} from "../services/WhyUsService";
import ImgTextListBox from "../components/Common/Img_Text_List_Box";
import OurFeature from "../components/Common/OurFeature";

const WhyUsPage = () => {
    return (
        <Fragment>
            <div className="banner-bottom" id="about">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        Why Us
                        <span>We Provide Best Project according to user needs with effective work.</span>
                    </h3>
                    <ImgTextListBox
                        data={WhyUsSubData}
                        head="We Support u at each stage."
                        para=""
                        aosTypeText="fade-left"
                        aosTypeImg="fade-right"
                        imgUrl="https://lh3.googleusercontent.com/ZRw_VjQH9nSW4A8iprYVo4GmXV16UPziQwt1TDrIv-IBeSQFuBJeSQJf2LcYUwXq0Xv6oGU4fsONTG3A4YMzd28LZn0VJ5a7cEV7Ua-lHoBp4wh8RBNn9uA2vYEfq3u9zF8ioxuW83U9dxbskSGbETX0NALmHWpN7pu8NM7KvRIOY69Xc_Ln_PRChe7lyDFMFJm4X0ishml-VWIy-d-Szfb2oO-0pWXEX_Q5ZE5XyTmZ8_a8Chxk3t5aArYLfhoiYZ0ftlp0nMrayk95UUXPAuMEwWoGzdrBF-W8TWghtFNyBi4XSV1fsTnrY2l5wQifFhU2kmDrYtbecx8MGp-c-KBnv9_s2SAbRjLK3eZr1BlLVHmOM8yS7-eGVllEbptWon0WL9zTQobGquqammdHjhcSVyV9L1BgsKpUOMwFFmtJ9TlfyzPzX_6th75wuHLTKhL7fHruP98d9LjytFULTtPvWNSVukjegBMOstwUMU6rKDSswrxWpC-Sc-id4bt5D5bvRMFXD9DUhyZztsjcsCLiuoo_8GyWwMlnGIpKgpRmXj9XKeN_6V3FI3Br2Iy7Dc2mYM6lL8nuOiIgUq5EhC9LwqcreXmOmSgtrqa_gmkHnsQycNqiiVM9Hv0xwWMjkFfkNfykbrS_XEf8If2T9kR4EWKv1QjRpo_WNTHrD0Zir6tXUNNgW-MEf3Zc2TekGHf-pSOTpqvS5UFh8Ei5xJQ=w959-h667-no?authuser=0"
                        altName="ProjectWalla Mission and Vision"
                        imgQuote="ProjectWalla - is a unit of S SQUARE EMPOWER"
                    />
                </div>
            </div>
                    <OurFeature/>
        </Fragment>
    );
};

export default WhyUsPage;