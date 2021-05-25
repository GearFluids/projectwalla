import React, {Fragment} from 'react';

const TextListBox = ({data, key, aosTypeText, icon, head, para}) => {
    return (
        <Fragment>
            <div className="col-md-6 agileits_services_grid"
                 data-aos={aosTypeText}>
                {/*<h3>{data[head]}</h3>*/}
                {/*<p>{data[para]}</p>*/}
                {/*{data.map(item => <p>{item[para]}</p>)}*/}
                <div className="col-md-12 agileits_services_grid">
                    {data.map(item => (
                        <div key={item[key]} data-aos="zoom-in">
                            <h3><span style={{color: "#FFD700", paddingRight: "5px", fontSize: "48px"}}>
                                <i className={item[icon]}/></span>
                                {item[head]}</h3>
                            <p>{item[para]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

TextListBox.defaultProps = {
    head : "subHead",
    para : "subPara",
    icon : "icon",
    key : "key",
}
export default TextListBox;