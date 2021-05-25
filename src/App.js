import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhyUsPage from "./pages/WhyUsPage";
import ServicePage from "./pages/ServicePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Register from "./components/Register";
import BlogPage from "./pages/BlogPage";
import SideNav from "./components/Common/SideNav";

const App = () => {
  return (
      <Router>
          <NavBar/>
          <SideNav phoneNumber="9972461001"/>
          <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path="/about-us" component={AboutUsPage}/>
              <Route path="/why-us" component={WhyUsPage}/>
              <Route path="/services" component={ServicePage}/>
              <Route path="/project-domain" component={ProjectPage}/>
              <Route path="/blogs" component={BlogPage}/>
              <Route path="/contact-Us" component={ContactPage}/>
          </Switch>
          <Register/>
          <Footer/>
      </Router>
  );
};

export default App;
