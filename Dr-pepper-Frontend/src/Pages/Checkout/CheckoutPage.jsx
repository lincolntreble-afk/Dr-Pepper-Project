import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";


function CheckoutPage (){
    return(
        <>
            <Helmet>
                <title>Checkout</title>
            </Helmet>


            <Header />

            <MainFooter />

        </>
    )
}


export default CheckoutPage