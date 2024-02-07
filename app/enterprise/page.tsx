import FirstSection from "./first-section/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import Pricing from "./pricing/page";
import FifthSection from "./fifth-section/page";
import Footer from "./footer/page";
import Navbar from "./Navbar/navbar";

const EnterprisePage = () => {
  return ( 
  <div>
     <Navbar/>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <Pricing/>
     <FifthSection/>
     <FourthSection/>
    
     <Footer/>

  </div> );
}

export default EnterprisePage;