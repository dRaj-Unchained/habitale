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
                                <p data-aos="fade-left" data-aos-duration="1000" className="about-topic"> TESTIMONIALS</p>
                            </div>
                        </div>
                        <div className="row">
                            <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic add-margin-about-sub">WORDS THAT <span className="yellow-colour">INSPIRE US</span></p>
                        </div>
                        <div className="row">

                            <div className="col-sm-8 col-md-12">
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="about-text ">
                                Nothing matters more to us than the satisfaction and trust of our clients. Our testimonials reflect the meaningful relationships we've built through thoughtful design, clear communication, and quality execution. Each kind word is a reminder of the impact our work has on people’s lives and the spaces they cherish. Whether it’s a heartfelt note of thanks or a glowing review of our professionalism, these voices inspire us to keep doing our best.
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



