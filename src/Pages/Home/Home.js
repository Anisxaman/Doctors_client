import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../../Pages/Services/Services';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';

const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Services></Services>
        <AppoinmentBanner></AppoinmentBanner>
        
            
        </div>
    );
};

export default Home;