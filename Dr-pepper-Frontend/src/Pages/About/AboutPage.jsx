import "../../Pages/About/AboutPage.css";

import Header from "../../Components/Header/Header";

import { Helmet } from "react-helmet-async";

import MainFooter from "../../Components/Footer/Footer";

import DrPepperHomecanWithIce from "../../assets/Dr-pepper-can-with-ice.jpg";

import DrPepperLogoStacked from "../../assets/Dr-Pepper-logo-stacked.jpg";

import OriginSwiper from "../../Components/Swiper-Origin-Section/Swiper-Origin";

import WhereToImage from "../../assets/images/where-to-find-image.webp";

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About Page</title>
            </Helmet>

            <Header />

            <section className="About-section">
                <div className="about-section-container">
                    <div className="about-section-header-conatiner">
                        <p className="about-section-header">
                            Who are Dr Pepper
                        </p>
                    </div>

                    <div className="Dr-pepper-who-section">
                        <div className="Dr-pepper-who-left-section">
                            <div className="Dr-pepper-who-left-img1">
                                <img
                                    className="stacked-img-1"
                                    src={DrPepperLogoStacked}
                                />
                            </div>

                            <div className="Dr-pepper-who-left-img2">
                                <img
                                    className="stacked-img-2"
                                    src={DrPepperHomecanWithIce}
                                />
                            </div>
                        </div>

                        <div className="Dr-pepper-who-right-section">
                            <div className="Dr-pepper-who-text-container">
                                <p className="who-text">
                                    Dr Pepper is more than just a soft drink.
                                    With its bold, distinctive taste and unique
                                    blend of flavours, every sip delivers
                                    something refreshingly different. Discover
                                    the flavour that's been loved for
                                    generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="origin-section">
                <div className="origin-section-container">
                    <div className="origin-headings">
                        <div className="origin-header-container">
                            <p className="origin-header">Origin</p>
                        </div>

                        <div className="origin-sub-header-container">
                            <p className="origin-sub-header">
                                The story begins here
                            </p>
                        </div>
                    </div>
                </div>

                <div className="origin-swiper-container">
                    <OriginSwiper />
                </div>
            </section>

            <section className="where-to-find-section">
                <div className="where-to-find-section-container">
                    <div className="where-to-header-container">
                        <p className="where-to-header">Where to find us</p>
                    </div>

                    <div className="where-to-find-information-container">
                        <div className="where-to-find-information-left-section">
                            <img
                                className="where-to-image"
                                src={WhereToImage}
                            />
                        </div>

                        <div className="where-to-find-infromation-right-section">
                            <div className="address-container">
                                <p className="address">Adress:</p>
                                <p className="address-sub-text-1">
                                    Coca-Cola Europacific Partners, Enterprises
                                    House, Bakers Road, Uxbridge
                                </p>
                                <p className="address-sub-text-2">
                                    UB8 1EZ, United Kingdom
                                </p>
                            </div>

                            <div className="contact-info-container">
                                <div className="consumer-care-container">
                                    <i className="ri-phone-fill phone-icon"></i>
                                    <div className="business-info">
                                        <p className="consumer-care-number">
                                            +44 (0)1895 231313 (Consumer Care)
                                        </p>
                                        <p className="business-enquiries-number">
                                            0808 1 000 000 (Business Enquiries)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="email-info-container">
                                <div className="email-icon-text-container">
                                    <i class="ri-mail-fill email-icon"></i>
                                    <div className="email-container">
                                        <p className="email">connect@ccep.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="direction-info-container">
                                <div className="direction-icon-text-container">
                                    <i class="ri-direction-fill direction-icon"></i>
                                    <div className="direction-container">
                                        <p className="direction">Situated in Uxbridge town centre, directly accessible via the A4020 and a short walk from the Uxbridge Underground Station.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MainFooter />
        </>
    );
}

export default AboutPage;
