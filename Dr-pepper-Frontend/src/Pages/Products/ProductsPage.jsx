import '../../Pages/Products/ProductsPage.css'

import {Helmet} from 'react-helmet-async'

import Header from '../../Components/Header/Header'
import MainFooter from '../../Components/Footer/Footer'

function ProductsPage() {
    return (
        <>
            <Helmet>
                <title>Products Page</title>
            </Helmet>
            

            <Header />
                
            <MainFooter />

        </>
    )
}

export default ProductsPage