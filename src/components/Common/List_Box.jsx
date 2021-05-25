import React, { Fragment } from "react";

const ListBox = ({ data, key, aosTypeText, icon, head, para, subPara }) => {
  return (
    <Fragment>
      <div className="col-md-6 agileits_services_grid" data-aos={aosTypeText}>
        <div className="col-md-12 agileits_services_grid">
          <h3>{head}</h3>
          <p>{para}</p>
          {data.map((item) => (
            <div key={item[key]} data-aos="zoom-in">
              <p>
                <span
                  style={{
                    color: "#1d7ce2",
                    paddingRight: "5px",
                    fontSize: "18px",
                  }}
                >
                  <i className={item[icon]} />
                </span>
                {item[subPara]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
ListBox.defaultProps = {
  subPara: "subPara",
  icon: "icon",
  key: "key",
};
export default ListBox;
