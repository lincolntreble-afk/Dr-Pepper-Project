import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

import TheBeginningDPImg from '../../assets/images/The_beginning_DP.avif'
import OriginImg from '../../assets/images/1988-origin.jpg'
import WiderAudienceImg from '../../assets/images/DP_Wider_audience.jpg'
import ExpandingCompanyImg from '../../assets/images/DP_Expanding_Company.jpg'
import AdvertisingCampaignImg from '../../assets/images/DP_Advertising_Campaign.jpg'


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
                    <img  className = "origin-image"  src={TheBeginningDPImg} alt="Slide 1" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1885 </p>
                        <p className='title' >The beginning</p>
                    </div>

                    <div className='sub-text'>Dr Pepper was created in Waco, Texas, becoming one of Americas oldest major soft drinks</div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={OriginImg} alt="Slide 2" />
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
                    <img  className = "origin-image"  src={WiderAudienceImg} alt="Slide 3" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1904 </p>
                        <p className='title' >Reaching a wider audience</p>
                    </div>

                    <div className='sub-text'>Dr pepper was introduced to almost 20 million visitors at the St. Louis World's Fair. This helped the drink gain a wider audience due to its unique flavour </div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={ExpandingCompanyImg} alt="Slide 4" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1923 </p>
                        <p className='title' >Expanding the comapny </p>
                    </div>

                    <div className='sub-text'>The Dr Pepper Company was officially incorporated in Dallas, Texas. This marked an important stage, as the company started to grow and establish itself</div>
                   
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='swiper-img-container'>
                    <img  className = "origin-image"  src={AdvertisingCampaignImg} alt="Slide 5" />
                </div>

                <div className='swiper-text-container'>
                    <div className='year-title-container'>
                        <p className='Year'> 1926 </p>
                        <p className='title' >An Iconic Advertising Campaign</p>
                    </div>

                    <div className='sub-text'>Dr Pepper introduced its famous "Drink a Bite to Eat at 10,2 and 4" advertising slogan. This helped the brand become more recognisable.</div>
                   
                </div>
            </SwiperSlide>
        </Swiper>
    )
}


export default OriginSwiper