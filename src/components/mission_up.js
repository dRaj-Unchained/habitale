import React from 'react';
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

import mission from '../images/mission.svg';
import vision from '../images/vision.svg';
import capacity from '../images/capacity.svg';
import experience from '../images/new/5_years_of_experience.svg';
import warranty from '../images/new/10_years_warranty.svg';
import homes from '../images/new/500_homes_delivered.svg';
import quality from '../images/new/Assured_Quality.svg';
import custom from '../images/new/custom_design_solutions.svg';
import timely from '../images/new/timely_project_completion.svg';
import icon7 from './../images/icon07.png';
import icon8 from './../images/icon08.png';

AOS.init();

export class Mission extends React.Component {
    render() {
        return (
            <div className="">
                <div className="row p-0 m-0">
                    {/* MISSION */}
                    <div className="col-sm-4 mission-all-tab tab-black">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={mission} alt="mission-img" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic text-light sub-topic-tab">OUR <span className="yellow-colour">MISSION</span></p>
                            </div>
                        </div>
                        <div className="row mr-xl-4">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-tab">
                                    Our mission is to provide world-class design solutions to our clients. We aim to deliver exceptional design solutions that exceed client expectations...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* VISION */}
                    <div className="col-sm-4 mission-all-tab tab-yellow">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={vision} alt="vision-img" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic sub-topic-tab">OUR <span className="text-light">VISION</span></p>
                            </div>
                        </div>
                        <div className="row mr-xl-5">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-dark text-tab">
                                    Our internationally experienced team is driven by the belief that exceptional design...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CAPACITY */}
                    <div className="col-sm-4 mission-all-tab tab-black">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={capacity} alt="capacity-img" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic sub-topic-tab text-light">OUR <span className="yellow-colour">CAPACITY</span></p>
                            </div>
                        </div>
                        <div className="row mr-xl-4">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-tab">
                                    We provide comprehensive services in architecture, master planning, interior design, and graphic design...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// WhyChooseUs Component (Separate)
export const WhyChooseUs = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    const images = [
        { src: experience, title: "Experience", desc: "Over 10 years of interior design excellence." },
        { src: warranty, title: "Warranty", desc: "Up to 10 years warranty on all projects." },
        { src: homes, title: "Homes Delivered", desc: "500+ homes designed and delivered." },
        { src: timely, title: "On-Time Delivery", desc: "Guaranteed project completion timeline." },
        { src: quality, title: "Quality Materials", desc: "Only premium quality materials used." },
        { src: custom, title: "Custom Design", desc: "Tailor-made design solutions for you." },
        { src: icon7, title: "Affordable", desc: "Competitive pricing without compromise." },
        { src: icon8, title: "Support", desc: "Dedicated 24x7 customer support." },
    ];

    return (
        <div className="why-choose-us mt-5 mb-5">
            <h2 className="text-center mb-4">Why Choose Us</h2>
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="text-center p-2">
                        <img src={item.src} alt={item.title} className="about-img custom-width mb-2" />
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
