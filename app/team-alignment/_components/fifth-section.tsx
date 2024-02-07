import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="bg-[#ffedec] mx-auto">
      <div className="py-4">
        <div className="md:flex md:space-y-0 items-center md:p-40">
          <div className="md:order-1 md:pr-0">
            <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
              <div className="order-2 md:order-1 w-full md:w-1/2">
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

              <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                <div className="space-y-1 text-md">
                  <div className="text-[#6f1f1d] font-medium leading-normal text-2xl md:text-4xl pb-4">
                  Create valuable content 
                  </div>
                  <div className="text-md text-[#6f1f1d] md:leading-8 font-light">
                  Content marketing is a good compliment to SEO in boosting your website traffic. You can add your keywords to the content you make.
                  </div>
                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    blog post 
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    Don’t underestimate the power of guest blogging either. By contributing to other reputable websites,
                     you can tap into their audience, increase your exposure, and even enhance your website’s SEO through backlinks.

                    </div>

                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    infographic 
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    Don’t forget to optimize your content for other search engines and not just the big names like Google.
                     Although Google is the most popular, different search engines may have different algorithms and catering to a variety can broaden your reach. 

                    </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
