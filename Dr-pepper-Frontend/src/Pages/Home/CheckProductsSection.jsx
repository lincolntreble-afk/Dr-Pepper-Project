import { Link } from 'react-router-dom'

import DrPepperogcan from "../../assets/Dr-pepper-og-can.png";

import DrPepperDietcan from "../../assets/Dr-Pepper-diet-can.png"

import DrPepper0Sugarcan from "../../assets/Dr-Pepper-0-sugar-can.png"


function CheckProductsSection() {
    return (
        <section className="check-products-section">
            <div className="check-products-container">
                <div className="check-header-container">
                    <p className="check-header">Check Our Products</p>
                </div>

                <div className="check-products-grid">
                    <div className="check-products-column">
                        <div className="check-products-img-container">
                            <img className="check-products-img" src={DrPepperogcan} />
                        </div>

                        <div className="check-products-text-button-container">
                            <div className="check-products-text-container">
                                <p className="check-products-text">Dr Pepper</p>
                            </div>

                            <Link to="/products">
                                <button className="check-products-button">Buy Now</button>
                            </Link>
                        </div>
                    </div>

                    <div className="check-products-column">
                        <div className="check-products-img-container">
                            <img className="check-products-img" src={DrPepperDietcan} />
                        </div>

                        <div className="check-products-text-button-container">
                            <div className="check-products-text-container">
                                <p className="check-products-text">Diet Dr Pepper</p>
                            </div>

                            <Link to="/products">
                                <button className="check-products-button">Buy Now</button>
                            </Link>
                        </div>
                    </div>

                    <div className="check-products-column">
                        <div className="check-products-img-container">
                            <img className="check-products-img" src={DrPepper0Sugarcan} />
                        </div>

                        <div className="check-products-text-button-container">
                            <div className="check-products-text-container">
                                <p className="check-products-text">Dr Pepper Zero Sugar</p>
                            </div>

                            <Link to="/products">
                                <button className="check-products-button">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckProductsSection