import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header"

import MainFooter from "../../Components/Footer/Footer"

function ProductInfo () {
    return(
        <>
            <Helmet>
                <title>Product Info</title>
            </Helmet>


            <Header />

            <MainFooter />

        </>
    )
}

export default ProductInfo