import DrPepperHomecan from "../../assets/Dr-pepper-Home-can.png";


function HomeSection() {
    return (
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
    )
}


export default HomeSection