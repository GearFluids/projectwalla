import React, {Fragment} from 'react';
import StatsBox from "./Common/StatsBox";

const Stats = () => {
    return (
        <Fragment>
            <div className="stats news-w3layouts jarallax">
                <div className="container">
                    <div className="stats-agileinfo agileits-w3layouts">
                        <StatsBox title="Professionals" aos="fade-right" icon="fa fa-users" stats="50+" dmax= "50" ddelay=".5" />
                        <StatsBox title="Visit last month" aos="fade-up" icon="fa fa-calendar-check-o" stats="6000+" dmax= "6000" ddelay="2" />
                        <StatsBox title="Fields" aos="fade-down" icon="fa fa-briefcase" stats="46+" dmax= "46" ddelay=".5" />
                        <StatsBox title="Projects" aos="fade-left" icon="fa fa-trophy" stats="110+" dmax= "110" ddelay="8" />
                        <StatsBox title="Paper" aos="fade-right" icon="fa fa-file-text" stats="500+" dmax= "110" ddelay="8" />
                        <StatsBox title="Collaborators" aos="fade-up" icon="fa fa-handshake-o" stats="20+" dmax= "110" ddelay="8" />
                        <div className="clearfix"/>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Stats;
