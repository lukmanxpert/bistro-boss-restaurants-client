import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-screen-xl mx-auto">
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className='-mt-10 text-white text-center text-xl font-cinzel'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className='-mt-10 text-white text-center text-xl font-cinzel'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className='-mt-10 text-white text-center text-xl font-cinzel'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className='-mt-10 text-white text-center text-xl font-cinzel'>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className='-mt-10 text-white text-center text-xl font-cinzel'>Burgers</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;