"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TenthSection = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    className: "w-full",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="py-20 md:pb-20 flex flex-col items-center justify-center pb-32">
      <Slider {...settings} className="w-full">
        <>
        <div className=" bg-[#e3f3ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;I can't thank Neuromancer Labs enough for the outstanding web development work! 
              The website they created for my business is not only visually stunning but also incredibly functional.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium"> Sarah Johnson</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
        <div className=" bg-[#e7e0ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Neuromancer professionalism and responsiveness throughout the entire process made it a pleasure to work with them. 
              Our website is now generating more traffic and, most importantly, driving sales.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Matthew Machola</div>
                <div className="text-sm">COO</div>
              </div>
            </div>
          </div>
        </>

        <>
        <div className=" bg-[#e3ffef] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;I want to express my gratitude to Chris Davis for the amazing website he developed for my online store. 
              From the initial consultation to the final launch, Chris demonstrated unparalleled commitment to quality. .&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Lisa Thompson</div>
                <div className="text-sm">Founder </div>
              </div>
            </div>
          </div>
        </>


        <>
        <div className=" bg-[#ffede3] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Huge thanks to Neuromancer Labs for the incredible job she did on our company's website redesign.
               Neuromancer's ability to understand our brand and translate it into a visually stunning and user-friendly site is truly commendable.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Alex Berman</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>

        <>
        <div className=" bg-[#fffce3] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;I'm grateful to Neuromancer Labs for the exceptional web development work they did for my personal blog. The website not only looks fantastic but functions seamlessly.
               Neuromancer's attention to detail and commitment to delivering a high-quality product were evident throughout the project.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Loago Matengu</div>
                <div className="text-sm">Chief Marketing Officer</div>
              </div>
            </div>
          </div>
        </>


      </Slider>
    </div>
  );
};

export default TenthSection;
