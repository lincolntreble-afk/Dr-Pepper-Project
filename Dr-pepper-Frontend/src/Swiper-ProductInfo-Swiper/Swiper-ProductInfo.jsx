import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Pages/ProductInfo/ProductInfo.css";
import products from "../data/products";


function ProductSlideContent({ product, handleAddItem }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

    const handleConfirmAdd = () => {
        if (count === 0) return; // Prevents adding 0 items to the cart
        handleAddItem(product.id, count);
        setCount(0);
    };

    return (
        <div className="product-info-main-container">
            <div className="product-info-left-side">
                <img className="DP-product-img" src={product.image} alt={product.name} />
            </div>

            <div className="product-info-right-side">
                <div className="DP-name-cotainer">
                    <p className="DP-name">{product.name}</p>
                </div>

                <div className="DP-rating-star-container">
                    <img src="" alt="" />
                </div>

                <div className="Add-to-cart-section">
                    <p className="Add-to-cart-header">Add To Cart</p>
                    

                    <div className="Add-to-cart-buttons-container">
                        <button className="add-button" onClick={handleIncrement}>
                            <i className="ri-add-line add-icon"></i>
                        </button>
                        <p className="quantity">{count}</p>
                        <button className="subtract-button" onClick={handleDecrement}>
                            <i className="ri-subtract-fill subtract-icon"></i>
                        </button>

                        <div className="Add-to-cart-button-container">
                            <button
                                className="Add-to-cart-button"
                                onClick={handleConfirmAdd}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="Flavour-details-section">
                    <div className="Flavour-details-header-container">
                        <p className="Flavour-details-header">Flavour Details</p>
                    </div>

                    <div className="Flavour-details-description-container">
                        <p className="Flavour-details-description">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


function ProductInfoSwiper({ handleAddItem }) {
    return (
        <Swiper
            loop
            allowTouchMove
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            className="product-info-swiper"
        >
            {products.map((product) => (
                <SwiperSlide
                    key={product.id}
                    style={{ backgroundColor: product.bg || "#ffff" }}
                    className="product-info-swiper-slide"
                >
                    <ProductSlideContent
                        product={product}
                        handleAddItem={handleAddItem}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ProductInfoSwiper;