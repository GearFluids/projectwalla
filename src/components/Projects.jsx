import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsList } from "../services/ProjectsServices";
import ImgUniqueListBox from "./Common/Img_Unique_List_Box";
function Projects({ key, title, src, alt, url, list }) {
  const [data, setData] = useState(ProjectsList[0]);
  const [iKey, setIkey] = useState("");

  return (
    <Fragment>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            Projects
            <span>
              List of Several Projects You can Check each Catagory of Projects.
            </span>
          </h3>
          <div className="container mb-3">
            {ProjectsList.map((project, i) => (
              <button
                key={project[key]}
                className={
                  project[key] === iKey
                    ? "btn btn-sm projects-btn btn-primary"
                    : "btn btn-sm projects-btn btn-outline-primary"
                }
                onClick={() => {
                  setData(ProjectsList[i]);
                  project[key] ? setIkey(project[key]) : setIkey("");
                  // setShown(true);
                }}
              >
                {project[title]}
              </button>
            ))}
          </div>
          <ImgUniqueListBox
            data={data[list]}
            head={`# ${data[title]} Engineering`}
            para={`Trending ${data[title]} Engineering Projects.`}
            aosTypeText="fade-down"
            aosTypeImg="fade-right"
            imgUrl={data[src]}
            altName={data[alt]}
            imgQuote={`ProjectWalla - Best ${data[title]} Engineering Projects.`}
          />
          <div className="container text-center">
            <Link to="/contact-Us/#contact-detail">
              <button className="btn btn-lg btn-primary px-3">
                <h2>
                  <b>Give</b>
                </h2>
                <h4>Your Requirements</h4>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
Projects.defaultProps = {
  key: "key",
  title: "title",
  url: "url",
  src: "src",
  alt: "alt",
  list: "list",
};

export default Projects;
