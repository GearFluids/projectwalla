import React, { Fragment } from "react";

function SubListBox({ LOne }) {
  return (
    <Fragment>
      <ol className="container pl-5 col-md-12 col-sm-4 agileits_services_grid">
        {LOne.map((slist, index) => (
          <li key={index}>{slist}</li>
        ))}
      </ol>
      {/* <ImgBox imgUrl={mechanical} width="auto" height="auto" /> */}
    </Fragment>
  );
}

export default SubListBox;
