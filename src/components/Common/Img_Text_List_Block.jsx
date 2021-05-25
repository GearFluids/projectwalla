import React, {Fragment} from 'react';
import ImgBox from "./Img_Box";
import TextListBox from "./Text_List_Box";

const ImgTextListBlock = ({...rest}) => {
    return (
        <Fragment>
            <div className="w3ls_banner_bottom_grids">
                <ImgBox
                    {...rest}
                />
                <TextListBox
                    {...rest}
                />
                <div className="clearfix"/>
            </div>
        </Fragment>
    );
};

export default ImgTextListBlock;