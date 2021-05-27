import React, { Fragment } from "react";

const TextBox = ({ data, aosTypeText, headText, para }) => {
  return (
    <Fragment>
      <div className="col-md-6 agileits_services_grid" data-aos={aosTypeText}>
        <h3>{data[headText]}</h3>
        {/* <p>{data[paraText]}</p> */}
        {data[para].map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </Fragment>
  );
};

TextBox.defaultProps = {
  headText: "head",
  para: "para",
};

export default TextBox;
