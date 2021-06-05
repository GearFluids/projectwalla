import React, { Fragment, useState } from "react";

const Blog = ({ url, title, text, width, height }) => {
  const [isMaxLen, setIsMaxLen] = useState(true);
  const [maxLen, setMaxLen] = useState(200);
  const [titleLen, setTitleLen] = useState(20);
  return (
    <Fragment>
      <div className="col-lg-3 col-md-6 col-sm-12 blogs">
        <div className="card p-4">
          <img
            src={url}
            className="card-img-top"
            alt="..."
            width={width}
            height={height}
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>
                {title.substring(0, titleLen)}
                {titleLen > 20 ? "" : "..."}
              </b>
            </h5>
            <p className="card-text text-center pt-3 text-justify blogs-para">
              <span>
                {text.substring(0, maxLen)}
                {maxLen > 200 ? "" : "..."}
              </span>
            </p>
            <hr />
            <button
              className="btn btn-primary"
              onClick={() => {
                setIsMaxLen(!isMaxLen);
                setMaxLen(isMaxLen ? 2000 : 200);
                setTitleLen(isMaxLen ? 2000 : 20);
              }}
            >
              Read {isMaxLen ? "More" : "Less"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
