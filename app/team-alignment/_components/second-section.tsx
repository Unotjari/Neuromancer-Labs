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
                        Keep your customer engaged while collaborating
                        
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
                        Keeping clients engaged with your website is crucial for building a positive relationship and encouraging repeat visits
                        Here are several effective ways to achieve and maintain client engagement:
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      High-Quality Content
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      We regularly update your website with high-quality, relevant, and valuable content. 
                      This can include blog posts, articles, videos, infographics, and other resources that address your clients' needs and interests.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      User-Friendly Design
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                     We ensure that your website is easy to navigate. A user-friendly design with clear navigation menus, intuitive layout,
                       and responsive design will enhance the overall user experience and keep clients exploring your site.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                      Clear Call-to-Action (CTA)
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                      Use compelling and clear calls-to-action throughout your website. Whether it's encouraging users to sign up for newsletters, 
                      explore related content, or make a purchase, strategically placed CTAs guide users and keep them engaged.
                       
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
