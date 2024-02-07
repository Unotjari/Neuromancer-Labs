import Image from "next/image";


const ThirdSection = () => {
  return (
    <div className="bg-[#e3f2ff] mx-auto">
      <div className="py-10 md:p-40">
        <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
          <div className="flex space-x-10">
            <div className="space-y-10">
              <div className="space-y-1 text-md">
                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                How to attract more visitors to your site 
                </div>
                <div className="text-xl text-[#1f3575] leading-8 font-light">
                What is website marketing and why is it important? 
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                It improves engagement and interaction
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                Website marketing lets you directly interact with your audience through social media, email, and your website.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                It builds brand reputation
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                An effective online presence helps in building and maintaining a strong brand reputation. Quality content, 
                positive customer interactions, and a professional website enhance your credibility and trust among consumers. 
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                It increases visibility and reach
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                With billions of users on the internet, website marketing reaches a vast audience, far beyond what traditional marketing methods can achieve. 
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pt-10 md:pt-0">
         
            <Image
            src={"/images/undraw-2.svg"}
            alt="image"
            width={700}
            height={700}
            className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
            />



          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
