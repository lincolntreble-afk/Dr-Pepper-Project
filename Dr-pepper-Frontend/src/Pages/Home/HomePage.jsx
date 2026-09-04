import '../../Pages/Home/HomePage.css'

import Header from '../../Components/Header/Header'

import MainFooter from '../../Components/Footer/Footer'

import { Helmet } from 'react-helmet-async'

import { Link } from 'react-router-dom'

import DrPepperHomecan from "../../assets/Dr-pepper-Home-can.png";

import DrPepperogcan from "../../assets/Dr-pepper-og-can.png";

import DrPepperHomecanWithIce from "../../assets/Dr-pepper-can-with-ice.jpg";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>


            <Header />
            <section className="Dr-pepper-home-section">
                <div className="home-container">
                    <div className="home-container-head-section">
                        <div className="header-container">
                            <p className="header">Dr Pepper</p>
                        </div>

                        <div className="sub-header-container">
                            <p className="sub-header">One of a Kind. Full of Flavour</p>
                        </div>
                    </div>

                    <div className="home-container-text-section">
                        <div className="dr-pepper-home-text-container">
                            <p className="dr-pepper-home-text">Dr Pepper is more than just a soft drink. With its bold, distinctive taste and unique blend of flavours, every sip delivers something refreshingly different. Discover the flavour that's been loved for generations.</p>
                        </div>

                        <div className="dr-pepper-home-img-container">
                            <img className="dr-pepper-home-img" src={DrPepperHomecan} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="Dr-pepper-what-section">
                <div className="what-container">
                    <div className="what-header-container">
                        <p className="what-header">What is Dr Pepper?</p>
                    </div>

                    <div className="Dr-pepper-text-img-section">
                        <div className="Dr-pepper-text-img-left-section">
                            <div className="Dr-pepper-what-text-container">
                                <p className="Dr-pepper-what-text">Dr Pepper is a uniquely flavoured soft drink with a bold and distinctive taste that has stood out for generations. First created in 1885, its one-of-a-kind flavour has made it a favourite around the world.</p>
                            </div>

                            <Link to = "/about">
                                <button className='Learn-more-btn'>Learn More</button>
                            </Link>
                            
                        </div>

                        <div className= "Dr-pepper-text-img-right-section">
                            <div className= "Dr-pepper-what-img-container">
                                <img className='what-img' src = {DrPepperHomecanWithIce} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className= "check-products-section">
                <div className = "check-products-container">
                    <div className= "check-header-container">
                        <p className= "check-header">Check Our Products</p>
                    </div>

                    <div className= "check-products-grid">
                        <div className = "check-products-column">
                            <div className= "check-products-img-container">
                                <img className="check-products-img" src = {DrPepperogcan} />
                            </div>

                            <div className= "check-products-text-button-container">
                                <div className= "check-products-text-container">
                                    <p className= "check-products-text">Dr Pepper</p>
                                </div>

                                <Link to = "/products">
                                    <button className= "check-products-button">Buy Now</button>
                                </Link>
                            </div>
                        </div>

                        <div className = "check-products-column">
                            <div className= "check-products-img-container">
                                <img className="check-products-img" src = {DrPepperogcan} />
                            </div>

                            <div className= "check-products-text-button-container">
                                <div className= "check-products-text-container">
                                    <p className= "check-products-text">Dr Pepper</p>
                                </div>

                                <Link to = "/products">
                                    <button className= "check-products-button">Buy Now</button>
                                </Link>
                            </div>
                        </div>

                        <div className = "check-products-column">
                            <div className= "check-products-img-container">
                                <img className="check-products-img" src = {DrPepperogcan} />
                            </div>

                            <div className= "check-products-text-button-container">
                                <div className= "check-products-text-container">
                                    <p className= "check-products-text">Dr Pepper</p>
                                </div>

                                <Link to = "/products">
                                    <button className= "check-products-button">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MainFooter />
        </>
    )
}

export default HomePage