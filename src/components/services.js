import React from 'react';
import '../App.css';
import img from '../images/about.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default class AboutUs extends React.Component {

    render() {
        return (
            <div className="container aboutUs-custom-top  container-sm ">
                <div id="#scrolly-div" className="row add-mobile-padding">
                    <div className="col-sm-6 col-md-6 mt-sm-5">
                        <div className="row mt-sm-5">
                            <div data-aos="fade-right" data-aos-duration="1000" className="col-2 col-sm-1">
                                <span><hr className="slash"></hr></span>
                            </div>
                            <div className="col-10 col-sm-11">
                                <p data-aos="fade-left" data-aos-duration="1000" className="about-topic"> SERVICES</p>
                            </div>
                        </div>
                        <div className="row">
                            <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic">WHAT WE <span className="yellow-colour">OFFER</span></p>
                        </div>
                        <div className="row">

                            <div className="col-sm-8 col-md-12">
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="about-text ">
                                At Habitale Interiors, we offer a comprehensive range of interior 
                                design services tailored to meet your lifestyle and aesthetic 
                                preferences. From space planning and 3D visualizations to modular 
                                kitchen setups and complete home makeovers, our services cover 
                                every step of the design journey. Whether it's a modern apartment, 
                                a cozy villa, or a commercial workspace, we bring creativity, 
                                functionality, and elegance into every project. Our team collaborates 
                                closely with clients to understand their needs and delivers custom 
                                solutions that balance style with practicality.
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-6 col-md-6 mt-lg-5">
                        <img className="about-img about-img-tab" src={img} alt="about-us-img"></img>
                    </div>
                </div>
            </div >
        )
    };
};



