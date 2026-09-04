import '../../Pages/Home/HomePage.css'

import Header from '../../Components/Header/Header'

import MainFooter from '../../Components/Footer/Footer'

import { Helmet } from 'react-helmet'

function HomePage () {
    return(
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            

            <Header />
            <MainFooter />
        </>
    )
}

export default HomePage