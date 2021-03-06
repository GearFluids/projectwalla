import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhyUsPage from "./pages/WhyUsPage";
import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import SideNav from "./components/Common/SideNav";
import ProofReadingPage from "./pages/ProofReadingPage";
import RnDPage from "./pages/RnDPage";
import AcademicPage from "./pages/AcademicPage";
import Inquiry from "./components/Inquiry";

const App = () => {
  return (
    <Router>
      <NavBar phoneNumber="9972461001" />
      <SideNav phoneNumber="9972461001" />
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/why-us" component={WhyUsPage} />
        <Route path="/services" component={ServicePage} />
        <Route path="/academic" component={AcademicPage} />
        <Route path="/research" component={RnDPage} />
        <Route path="/proofreading" component={ProofReadingPage} />
        <Route path="/project-domain" component={ProjectPage} />
        <Route path="/blogs" component={BlogPage} />
        <Route path="/contact-Us" component={ContactPage} />
      </Switch>
      <Inquiry />
      <Footer />
    </Router>
  );
};

export default App;
