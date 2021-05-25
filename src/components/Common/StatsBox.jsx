import React, {Fragment} from 'react';

const StatsBox = ({title, stats,icon, aos, dmax, ddelay}) => {
    return (
        <Fragment>
            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6 stats-grid text-center" data-aos={aos}>
                <div className="stats-img w3-agileits">
                    <i className={icon} aria-hidden="true"/>
                </div>
                <p>{title}</p>
                <div className='numscroller numscroller-big-bottom' data-slno='1' data-min='0'
                     data-max={dmax} data-delay={ddelay} data-increment="1">{stats}
                </div>
            </div>
        </Fragment>
    );
};

export default StatsBox;
