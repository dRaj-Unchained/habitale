import React from 'react';
import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Partner logos
import faber from '../images/partners/ap.png';
import freedomTree from '../images/partners/faber.png';
import dDecor from '../images/partners/1.png';
// Add more partner logos here
import partner4 from '../images/partners/elica.png';
import partner5 from '../images/partners/3.png';

AOS.init();

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
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

const Partners = () => {
    const partners = [
        { img: faber, name: 'Faber' },
        { img: freedomTree, name: 'Freedom Tree' },
        { img: dDecor, name: 'D Decor' },
        { img: partner4, name: 'Partner 4' },
        { img: partner5, name: 'Partner 5' }
    ];

    return (
        <div style={{
            backgroundColor: '#f9f9f9',
            padding: '40px 0',
            borderRadius: '5px'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p data-aos="flip-left" className="about-sub-topic add-margin-about-sub">
                            OUR <span className="yellow-colour">PARTNERS</span>
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
                    {partners.map((partner, index) => (
                        <div key={index} className="text-center p-2">
                            <img
                                className="about-img custom-width"
                                src={partner.img}
                                alt={partner.name}
                                style={{ maxHeight: '300px', objectFit: 'contain', transform: 'scale(1.35)' }}
                            />
                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
    );
};

export default Partners;
