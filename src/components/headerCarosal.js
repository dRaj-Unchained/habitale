import hero1 from '../images/hero_1.jpeg';
import hero2 from '../images/hero_2.jpeg';
import hero3 from '../images/hero_3.jpeg';
import { Link } from 'react-scroll';
import Typist from 'react-typist';
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;


export default class DemoCarousel extends React.Component {

    render() {
        return (
            <Carousel infiniteLoop={true} showStatus={false} showArrows={true} interval={3000} stopOnHover={true} showThumbs={false} autoPlay={true} showIndicators={false}>
                <div>
                    <Typist loop={Infinity} avgTypingDelay={30} cursor={{ show: false }}>
                        <img src={hero1} className="img-height" alt="top-carousal" />
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="carousel-text line-one carousel-text-tab"> Designing Spaces That </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="carousel-text line-two carousel-text-tab">Reflect <span className="carousel-text ml-3 carousel-text-tab"style={{ color:'#15d4c7'}}>Your Story</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <Typist.Delay ms={500} /> */}
                                <p className="carousel-sub-text"style={{ color:'#000000'}}>Let’s transform your house into a home you’ll love !</p>
                            </div>
                        </div>
                    </Typist>
                    <div className="row">
                        <div className="col-sm-2 ">
                            <button type="button" className="contact-us-btn"><Link to="contact" spy={true} offset={-50} smooth={true} >Contact us</Link></button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="view-gallery-btn"> <Link to="gallery" spy={true} offset={-50} smooth={true}  >View gallery</Link></button>
                        </div>
                    </div>
                </div>
                <div>
                    <Typist loop={Infinity} avgTypingDelay={30} cursor={{ show: false }}>
                        <img src={hero2} className="img-height" alt="top-carousal" />
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="carousel-text line-one carousel-text-tab">CREATE SPACES </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="carousel-text line-two carousel-text-tab">FOR BETTER <span className="carousel-text ml-3 carousel-text-tab"style={{ color:'#15d4c7'}}>LIVING</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <Typist.Delay ms={500} /> */}
                                <p className="carousel-sub-text"style={{ color:'#000000'}}>LET US BRING YOUR IDEAS TO LIFE !</p>
                            </div>
                        </div>
                    </Typist>
                    <div className="row">
                        <div className="col-sm-2 ">
                            <button type="button" className="contact-us-btn"><Link to="contact" spy={true} offset={-50} smooth={true} >Contact us</Link></button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="view-gallery-btn"> <Link to="gallery" spy={true} offset={-50} smooth={true}  >View gallery</Link></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={hero3} className="img-height" alt="top-carousal" />
                    <Typist avgTypingDelay={30} cursor={{ show: false }}>
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <Typist.Delay ms={3100} /> */}
                                <p className="carousel-text line-one carousel-text-tab">CREATE SPACES</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <Typist.Delay ms={3200} /> */}
                                <p className="carousel-text line-two carousel-text-tab">FOR BETTER<span className="carousel-text ml-3 yellow-colour carousel-text-tab">LIVING</span></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <Typist.Delay ms={3300} /> */}
                                <p className="carousel-sub-text">LET US BRING YOUR IDEAS TO LIFE !</p>
                            </div>
                        </div>
                    </Typist>
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="contact-us-btn"><Link to="contact" spy={true} offset={-50} smooth={true} >Contact us</Link></button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="view-gallery-btn"> <Link to="gallery" spy={true} offset={-50} smooth={true}  >View gallery</Link></button>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
};
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';

// export default () => (
//     <Carousel autoPlay>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
//             <p className="legend">Legend 1</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
//             <p className="legend">Legend 2</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
//             <p className="legend">Legend 3</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
//             <p className="legend">Legend 4</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
//             <p className="legend">Legend 5</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
//             <p className="legend">Legend 6</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
//             <p className="legend">Legend 7</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
//             <p className="legend">Legend 8</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
//             <p className="legend">Legend 9</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
//             <p className="legend">Legend 10</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
//             <p className="legend">Legend 11</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
//             <p className="legend">Legend 12</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
//             <p className="legend">Legend 13</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
//             <p className="legend">Legend 14</p>
//         </div>
//     </Carousel>
// );
