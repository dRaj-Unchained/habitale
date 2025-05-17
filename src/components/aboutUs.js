import React from 'react';
import '../App.css';
import img from '../images/about.png'
import image_1 from './../images/image_1.jpeg';
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
                                <p data-aos="fade-left" data-aos-duration="1000" className="about-topic"> ABOUT US</p>
                            </div>
                        </div>
                        <div className="row">
                            <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic add-margin-about-sub">OUR <span className="yellow-colour">STORY</span></p>
                        </div>
                        <div className="row">

                            <div className="col-sm-8 col-md-12">
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="about-text ">
                                At Habitale Interiors, we believe that a home is more than just 
                                a place—it's a reflection of who you are. With a passion for design 
                                and a keen eye for detail, we specialize in creating beautiful and 
                                functional spaces that inspire. Whether you're looking to renovate 
                                a single room or redesign your entire home, our expert team of designers 
                                works closely with you to bring your vision to life. We combine innovative 
                                design concepts with high-quality materials to create timeless interiors 
                                that reflect your unique taste and lifestyle
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-6 col-md-6 mt-lg-5">
                        <img className="about-img about-img-tab" src={image_1} alt="about-us-img" style={{ width: '78%', height: '100%', objectFit: 'cover', maxHeight: '400px' }} ></img>
                    </div>
                </div>
            </div >
        )
    };
};



