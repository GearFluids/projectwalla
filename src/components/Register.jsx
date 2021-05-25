import React, {Fragment} from 'react';

const Register = () => {
    return (
        <Fragment>
            <div className="register-sec-w3l jarallax" id="book">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        InQuery form
                        <span className="thr">
                            Write your Query related to Project Making we will try to clear your doubts.
                        </span>
                    </h3>
                    <div className="book-appointment" data-aos="zoom-in">
                        <form action="#" method="post">
                            <div className="gaps">
                                <p/>
                                <input type="text" name="Name" placeholder="Name" required=""/>
                            </div>
                            <div className="gaps">
                                <p/>
                                <input type="email" name="email" placeholder="Email" required=""/>
                            </div>
                            <div className="gaps">
                                <p/>
                                <input type="text" name="Phone Number" placeholder="Phone Number" required=""/>
                            </div>
                            <div className="gaps">
                                <textarea name="Message" placeholder="Message..." required=""/>
                            </div>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Register;