import React from 'react';
import img2 from '../../../assets/01.jpg';
import img3 from '../../../assets/02.jpg';
import img1 from '../../../assets/03.png';
import img4 from '../../../assets/04.jpg';
import img5 from '../../../assets/05.png';
import img6 from '../../../assets/06.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} alt="Slide 1" />
            </div>
            <div>
                <img src={img2} alt="Slide 2" />
            </div>
            <div>
                <img src={img3} alt="Slide 3" />
            </div>
            <div>
                <img src={img4} alt="Slide 4" />
            </div>
            <div>
                <img src={img5} alt="Slide 5" />
            </div>
            <div>
                <img src={img6} alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default Banner;
