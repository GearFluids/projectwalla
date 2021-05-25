import React, {Fragment} from 'react';

const SocialLink = ({data, key, url, cName, icon}) => {
    return (
        <Fragment>
            <ul className="social_agileinfo">
                {data.map(item => <li key={item[key]}>
                    <a href={item[url]} className={item[cName]}>
                        <i className={item[icon]}/>
                    </a>
                </li>)}
            </ul>
        </Fragment>
    );
};

SocialLink.defaultProps = {
    key : "key",
    url : "url",
    text : "text",
    icon : "icon",
    cName : "cName",
}

export default SocialLink;