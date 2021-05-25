import React, {Fragment} from 'react';
import {contact} from "../services/ImgUrlService";
import ImgTextListBlock from "../components/Common/Img_Text_List_Block";
import {ContactData} from "../services/ContactService";

const ContactPage = () => {
    return (
        <Fragment>
            <div className="banner-bottom" id="about">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        Contact Us
                        <span/>
                    </h3>
                    <ImgTextListBlock
                        data={ContactData}
                        aosTypeText="fade-left"
                        aosTypeImg="fade-right"
                        imgUrl={contact}
                        altName=""
                        imgQuote=""
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default ContactPage;
