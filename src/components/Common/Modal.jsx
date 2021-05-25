import React, {Fragment} from 'react';

const Modal = ({id, title, imgUrl, altName, para}) => {
    return (
        <Fragment>
            <div className="modal about-modal fade" id={id} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            <div className="agileits-w3layouts-info">
                                <img src={imgUrl} alt=""/>
                                <p>{para}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;