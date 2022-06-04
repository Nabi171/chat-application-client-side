import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../Footer/Footer';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    return (
        <div>

            <TopBanner></TopBanner>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;