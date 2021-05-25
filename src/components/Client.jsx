import React, {Fragment} from 'react';
import {UserReview} from "../services/Testimonial";
import Reviews from "./Common/Reviews";

const Client = () => {
    return (
        <Fragment>
            <div className="clients-main jarallax" id="client">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        TESTIMONIALS
                        <span className="thr">Events Is A Professionally Managed Event </span>
                    </h3>
                    <Reviews
                        data={UserReview}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Client;