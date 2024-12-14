import React, { Component } from 'react'
import DemoCarousel from './headerCarosal'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutUs from '../components/aboutUs';
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