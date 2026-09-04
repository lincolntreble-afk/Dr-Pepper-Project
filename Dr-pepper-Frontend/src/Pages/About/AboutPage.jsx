import '../../Pages/About/AboutPage.css'

import Header from '../../Components/Header/Header'

import { Helmet } from 'react-helmet'

import MainFooter from '../../Components/Footer/Footer'

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            

            <Header />

            <MainFooter />

        </>
    )
}


export default AboutPage