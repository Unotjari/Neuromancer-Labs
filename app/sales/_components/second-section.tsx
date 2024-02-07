import Image from "next/image";

const SecondSection = () => {
  return (
    <div>
      <div className="items-center justify-center flex md:space-x-20">
        <div className="w-full bg-[#eff0ff]">
          <div className="md:py-40 py-16">
            <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
              <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                <div className="flex">
                  <div className="space-y-10">
                    <div className="space-y-1 md:text-md">
                      <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                      Ways to Increase Online Sales
                      </div>
                      <div
                        className="
                                        pt-4
                                         text-sm 
                                         md:text-md
                                          text-[#3d2e7c] 
                                          leading-6
                                           md:leading-10
                                           font-light
                                           md:w-4/5
                                           "
                      >
                        Increasing online sales is the primary goal of countless businesses, large and small alike.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Be Honest in Your Sales Copy
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      This might seem painfully obvious, but it’s amazing to me how many sites write checks their products can’t cash.
                       Not only is honesty in your copy crucial to your business’ reputation, it also fosters and encourages trust in your brand.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Get More Ad Clicks with Ad Extensions
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      If you’re selling stuff online, ad extensions are a no-brainer – this feature (available in both AdWords and Bing) allows you to make your ad bigger with more places to click.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Show Off Customer Testimonials and Trust Signals
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      
                      In today’s social media environment, customer feedback has never been more important. Fortunately,
                       this means that your satisfied customers can provide you with one of the most valuable weapons in your arsenal – testimonials.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       


                <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 mt-10">
            <Image 
            src="/images/undraw-2.svg"
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                md:rounded-[60px]
                rounded-[40px]
                w-full
                p-10
                "
            />

                </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
