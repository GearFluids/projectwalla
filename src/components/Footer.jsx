import React, { Fragment } from "react";
import {
  copyRightFooter,
  footerContainer,
  footerInnerText,
  services,
  socialInfo,
  weOffer,
  menuList,
} from "../services/FooterService";
import AddressList from "./Common/AddressList";
import SocialLink from "./Common/SocialLink";
import FooterMenu from "./Common/FooterMenu";

const Footer = ({
  headCol1,
  headCol2,
  headCol3,
  headCol4,
  fColGridSizeClass,
  classCR,
  titleCR,
  urlCR,
  designCR,
}) => {
  return (
    <Fragment>
      <div className="footer">
        <div className="container">
          <div className="f-bg-w3l">
            <div
              className={footerContainer[fColGridSizeClass]}
              data-aos="fade-right"
            >
              <h2>{footerContainer[headCol1]}</h2>
              <AddressList data={footerInnerText} />
              <SocialLink data={socialInfo} />
            </div>
            <FooterMenu
              data={menuList}
              head={footerContainer[headCol4]}
              aosType="fade-left"
            />
            <FooterMenu
              data={weOffer}
              // divClass={footerContainer[fColGridSizeClass]}
              head={footerContainer[headCol2]}
              aosType="fade-down"
            />
            <FooterMenu
              data={services}
              // divClass={footerContainer[fColGridSizeClass]}
              head={footerContainer[headCol3]}
              aosType="fade-up"
            />
            <div className="clearfix" />
          </div>
        </div>
        <p className={copyRightFooter[classCR]} data-aos="zoom-in">
          {copyRightFooter[titleCR]}
          <a href={copyRightFooter[urlCR]} target="_blank" rel="noreferrer">
            {copyRightFooter[designCR]}
          </a>
        </p>
      </div>
    </Fragment>
  );
};

Footer.defaultProps = {
  headCol1: "headingFContainer",
  headCol2: "headingLabelOne",
  headCol3: "headingLabelTwo",
  headCol4: "headingLabelThree",
  fColGridSizeClass: "fColGridSizeClass",
  ulITClass: "ulITClass",
  socialClass: "socialClass",

  keyIT: "keyIT",
  iconIT: "iconIT",
  textIT: "textIT",

  keySI: "keySI",
  iconSI: "iconSI",
  cNameSI: "cNameSI",
  urlSI: "urlSI",

  keyWO: "keyWO",
  textWO: "textWO",

  keySE: "keySE",
  textSE: "textSE",

  classCR: "classCR",
  titleCR: "titleCR",
  urlCR: "urlCR",
  designCR: "designCR",
};
export default Footer;
