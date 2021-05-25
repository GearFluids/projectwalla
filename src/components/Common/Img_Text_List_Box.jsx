import React, {Fragment} from 'react';
import ImgBox from "./Img_Box";
import ListBox from "./List_Box";

const ImgTextListBox = ({...rest}) => {
    return (
        <Fragment>
            <div className="w3ls_banner_bottom_grids">
                <ImgBox {...rest}/>
                <ListBox {...rest}/>
                <div className="clearfix"/>
            </div>
        </Fragment>
    );
};

export default ImgTextListBox;