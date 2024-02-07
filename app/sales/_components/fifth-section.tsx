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
                  Customer Satisfaction In Websites
                  </div>
                  <div className="text-md text-[#6f1f1d] md:leading-8 font-light">
                  Achieving 100% customer satisfaction is the goal of any successful business, but it’s even more important for companies that offer B2B services. After all, if you’re not delivering your product or service to a high standard, 
                  you’re not just affecting the client – you could have an impact on the way in which they handle their customers, leading to unnecessary losses further down the chain.
                  </div>
                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    Errors and Bugs
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    This may seem a little obvious, but errors and bugs in a software which can take many forms, 
                    whether it is a simple spelling mistake in a system message or a bug that causes the software not to function as it should.

                    </div>

                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    Usability
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    No matter how sleek your software is, no matter how many bells and whistles it has, 
                    problems within it’s usability and design could mean the difference between a happy client and an unhappy client.

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
