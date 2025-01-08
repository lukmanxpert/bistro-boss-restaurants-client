import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/shared/SectionTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div>
            <SectionTitle subTitle={"---What Our Clients Say---"} title={"Testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper flex justify-center items-center">
                {reviews.map(review => <SwiperSlide>
                    <div className='flex justify-center items-center flex-col gap-4 px-16 text-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <div>
                            <FaQuoteLeft className='text-5xl' />
                        </div>
                        <p>{review?.details}</p>
                        <h1 className='text-3xl font-semibold mb-10'>{review?.name}</h1>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Testimonials;