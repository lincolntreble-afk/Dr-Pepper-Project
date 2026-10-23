import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

import OriginImg from '../../assets/images/1988-origin.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../Pages/About/OriginSection.css'




function OriginSwiper() {
    return (
        <Swiper 
            loop
            allowTouchMove
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true, disableOnInteraction: false }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={3}
        >
            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={OriginImg} alt="Slide 1" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1899 </p>
                        <p className='title' >Growing popularity</p>
                    </div>

                    <div className='sub-text'>The drink continued to grow, bringing its distinctive flavour to more people </div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={OriginImg} alt="Slide 1" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1899 </p>
                        <p className='title' >Growing popularity</p>
                    </div>

                    <div className='sub-text'>The drink continued to grow, bringing its distinctive flavour to more people </div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={OriginImg} alt="Slide 1" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1899 </p>
                        <p className='title' >Growing popularity</p>
                    </div>

                    <div className='sub-text'>The drink continued to grow, bringing its distinctive flavour to more people </div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={OriginImg} alt="Slide 1" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1899 </p>
                        <p className='title' >Growing popularity</p>
                    </div>

                    <div className='sub-text'>The drink continued to grow, bringing its distinctive flavour to more people </div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={OriginImg} alt="Slide 1" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1899 </p>
                        <p className='title' >Growing popularity</p>
                    </div>

                    <div className='sub-text'>The drink continued to grow, bringing its distinctive flavour to more people </div>
                   
                </div>
            </SwiperSlide>
        </Swiper>
    )
}


export default OriginSwiper