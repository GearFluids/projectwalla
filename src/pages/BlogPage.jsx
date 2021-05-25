import React, {Fragment} from 'react';
import Blog from "../components/Common/Blog";
import {portfolioPosts} from "../services/BlogsService";
const BlogPage = ({key, url, title, text}) => {
    return (
        <Fragment>
            <div className="banner-bottom" id="about">
                <div className="container">
                    <h3 className="heading-agileinfo" data-aos="zoom-in">
                        Portfolio
                        <span>Here are all kind of necessary information you need.</span>
                    </h3>
                    <div className="row">
                        {portfolioPosts.map(data => <Blog key={data[key]}
                            url={data[url]}
                            title={data[title]}
                            text={data[text]}
                            width="100%"
                            height="150px"/>
                            )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
BlogPage.defaultProps = {
    key : "key",
    url : "url",
    title : "title",
    text : "text",
}

export default BlogPage;
