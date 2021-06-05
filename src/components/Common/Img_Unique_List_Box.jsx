import React, { Fragment } from "react";
import ImgBox from "./Img_Box";
import UniqueListBox from "./Unique_List_Box";

function ImgUniqueListBox({ ...rest }) {
  return (
    <Fragment>
      <div className="w3ls_banner_bottom_grids">
        <ImgBox {...rest} />
        <UniqueListBox {...rest} />
        <div className="clearfix" />
      </div>
    </Fragment>
  );
}

export default ImgUniqueListBox;
