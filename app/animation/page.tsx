import Navbar from "./Navbar/navbar";
import HeroSection from "./_components/hero-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import SixthSection from "./_components/sixth-section";
import SeventhSection from "./_components/seventh-section";
import GetStartedFree from "./_components/eighth-section";


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