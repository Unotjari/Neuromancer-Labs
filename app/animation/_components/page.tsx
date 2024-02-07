import Navbar from "../Navbar/navbar";
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import GetStartedFree from "./eighth-section";


const LandingPage = () => {
    return ( 
    <div className="">
        <Navbar />
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />

        <SixthSection />
        <SeventhSection />
        <GetStartedFree />
     

    </div> );
}
 
export default LandingPage;