import React, {Fragment} from 'react';

const ImgBox = ({ aosTypeImg, imgUrl, altName, imgQuote, height, width}) => {
    return (
        <Fragment>
            <div className="col-md-6 agileits_services_grid" data-aos={aosTypeImg}>
                <div className="w3_agile_services_grid1">
                    <img src={imgUrl} alt={altName} className="img-responsive" width={width} height={height}/>
                    <div className="w3_blur"/>
                    <h5 className="text-center">{imgQuote}</h5>
                </div>
            </div>
        </Fragment>
    );
};

export default ImgBox;
