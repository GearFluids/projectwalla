import React, {Fragment} from 'react';

const ImgRender = ({ aosType, imgUrl, altName, imgQuote }) => {
    return (
        <Fragment>
            <div className="w3_agile_services_grid1" data-aos={aosType}>
                <img src={imgUrl} alt={altName} className="img-responsive"/>
                <div className="w3_blur"/>
                <h5 className="text-center">{imgQuote}</h5>
            </div>
        </Fragment>
    );
};

export default ImgRender;