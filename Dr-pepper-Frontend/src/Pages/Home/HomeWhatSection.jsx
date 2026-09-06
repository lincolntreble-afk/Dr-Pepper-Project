import DrPepperHomecanWithIce from "../../assets/Dr-pepper-can-with-ice.jpg";

import { Link } from 'react-router-dom'

function HomeWhatSection() {
    return (
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

                        <Link to="/about">
                            <button className='Learn-more-btn'>Learn More</button>
                        </Link>

                    </div>

                    <div className="Dr-pepper-text-img-right-section">
                        <div className="Dr-pepper-what-img-container">
                            <img className='what-img' src={DrPepperHomecanWithIce} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeWhatSection



