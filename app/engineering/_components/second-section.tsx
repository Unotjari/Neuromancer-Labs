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
                      Advantages of UX and UI design
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
                        The implementation of UI and UX Design in a website offers several advantages
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Best user experience
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      Users will feel more comfortable and satisfied when browsing a well-designed website, which can increase loyalty and engagement.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Reduction of the abandonment rate
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      A well-designed interface and optimal user experience can reduce the rate of site abandonment, increasing the time spent by users on the site.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Competitiveness
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      Good UI/UX design can differentiate your website from the competition, attracting more users.
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
