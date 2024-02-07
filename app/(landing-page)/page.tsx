import FirstSection from "./FirstSection/page";
import SecondSection from "./SecondSection/page";
import Navbar from "./Navbar/navbar";
import ThirdSection from "./ThirdSection/page";
import FourthSection from "./FourthSection/page";
import FifthSection from "./FifthSection/page";
import SixthSection from "./SixthSection/page";
import SeventhSection from "./SeventhSection/page";
import EighthSection from "./EighthSection/page";
import Footer from "./Footer/page";
import NinthSection from "./NinthSection/page";
import Slider from "react-slick";
import Sliders from "./slider/sliders";
import TenthSection from "./TenthSection/page";



const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <FirstSection/>
            <Sliders/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <SeventhSection/>
            <EighthSection/>
            <NinthSection/>
            <TenthSection/>
            <Footer/>
            </div>
    );
}

export default LandingPage