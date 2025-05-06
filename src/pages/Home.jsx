import React from 'react';
import Hero from '../components/Hero';
import WorksWith from '../components/WorksWith';
import FAQ from '../components/FAQ';
import WhyChoose from '../components/WhyChoose';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WorksWith></WorksWith>
            <WhyChoose></WhyChoose>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;