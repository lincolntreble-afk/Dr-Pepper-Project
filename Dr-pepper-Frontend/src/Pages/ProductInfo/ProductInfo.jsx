import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header"
import MainFooter from "../../Components/Footer/Footer"
import ProductInfoSwiper from "../../Swiper-ProductInfo-Swiper/Swiper-ProductInfo";



function ProductInfo ({handleAddItem, cart}) {
    return(
        <>
            <Helmet>
                <title>Product Info</title>
            </Helmet>


            <Header cart={cart} />

                <ProductInfoSwiper handleAddItem = {handleAddItem} />

            <MainFooter />

        </>
    )
}

export default ProductInfo