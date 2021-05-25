import React, {Fragment} from 'react';

const AddressList = ({data, key, text, icon}) => {
    return (
            <Fragment>
                <ul className="con_inner_text">
                    {data.map(item => <li key={item[key]}>
                        <span className={item[icon]}
                              aria-hidden="true"/>
                        {item[text]}
                    </li>)}
                </ul>
        </Fragment>
    );
};
AddressList.defaultProps = {
            key : "key",
            text : "text",
            icon : "icon",
        }
export default AddressList;