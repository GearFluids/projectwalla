import {
  envelope,
  facebook,
  google,
  instagram,
  marker,
  phone,
  rAngle,
  twitter,
} from "./icons";

const footerContainer = {
  headingFContainer: "Contact Information",
  headingLabelOne: "We Offer",
  headingLabelTwo: "Services",
  headingLabelThree: "Menu",
  fColGridSizeClass: "col-md-3 w3layouts_footer_grid",
  socialClass: "social_agileinfo",
  ulITClass: "con_inner_text",
};
const footerInnerText = [
  {
    key: "address",
    icon: marker,
    text: "Delhi, Bengaluru‌",
    url: "",
  },
  {
    key: "email",
    icon: envelope,
    text: "project@projectwalla.com",
    url: "",
  },
  {
    key: "phone1",
    icon: phone,
    text: "+91-9972461001",
    url: "",
  },
  {
    key: "phone2",
    icon: phone,
    text: "+91-9945121001",
    url: "",
  },
];

const socialInfo = [
  {
    key: "facebook",
    icon: facebook,
    cName: "w3-facebook",
    url: "",
  },
  {
    key: "twitter",
    cName: "w3-twitter",
    icon: twitter,
    url: "",
  },
  {
    key: "instagram",
    cName: "w3-instagram",
    icon: instagram,
    url: "",
  },
  {
    key: "google",
    cName: "w3-google",
    icon: google,
    url: "",
  },
];

const menuList = [
  { key: "aboutus", icon: rAngle, text: "About Us", url: "/about-us" },
  { key: "whyus", icon: rAngle, text: "Why Us", url: "/why-us" },
  { key: "services", icon: rAngle, text: "Services", url: "/services" },
  {
    key: "projectdomain",
    icon: rAngle,
    text: "Project Domain",
    url: "/project-domain",
  },
  { key: "blogs", icon: rAngle, text: "Blogs", url: "/blogs" },
];
const weOffer = [
  {
    key: "weReferGuide",
    icon: rAngle,
    text: "We Refer Guide",
    url: "/services",
  },
  { key: "Implement", icon: rAngle, text: "Implement", url: "/services" },
];

const services = [
  {
    key: "ourService",
    icon: rAngle,
    text: "Our ServicePage",
    url: "/services",
  },
  { key: "domain", icon: rAngle, text: "Domain", url: "/services" },
  {
    key: "sciSCIEIndex",
    icon: rAngle,
    text: "SCI & SCIE Index",
    url: "/services",
  },
  { key: "scopusIndex", icon: rAngle, text: "Scopus Index", url: "/services" },
];

const copyRightFooter = {
  classCR: "copyright",
  titleCR: "© 2021 ProjectWalla. All Rights Reserved | Design by ",
  urlCR: "https://oneeyehealer.github.io",
  designCR: "OneEyeHealer",
};
export {
  footerContainer,
  footerInnerText,
  socialInfo,
  menuList,
  weOffer,
  services,
  copyRightFooter,
};
