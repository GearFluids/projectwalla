import React, {Fragment} from 'react';
import TextBox from "./Text_Box";
import ImgBox from "./Img_Box";

const ImgTextBlock = ({...rest}) => {
    return (
        <Fragment>
            <div className="w3ls_banner_bottom_grids">
                <TextBox {...rest}/>
                <ImgBox {...rest}/>
                <div className="clearfix"/>
            </div>
        </Fragment>
    );
};

export default ImgTextBlock;