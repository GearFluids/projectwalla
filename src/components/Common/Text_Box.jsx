import React, {Fragment} from 'react';

const TextBox = ({data, aosTypeText, headText, paraText }) => {
    return (
        <Fragment>
            <div className="col-md-6 agileits_services_grid"
                 data-aos={aosTypeText}>
                <h3>{data[headText]}</h3>
                <p>{data[paraText]}</p>
            </div>
        </Fragment>
    );
};

TextBox.defaultProps = {
    headText : "head",
    paraText : "para",
}

export default TextBox;
