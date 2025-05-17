import React from 'react';
import '../App.css';
import mission from '../images/mission.svg';
import vision from '../images/vision.svg';
import capacity from '../images/capacity.svg';
import icon1 from './../images/icon01.png';
import icon2 from './../images/icon02.png';
import icon3 from './../images/icon03.png';
import icon4 from './../images/icon04.png';
import icon5 from './../images/icon5.png';
import icon6 from './../images/icon06.png';
import icon7 from './../images/icon07.png';
import icon8 from './../images/icon08.png';
import experience from './../images/new/5_years_of_experience.svg';
import warranty from './../images/new/10_years_warranty.svg';
import homes from './../images/new/500_homes_delivered.svg';
import quality from './../images/new/Assured_Quality.svg';
import custom from './../images/new/custom_design_solutions.svg';
import timely from './../images/new/timely_project_completion.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

AOS.init();

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

export default class Mission extends React.Component {
    render() {
        return (
            <div className="">

                {/* Light background strip wrapping the sections */}
                <div style={{
                    backgroundColor: '#ffffff', // Light background color
                    padding: '40px 0', // Vertical padding for the strip
                    borderRadius: '5px', // Optional: Rounded corners for the strip
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Optional: Light shadow for a subtle effect
                }}>

{/*                    <div className="row p-0 m-0">
                        // Mission 
                        <div className="col-sm-4 mission-all-tab tab-black">
                            <div className="row m-xl-0">
                                <div className="col-sm-12 ml-xl-1">
                                    <img className="mission-icon-tab" src={mission} alt="mission-img" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                    <p data-aos="flip-left" className="about-sub-topic text-light sub-topic-tab">
                                        OUR <span className="yellow-colour">MISSION</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row mr-xl-4">
                                <div className="col-sm-12 ml-xl-3">
                                    <p data-aos="fade-up" className="mission-text text-tab">
                                        Our mission is to deliver exceptional design solutions that exceed client expectations...
                                    </p>
                                </div>
                            </div>
                        </div>

                        // Vision 
                        <div className="col-sm-4 mission-all-tab tab-yellow">
                            <div className="row m-xl-0">
                                <div className="col-sm-12 ml-xl-1">
                                    <img className="mission-icon-tab" src={vision} alt="vision-img" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                    <p data-aos="flip-left" className="about-sub-topic sub-topic-tab">
                                        OUR <span className="text-light">VISION</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row mr-xl-5">
                                <div className="col-sm-12 ml-xl-3">
                                    <p data-aos="fade-up" className="mission-text text-dark text-tab">
                                        Our internationally experienced team is driven by the belief that exceptional design...
                                    </p>
                                </div>
                            </div>
                        </div>

                        // Capacity 
                        <div className="col-sm-4 mission-all-tab tab-black">
                            <div className="row m-xl-0">
                                <div className="col-sm-12 ml-xl-1">
                                    <img className="mission-icon-tab" src={capacity} alt="capacity-img" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-12">
                                    <p data-aos="flip-left" className="about-sub-topic sub-topic-tab text-light">
                                        OUR <span className="yellow-colour">CAPACITY</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row mr-xl-4">
                                <div className="col-sm-12 ml-xl-3">
                                    <p data-aos="fade-up" className="mission-text text-tab">
                                        We provide comprehensive services in architecture, master planning, interior design...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Why Choose Us Section */}
                        <div className="row">
                                <div className="col-sm-12">
                                    <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic add-margin-about-sub">
                                        WHY CHOOSE <span className="yellow-colour">US?</span>
                                    </p>
                                </div>
                            </div>
                            <Carousel
                                responsive={responsive}
                                autoPlay={true}
                                infinite={true}
                                arrows={true}
                                showDots={false}
                                swipeable={true}
                                draggable={true}
                            >
                                <div className="text-center">
                                    <img className="about-img custom-width" src={experience} alt="Experience" />
                                    <p className="mt-3" style={{ fontWeight: 600 }}>
                                        <span>10+ years</span><br />
                                        <span>Crafting Excellence</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img className="about-img custom-width" src={warranty} alt="Warranty" />
                                    <p className="mt-3" style={{ fontWeight: 600 }}>
                                        <span>15 years</span><br />
                                        <span>Of Guaranteed Trust</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img className="about-img custom-width" src={homes} alt="Homes" />
                                    <p className="mt-3" style={{ fontWeight: 600 }}>
                                        <span>500+ Homes</span><br />
                                        <span>Delivered with Care</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img className="about-img custom-width" src={timely} alt="Timely Delivery" />
                                    <p className="mt-3" style={{ fontWeight: 600 }}>
                                        <span>On Time</span><br />
                                        <span>Every Time</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img className="about-img custom-width" src={quality} alt="Quality Materials" />
                                    <p className="mt-3" style={{ fontWeight: 600 }}>
                                        <span>Best Quality</span><br />
                                        <span>Materials, Guaranteed</span>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <img className="about-img custom-width" src={custom} alt="Custom Design" />
                                    <p className="mt-3" style={{ fontWeight: 600 }}>
                                        <span>Personalized</span><br />
                                        <span>Designs Tailored for You</span>
                                    </p>
                                </div>
                            </Carousel>
                        </div>


                {/* Icon Carousel for mobile */}
                <div className="row ml-0 mr-0 mt-5 mb-5 mobile-show">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        infinite={true}
                        arrows={true}
                        showDots={false}
                        swipeable={true}
                        draggable={true}
                    >
                        {[icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8].map((icon, index) => (
                            <div key={index} className="text-center">
                                <img className="about-img custom-width" src={icon} alt={`icon-${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        );
    }
}
