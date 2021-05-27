import React, { Fragment } from "react";

const FeatureBox = ({ data, aosType, para, icon, key, head }) => {
  return (
    <Fragment>
      <div className="container-fluid">
        {data.map((item) => (
          <div
            key={item[key]}
            className="col-md-4 ser-1"
            data-aos={item[aosType]}
          >
            <div className="grid1">
              <h4 style={{ fontSize: "18px" }}>
                <span>
                  <i className={item[icon]} />
                </span>
                {item[head]}
              </h4>
              <p>{item[para]}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
FeatureBox.defaultProps = {
  aosType: "aosType",
  para: "para",
  icon: "icon",
  key: "key",
  head: "head",
};
export default FeatureBox;
