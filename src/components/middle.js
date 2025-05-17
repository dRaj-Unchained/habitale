import React, { Component } from 'react'
import DemoCarousel from './headerCarosal'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutUs from '../components/aboutUs';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/testimonials';
import DesignCollection from '../components/DesignCollection';



import Mission from './mission';
import Contact from './contact';

export default class middleSection extends Component {
    render() {
        return (
            <>
                <div id="home" className="section-padding">
                    <DemoCarousel></DemoCarousel>
                </div>
                <div id="about" className="section-padding-about">
                    <AboutUs></AboutUs>
                </div>
                <div id="services" className="section-padding-about">
                    <Services></Services>
                </div>
                <div id="portfolio" className="section-padding-about">
                    <Portfolio></Portfolio>
                </div>
                <div id="testimonials" className="section-padding-about">
                    <Testimonials></Testimonials>
                </div>
                <div id="design-collection" className="section-padding-about">
                    <DesignCollection />
                </div>
                <div>
                    <Mission></Mission>
                </div>
                <div id="contact">
                    <Contact></Contact>
                </div>

            </>
        )
    }
}