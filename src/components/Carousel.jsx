import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Carousel.css';  // Import CSS file for custom styling

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      loop={true}
    >
      <SwiperSlide className="carousel-slide">
        <img src="/11.jpeg" alt="Slide 1" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/13.jpeg" alt="Slide 2" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/14.jpeg" alt="Slide 3" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/15.jpeg" alt="Slide 4" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/16.jpeg" alt="Slide 5" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/17.jpeg" alt="Slide 6" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/18.jpeg" alt="Slide 7" className="carousel-image" />
      </SwiperSlide>
      <SwiperSlide className="carousel-slide">
        <img src="/19.jpeg" alt="Slide 8" className="carousel-image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
