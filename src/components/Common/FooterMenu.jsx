import React, { Fragment } from "react";

const FooterMenu = ({ data, aosType, url, head, key, text, icon }) => {
  return (
    <Fragment>
      <div className="col-md-3 w3layouts_footer_grid" data-aos={aosType}>
        <h2>{head}</h2>
        <ul className="con_inner_text">
          {data.map((item) => (
            <li key={item[key]}>
              <span className={item[icon]} />
              <a href={item[url]}>{item[text]}</a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
FooterMenu.defaultProps = {
  key: "key",
  text: "text",
  icon: "icon",
  url: "url",
};
export default FooterMenu;
