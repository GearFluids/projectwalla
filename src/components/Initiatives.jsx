import React, { Fragment } from "react";

function Initiatives(props) {
  return (
    <Fragment>
      <div className="hide-space">
        <div className="banner-bottom" id="about">
          <div className="container">
            <h3 className="heading-agileinfo" data-aos="zoom-in">
              Our Initiatives
            </h3>
            <div className="row">
              <div className="col m-auto initiative-class text-center">
                <img
                  src="https://gearfluids.com/assets/images/cfdgeeks.png"
                  alt="cfdgeeks.png"
                  width="50%"
                  height="50%"
                />
              </div>
              <div className="col m-auto initiative-class text-center">
                <img
                  src="https://gearfluids.com/assets/images/MechRobo.png"
                  alt="cfdgeeks.png"
                  width="50%"
                  height="50%"
                />
              </div>
              <div className="col m-auto initiative-class text-center">
                <img
                  src="https://gearfluids.com/assets/images/battlefreak.jpg"
                  alt="cfdgeeks.png"
                  width="50%"
                  height="50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Initiatives;
