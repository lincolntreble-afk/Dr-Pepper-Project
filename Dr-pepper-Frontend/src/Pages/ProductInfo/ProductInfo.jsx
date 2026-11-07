import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header"
import MainFooter from "../../Components/Footer/Footer"
import ProductInfoSwiper from "../../Swiper-ProductInfo-Swiper/Swiper-ProductInfo";



function ProductInfo () {
    return(
        <>
            <Helmet>
                <title>Product Info</title>
            </Helmet>


            <Header />

                <ProductInfoSwiper />

            <MainFooter />

        </>
    )
}

export default ProductInfo