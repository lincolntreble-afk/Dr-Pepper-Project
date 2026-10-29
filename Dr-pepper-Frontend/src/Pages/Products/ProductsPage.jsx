import "../../Pages/Products/ProductsPage.css";

import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";


import DrPepperogcan from "../../assets/Dr-pepper-og-can.png";

import DrPepperDietcan from "../../assets/Dr-Pepper-diet-can.png";

import DrPepper0Sugarcan from "../../assets/Dr-Pepper-0-sugar-can.png";

import DrPepperCreamyCoconutCan from '../../assets/images/products/DP_CreamyCoconut.webp'
import DrPepperCreamyCoconut0SugarCan from '../../assets/images/products/DP_CreamyCoconut_ZS.webp'

import DrPepperBlackberryCan from '../../assets/images/products/DP_Blackberry.png'
import DrPepperBlackberry0SugarCan from '../../assets/images/products/DP_Blackberry_ZS.png'

import DrPepperStrawberriesCreamCan from '../../assets/images/products/DP_StrawberriesCream.webp'
import DrPepperStrawberriesCream0SugarCan from '../../assets/images/products/DP_StrawberriesCream_ZS.webp'

import DrPepperCherryCan from '../../assets/images/products/DP_Cherry.png'
import DrPepperCherry0SugarCan from '../../assets/images/products/DP_Cherry_ZS.png'

import DrPepperCreamSodaCan from '../../assets/images/products/DP_CreamSoda.webp'
import DrPepperCreamSoda0SugarCan from '../../assets/images/products/DP_CreamSoda_ZS.webp'

import DrPepperCaffieneFreeCan from '../../assets/images/products/DP_CaffeineFree.png'
import DrPepperDietCaffieneFreeCan from '../../assets/images/products/DP_Diet_CaffeineFree.png'

import DrPepperCherryVanilla from '../../assets/images/products/DP_CherryVanilla.png' 
import DrPepperDietCherryVanilla from '../../assets/images/products/DP_Diet_CherryVanilla.png'

import DrPepperRealSugarCan from '../../assets/images/products/DP_RealSugar.png'

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

                    {/* Row 1 */}
                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperogcan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    {" "}
                                    DR PEPPER{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperDietcan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    {" "}
                                    DIET DR PEPPER{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepper0Sugarcan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    DR PEPPER ZERO SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCreamyCoconutCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    {" "}
                                    DR PEPPER CREAMY COCONUT{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCreamyCoconut0SugarCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    {" "}
                                    DR PEPPER CREAMY COCONUT ZERO SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperBlackberryCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    DR PEPPER BLACKBERRY{" "}
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Row 3 */}
                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperBlackberry0SugarCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    {" "}
                                    DR PEPPER BLACKBERRY ZERO SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperStrawberriesCreamCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    {" "}
                                    DR PEPPER STRAWBERRIES & CREAM{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperStrawberriesCream0SugarCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    DR PEPPER STRAWBERRIES & CREAM ZERO SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>



                     {/* Row 4 */}
                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCherryCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    {" "}
                                    DR PEPPER CHERRY{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCherry0SugarCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    {" "}
                                    DR PEPPER CHERRY ZERO SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCreamSodaCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    DR PEPPER & CREAM SODA{" "}
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Row 5 */}
                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCreamSoda0SugarCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    {" "}
                                    DR PEPPER & CREAM SODA ZERO SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCaffieneFreeCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    {" "}
                                    CAFFIENE FREE DR PEPPER{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperDietCaffieneFreeCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    CAFFIENE FREE DIET DR PEPPER{" "}
                                </p>
                            </div>
                        </div>
                    </div>






                    {/* Row 6 */}
                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperCherryVanilla}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    {" "}
                                    CHERRY VANILLA DR PEPPER {" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperDietCherryVanilla}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-light">
                                    {" "}
                                    DIET CHERRY VANILLA DR PEPPER{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="our-products-column">
                        <div className="our-products-img-container">
                            <img
                                className="our-products-img"
                                src={DrPepperRealSugarCan}
                            />

                            <div className="our-products-text">
                                <p className="our-products-text-dark">
                                    DR PEPPER MADE WITH REAL SUGAR{" "}
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <MainFooter />
        </>
    );
}

export default ProductsPage;
