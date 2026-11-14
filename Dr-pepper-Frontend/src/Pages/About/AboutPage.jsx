import Header from "../../Components/Header/Header";

import { Helmet } from "react-helmet-async";

import MainFooter from "../../Components/Footer/Footer";

import AboutSection from "./AboutSection";

import OriginSection from "./OriginSection";

import WhereToFindSection from "./WhereToFindSection";


function AboutPage({cart}) {
    return (
        <>
            <Helmet>
                <title>About Page</title>
            </Helmet>

            <Header cart={cart}/>

            <AboutSection />

            <OriginSection />

            <WhereToFindSection />

            <MainFooter />
        </>
    );
}
export default AboutPage;
