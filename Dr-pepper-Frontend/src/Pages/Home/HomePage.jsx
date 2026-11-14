import '../../Pages/Home/HomePage.css'

import Header from '../../Components/Header/Header'

import MainFooter from '../../Components/Footer/Footer'

import { Helmet } from 'react-helmet-async'

import HomeSection from './HomeSection'

import HomeWhatSection from './HomeWhatSection'

import CheckProductsSection from './CheckProductsSection'


function HomePage({cart}) {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>


            <Header cart={cart} />

                <HomeSection /> 
        
                <HomeWhatSection />
            
                <CheckProductsSection />

            <MainFooter />
        </>
    )
}

export default HomePage