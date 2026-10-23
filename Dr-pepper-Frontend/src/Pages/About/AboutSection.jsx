import DrPepperHomecanWithIce from "../../assets/Dr-pepper-can-with-ice.jpg";

import DrPepperLogoStacked from "../../assets/Dr-Pepper-logo-stacked.jpg";

import '../About/AboutSection.css'

function AboutSection() {
    return (
        <>
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
        </>
    );
}

export default AboutSection;
