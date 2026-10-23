import "../../Pages/Products/ProductsPage.css";

import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";

import DrPepperogcan from "../../assets/Dr-pepper-og-can.png";

import DrPepperDietcan from "../../assets/Dr-Pepper-diet-can.png";

import DrPepper0Sugarcan from "../../assets/Dr-Pepper-0-sugar-can.png";

function ProductsPage() {
    return (
        <>
            <Helmet>
                <title>Products Page</title>
            </Helmet>

            <Header />

            <section className="our-products-section">
                <div className="our-products-container">
                    <div className="our-headers-container">
                        <div className="header-container">
                            <p className="our-header">Craving some flavor?</p>
                        </div>

                        <div className="sub-header-container">
                            <p className="our-sub-header">
                                Tap into our full line of Dr Pepper flavors.
                                Sweet and boldly delicious, there’s a unique
                                blend for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-section">
                <div className="our-products-grid">
                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperogcan}
                            />
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperDietcan}
                            />
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepper0Sugarcan}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <MainFooter />
        </>
    );
}

export default ProductsPage;
