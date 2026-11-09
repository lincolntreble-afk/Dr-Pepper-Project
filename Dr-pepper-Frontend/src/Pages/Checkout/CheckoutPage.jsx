import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";

import "../Checkout/CheckoutPage.css";

import DrPepperRealSugarCan from "../../assets/images/products/DP_RealSugar.png";
import DrPepperogcan from "../../assets/Dr-pepper-og-can.png";

function CheckoutPage() {
    return (
        <>
            <Helmet>
                <title>Checkout</title>
            </Helmet>

            <Header />

            <div className="page-title">
                <p className="checkout-title"> Checkout (2 items) </p>
            </div>

            <div className="checkout-page-main-flex">
                <section className="checkout-page-product-section">
                    <div className="product-container">
                        <div className="product-info-left-section">
                            <div className="product-info-img-container">
                                <img
                                    className="product-info-img"
                                    src={DrPepperRealSugarCan}
                                />
                            </div>

                            <div className="product-info-right-section">
                                <div className="product-name-container">
                                    <p className="product-name">
                                        DR PEPPER MADE WITH REAL SUGAR
                                    </p>
                                </div>

                                <div className="quantity-container">
                                    <p className="checkout-quantity">
                                        Quantity: 1{" "}
                                    </p>

                                    <div className="update-button-container">
                                        <button className="update-button">
                                            Update
                                        </button>
                                    </div>

                                    <div className="Delete-button-container">
                                        <button className="delete-button">
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                <div className="product-info-price">
                                    <p className="price">£15.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-container">
                        <div className="product-info-left-section">
                            <div className="product-info-img-container">
                                <img
                                    className="product-info-img"
                                    src={DrPepperogcan}
                                />
                            </div>

                            <div className="product-info-right-section">
                                <div className="product-name-container">
                                    <p className="product-name">
                                        DR PEPPER 
                                    </p>
                                </div>

                                <div className="quantity-container">
                                    <p className="checkout-quantity">
                                        Quantity: 1{" "}
                                    </p>

                                    <div className="update-button-container">
                                        <button className="update-button">
                                            Update
                                        </button>
                                    </div>

                                    <div className="Delete-button-container">
                                        <button className="delete-button">
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                <div className="product-info-price">
                                    <p className="price">£15.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="checkout-page-total-section">
                    <div className="checkout-page-info-container">
                        <div className="total-info">
                            <div className="total-quantity-product">
                                <span className="product-num">1x</span>{" "}
                                <p className="total-name">
                                    {" "}
                                    DR PEPPER MADE WITH REAL SUGAR
                                </p>
                            </div>
                        </div>

                        <div className="total-container">
                            <p className="total"> £15.00 </p>
                        </div>

                        <div className="total-info">
                            <div className="total-quantity-product">
                                <span className="product-num">1x</span>{" "}
                                <p className="total-name">
                                    {" "}
                                    DR PEPPER
                                </p>
                            </div>
                        </div>

                        <div className="total-container">
                            <p className="total"> £15.00 </p>
                        </div>
                    </div>

                    <div className="Total-price-container">
                        <span className="Total">Total:</span><p className="Total-price">£30.00</p>
                    </div>
                </section>
            </div>

            <MainFooter />
        </>
    );
}

export default CheckoutPage;
