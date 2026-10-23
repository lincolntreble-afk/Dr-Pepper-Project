import Header from "../../Components/Header/Header";

import { Helmet } from "react-helmet-async";

import MainFooter from "../../Components/Footer/Footer";

import AboutSection from "./AboutSection";

import OriginSection from "./OriginSection";

import WhereToFindSection from "./WhereToFindSection";


function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About Page</title>
            </Helmet>

            <Header />

            <AboutSection />

            <OriginSection />

            <WhereToFindSection />

            <MainFooter />
        </>
    );
}
export default AboutPage;
