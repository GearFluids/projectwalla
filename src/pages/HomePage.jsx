import React from 'react';
import HomeBanner from "../components/HomeBanner";
import HQP from "../components/HQP";
import Client from "../components/Client";
import Stats from "../components/Stats";

const HomePage = () => {
    return (
        <div>
            <HomeBanner/>
            <HQP/>
            <Client />
            <Stats/>
        </div>
    );
};

export default HomePage;
