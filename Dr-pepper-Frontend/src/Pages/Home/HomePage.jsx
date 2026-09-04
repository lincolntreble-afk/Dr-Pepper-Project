import '../../Pages/Home/HomePage.css'

import Header from '../../Components/Header/Header'

import MainFooter from '../../Components/Footer/Footer'

import { Helmet } from 'react-helmet-async'

function HomePage () {
    return(
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            

            <Header />
                <div>Test</div>
            <MainFooter />
        </>
    )
}

export default HomePage