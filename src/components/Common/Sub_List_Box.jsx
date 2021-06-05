import React, { Fragment, useState } from "react";
import { rAngle } from "../../services/icons";

function SubListBox({ LOne }) {
  const [viewMore, setViewMore] = useState(false);
  let icon = "fa fa-angle-";
  icon += viewMore ? "down" : "up";
  return (
    <Fragment>
      <ol className="container pl-5 col-md-12 col-sm-12 agileits_services_grid">
        {(viewMore ? LOne : LOne.slice(0, 5)).map((slist, index) => (
          <li key={index} className="mb-1">
            <i className={`${rAngle} text-primary fw-bold`} /> &nbsp;
            {slist}
          </li>
        ))}
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            setViewMore(!viewMore);
          }}
        >
          View {!viewMore ? "More" : "Less"} <i className={icon} />
        </button>
      </ol>
      {/* <ImgBox imgUrl={mechanical} width="auto" height="auto" /> */}
    </Fragment>
  );
}

export default SubListBox;
