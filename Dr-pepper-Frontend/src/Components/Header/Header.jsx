import '../../Components/Header/Header.css'

import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Dr-pepper-logo.png'

function Header () {
    return(

        <nav className='nav-bar'>
            <div className='nav-container'>
                <div className='left-section'>
                    <NavLink to = "/" >
                        <img src = {Logo} className='brand-logo' />
                    </NavLink>
                </div>

                <div className='right-section'>
                    <ul className='nav-links'>

                        <li className='nav-link'>
                            <NavLink to = "/">Home</NavLink>
                        </li>

                        <li className='nav-link'>
                            <NavLink to = "/about">About</NavLink>
                        </li>

                        <li className='nav-link'>
                            <NavLink to = "/products">Products</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

export default Header