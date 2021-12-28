import React from 'react';
import Services from '../../Pages/Services/Services';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
        <Navigation></Navigation>

        <Banner></Banner>
        <Services></Services>
        <AppoinmentBanner></AppoinmentBanner>
            
        </div>
    );
};

export default Home;