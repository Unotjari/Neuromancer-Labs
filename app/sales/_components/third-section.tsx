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
                website mistakes that hinder sales
                </div>
                <div className="text-xl text-[#1f3575] leading-8 font-light">
                Change the usual pattern.
You may be thinking that a company website is mainly for showcasing the services and products you sell. 
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                Failure to define a clear business purpose for the company website
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                try to talk about your business as you would explain it to an “auntie on her name day”, focus on the core of the value delivered, use metaphors, 
                surprise, stir emotions and explore the full range of benefits of your solutions. Keep the tone of a close advisor.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                Talking about yourself/your company instead of your customers
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                Storytelling from one’s own perspective is an affliction that affects almost all company websites. It is common to write “our company provides…”, “with us you will be able to…”, “our team can…”. You should write to the customer from their perspective. Try to replace these phrases with “The result for you will be…”, “You will receive more…”, “You will achieve your goal of…”.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                Not understanding what customers are looking for on your website
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                Customers do buy your products, but not for their features or functionality. They buy them because they serve their goals or solve their business problems. So try to reverse the narrative from product to problem. Talk about how you help, not what you offer.
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
