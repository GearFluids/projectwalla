import React, { Fragment } from "react";

const SideNav = ({ phoneNumber }) => {
  const url = `https://wa.me/91${phoneNumber}?text=I'm interested in (your need Or write your Own message here)`;
  return (
    <Fragment>
      <div
        aria-orientation="vertical"
        className="side_style-container line leftLine"
      >
        <ul className="social_sytle-list vertical-line">
          <li>
            <a href={url} target="_blank" rel="noreferrer">
              <i className="fa fa-whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SideNav;
