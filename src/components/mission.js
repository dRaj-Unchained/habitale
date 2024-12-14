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
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

var Carousel = require('react-responsive-carousel').Carousel;

export default class Mission extends React.Component {

    render() {
        return (
            <div className="">
                <div className="row p-0 m-0">
                    <div className="col-sm-4 mission-all-tab tab-black">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={mission} alt="mission-img"></img>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic text-light sub-topic-tab">OUR <span className="yellow-colour">MISSION</span> </p>
                            </div>
                        </div>
                        <div className="row mr-xl-4">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-tab">Our mission is to provide world-class design solution to our clients .
                                Our mission is to deliver exceptional design solutions that exceed client expectations. We aim to create unique and captivating interior and exterior experiences defined by superior quality and individuality. Our team combines in-depth local knowledge with extensive expertise, driven by strong leadership, creative innovation, and a clear design vision. We are committed to delivering projects that inspire end users while adding value through cultural insight, commercial awareness, and cost efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mission-all-tab tab-yellow">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={vision} alt="vision-img"></img>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic sub-topic-tab">OUR <span className="text-light">VISION</span> </p>
                            </div>
                        </div>
                        <div className="row mr-xl-5">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-dark text-tab">
                                Our internationally experienced team is driven by the belief that exceptional design is achieved by professionals who deeply understand the intrinsic, commercial, and functional needs of our clients, end-users, and the communities we serve
                                   .</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mission-all-tab tab-black">
                        <div className="row m-xl-0">
                            <div className="col-sm-12 ml-xl-1">
                                <img className="mission-icon-tab" src={capacity} alt="capacity-img"></img>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic sub-topic-tab text-light">OUR <span className="yellow-colour">CAPACITY</span> </p>
                            </div>
                        </div>
                        <div className="row mr-xl-4">
                            <div className="col-sm-12 ml-xl-3">
                                <p data-aos="fade-up" data-aos-duration="2500" className="mission-text text-tab">
                                We provide comprehensive services in architecture, master planning, interior design, and graphic design. Our offerings encompass everything from conceptual design and the preparation of technical drawings to managing the tender process and overseeing project execution on behalf of our clients. We collaborate closely with building owners, contractors, and relevant authorities to ensure successful project submissions, approvals, and completion.
                                     </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-0 mr-0 mt-5 mb-5 desktop-show">
                    <Carousel autoPlay showStatus={false} interval={2000} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false}>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon1} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon2} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon3} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon4} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon5} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon6} alt="vision-img"></img>

                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon7} alt="vision-img"></img>
                                </div>
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon8} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                    </Carousel>
                </div>
                <div className="row ml-0 mr-0 mt-5 mb-5 mobile-show">
                    <Carousel autoPlay showStatus={false} infiniteLoop={true} showArrows={true} showThumbs={false} showIndicators={false}>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon1} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon2} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon3} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon4} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon5} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon6} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon7} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img className="about-img custom-width" src={icon8} alt="vision-img"></img>
                                </div>
                            </div>
                        </>
                    </Carousel>
                </div>
            </div>
        )
    };
};



