import React, { Fragment } from "react";
import SubListBox from "./Sub_List_Box";

function UniqueListBox({ data, aosTypeText, head, para }) {
  return (
    <Fragment>
      <div className="col-md-6 agileits_services_grid" data-aos={aosTypeText}>
        <div className="col-md-12 agileits_services_grid">
          <h3>{head}</h3>
          <p>{para}</p>
          <SubListBox LOne={data} />
        </div>
      </div>
    </Fragment>
  );
}

export default UniqueListBox;
