import React from 'react';
import Hero from './Hero/Hero';
import Archive from './Archive/Archive';
import About from './About/About';
import Gallery from './Gallery/Gallery';

const Index = () => {
    return (
        <div>
            <Hero/>
            <Archive/>
            <About/> 
            <Gallery/>
        </div>
    )
}

export default Index;