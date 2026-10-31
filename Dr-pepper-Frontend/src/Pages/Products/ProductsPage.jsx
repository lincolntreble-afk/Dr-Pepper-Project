import "../../Pages/Products/ProductsPage.css";

import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";

import OurProductsSection from "./OurProductsSection";
import ProductSection from "./ProductsSection";


function ProductsPage() {
    return (
        <>
            <Helmet>
                <title>Products Page</title>
            </Helmet>

            <Header />

            <OurProductsSection />

            <ProductSection />

            <MainFooter />
        </>
    );
}

export default ProductsPage;
