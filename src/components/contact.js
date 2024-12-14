import React from 'react';
import '../App.css';
import '../css/contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


AOS.init();
export default class Contact extends React.Component {

    onSubmit = (e) => {
        e.preventDefault()// Prevents default refresh by the browser
        toast(<div>
            <div className="row" >
                <div className="col-sm-2">
                    <i class="fa fa-check-circle mt-2 text-success fa-3x"></i>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="text-dark float-left success-messageSize ml-1">Message delivered</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p><small className="text-muted float-left success-subMessageSize ml-1">Your message was send successfully</small></p>
                        </div>
                    </div>
                </div>
            </div >
        </div>, { hideProgressBar: true, closeOnClick: true }
        );
    }

    render() {
        return (
            <div className="mb-5">
                <ToastContainer></ToastContainer>
                <div className="container">
                    <div className="row add-mobile-padding">
                        <div className="col-sm-12 col-xl-6 mt-sm-5">
                            <div className="row mt-sm-5 ">
                                <div data-aos="fade-right" data-aos-duration="1000" className="col-2 col-sm-1">
                                    <span><hr className="slash"></hr></span>
                                </div>
                                <div className="col-6 col-sm-10">
                                    <p data-aos="fade-left" data-aos-duration="1000" className="about-topic"> CONTACT US</p>
                                </div>
                            </div>
                            <div className="row">
                                <p data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="about-sub-topic add-margin-about-sub contact-sub-mobile">LET'S GET IN <span className="yellow-colour">TOUCH</span></p>
                            </div>
                            <div className="row ">
                                <div className="col-sm-8 col-xl-12">
                                    <p data-aos="fade-right" data-aos-duration="3000" className="contact-sub-topic"><strong>Better yet, see us in person ! </strong>
                                        We love our customers, so feel free to visit during normal business hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 mt-sm-5 add-mobile-padding">
                        <div className="col-sm-12">
                            <div className="card contact-card mb-5">
                                <div className="row">
                                    <div className="col-sm-7 container p-5">
                                        <form className="form" onSubmit={this.onSubmit}>
                                            <div className="row">
                                                <div className="col-sm-12 pb-5">
                                                    <p className="contact-label">Name</p>
                                                    <input name="fullname" type="text" required></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 pb-5">
                                                    <p className="contact-label">Email</p>
                                                    <input name="email" type="text" required></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 mb-5">
                                                    <p className="contact-label">Message</p>
                                                    <textarea name="message" required></textarea>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <button className="contact-send-btn" type="submit">Send now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-4 contact-detail-side">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="contact-details-topic">We can help !</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="contact-details-text">Do you have a concern or deadline for your project?
                                                        Send us a message, and we'll get back to you with answers soon.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="contact-details-sub-topic">- Interior contracting</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="contact-details-text">
                                                        Sunrise Tower, 45 Al Nahda Street 4, Business Bay, Middle Finland - Finland.
                                                     <strong>-sales@averyinterior.com</strong></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="contact-details-sub-topic">- Hours</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <p className="contact-details-text">
                                                        Saturday - Thursday: By Appointment Friday: Closed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};



