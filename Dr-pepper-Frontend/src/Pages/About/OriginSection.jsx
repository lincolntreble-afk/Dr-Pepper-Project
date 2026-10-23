import OriginSwiper from "../../Components/Swiper-Origin-Section/Swiper-Origin";

import '../About/OriginSection.css'

function OriginSection() {
    return (
        <>
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
        </>
    );
}

export default OriginSection;
