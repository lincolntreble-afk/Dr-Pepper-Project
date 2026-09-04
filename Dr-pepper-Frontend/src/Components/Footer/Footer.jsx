import '../../Components/Footer/Footer.css'

import { NavLink } from 'react-router-dom'

import Logo from "../../assets/Dr-pepper-logo.png";

function MainFooter() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src={Logo} alt="Dr Pepper Logo" className="footer-logo" />

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Home</h3>
                        <NavLink to="/">What is Dr Pepper</NavLink>
                        <NavLink to="/products">Check our Products</NavLink>
                    </div>

                    <div className="footer-column">
                        <h3>About</h3>
                        <NavLink to="/about">Who are Dr Pepper</NavLink>
                        <NavLink to="/about">Origin Story</NavLink>
                        <NavLink to="/about">Where to find us</NavLink>
                    </div>

                    <div className="footer-column">
                        <h3>Products</h3>
                        <NavLink to="/products">Our Products</NavLink>
                        <NavLink to="/products">Reviews</NavLink>
                    </div>
                </div>

                <div className="footer-social">
                    <i className="ri-instagram-fill"></i>
                    <i className="ri-facebook-fill"></i>
                    <i className="ri-youtube-fill"></i>
                    <i className="ri-tiktok-fill"></i>
                    <i className="ri-twitter-x-fill"></i>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="text-left-bottom">Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
                <p>©2026 Dr Pepper/Seven Up, Inc.</p>
            </div>
        </footer>
    )
}

export default MainFooter