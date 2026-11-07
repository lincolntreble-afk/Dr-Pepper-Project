import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../Pages/ProductInfo/ProductInfo.css'

import products from "../data/products";

function ProductInfoSwiper() {
    return (
        <Swiper
            loop
            allowTouchMove
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            className="product-info-swiper"
        >
            {products.map((product) => {
                return (
                    <>
                        <SwiperSlide key = {product.id} style={{backgroundColor : product.bg || '#ffff'}} className="product-info-swiper-slide">

                            <div className="product-info-main-container">
                                <div className="product-info-left-side">
                                    <img className="DP-product-img" src = {product.image} />
                                </div>

                                <div className="product-info-right-side">
                                     <div className="DP-name-cotainer">
                                        <p className="DP-name">{product.name}</p>
                                     </div>

                                     <div className="DP-rating-star-container">
                                        <img src = "" />
                                        <>{}</>
                                     </div>

                                     <div className="Add-to-cart-section">
                                        <p className="Add-to-cart-header"> Add To Cart </p>
                                        <p className="Add-to-cart-stock-count"> 12 Left in Stock </p>

                                        <div className="Add-to-cart-buttons-container">
                                            <button className="add-button"><i className="ri-add-line add-icon"></i></button>
                                            <p className="quantity">0 </p>
                                            <button className="subtract-button"><i className="ri-subtract-fill subtract-icon"></i></button>

                                            <div className="Add-to-cart-button-container">
                                                <button className="Add-to-cart-button">Add to Cart</button>
                                            </div>
                                        </div>
                                     </div>

                                     <div className="Flavour-details-section">
                                        <div className="Flavour-details-header-container">
                                            <p className="Flavour-details-header"> Flavour Details </p>
                                        </div>

                                        <div className="Flavour-details-description-container">
                                            <p className="Flavour-details-description">{product.description}</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                    </>
                );
            })}
        </Swiper>
    );
}

export default ProductInfoSwiper;
