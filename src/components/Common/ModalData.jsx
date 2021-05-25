import React, {Fragment} from 'react';
import Modal from "./Modal";

const ModalData = () => {
    return (
        <Fragment>
            <Modal id="myModal" title="new...party..." imgUrl="./images/g5.jpg" para="text5"/>
            <Modal id="myModalOne" title="new...party..." imgUrl="./images/g3.jpg" para="text3"/>
            <Modal id="myModalTwo" title="new...party..." imgUrl="./images/g4.jpg" para="text4"/>
            <Modal id="myModalThree" title="new...party..." imgUrl="./images/g2.jpg" para="tex2"/>
        </Fragment>
    );
};

export default ModalData;