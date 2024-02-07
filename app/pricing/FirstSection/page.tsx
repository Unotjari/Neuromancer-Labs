'use client'


import { Building2, CalendarDays, CalendarMinus, Check, User } from "lucide-react";
import React, { useState } from "react";

const FirstSection = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const togglePlan = () => {
    setIsMonthlyPlan(!isMonthlyPlan);
  };

  return (
    <div className="flex flex-col space-y-10  pb-20 items-center justify-center">
      <div className="space-y-6 flex flex-col text-center pt-20 px-10 md:px-0">
        <div className="text-gray-800 text-xl">PRICING</div>
        <div className="text-5xl">Easily elevate your company. Start here.</div>
        <div className="text-2xl text-gray-500">
          Get in contact with us. No credit card required
        </div>
      </div>

      
      

      <div className="">
        <div
          className={`${
            isMonthlyPlan ? "block" : "hidden"
          } text-center  text-2xl`}
        ></div>
        <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
          <div className="border-gray-500 p-10 rounded-lg border space-y-8 md:w-1/2 ">
            <div className="text-2xl">Starter</div>
            <div className="text-xl">
              For teams that need to create project plans with confidence.
            </div>

            <div className="text-5xl font-semibold">BW P1,999.00</div>

            <div className="">
            Web Maintenance Package
From P 84/ month
NB: Price depends on the features of the website.
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-2xl underline text-center">Purchase Now</div>

            <div>Manage tasks and personal to-dos:</div>
            <div className="flex space-y-6 flex-col">
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Two pages</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                    Business Email Accounts
                </div>
              </div>
            
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                    web hosting with 1 GB Storage
                </div>
              </div>
             
              
             
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                    24/7 Customer Support
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                    Two content managed pages
                </div>
              </div>
              
              
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                    Custom Domain
                </div>
              </div>
            </div>
          </div>

          <div className="border-purple-500 p-10 rounded-lg border space-y-8 md:w-1/2">
            <div className="text-2xl">Premium</div>
            <div className="text-xl">
            Our Premium special includes four static web pages.
            </div>
            {isMonthlyPlan ? (
                <div>
                            <div className="text-5xl font-semibold">BW P2,349.99</div>
                </div>
            ) : (
                <div className="text-5xl font-semibold">
                From P 84/ month
                </div>
            )
                    }
    

            <div className="">
            Web Maintenance Package
From P 84/ month
NB: Price depends on the features of the website.
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-2xl underline text-center">Purchase Now</div>

            <div>Everything in Basic, plus :</div>
            <div className="flex space-y-6 flex-col">
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                Four static pages
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                Website Hosting with 1GB
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                Training included

                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                     Search Engine Optimization
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                        
                       First Month Hosting
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                        
                         Fully Responsive
                </div>
              </div>
             </div>
          </div>


          <div className="border-teal-500 p-10 rounded-lg border space-y-8 md:w-1/2">
            <div className="text-2xl">Business</div>
            <div className="text-xl">
            An online selling solution that includes everything you need to start selling online.
            </div>
            {isMonthlyPlan ? (
                <div>
                            <div className="text-5xl font-semibold">BW P3,290.99</div>
                </div>
            ) : (
                <div className="text-5xl font-semibold">US $329.99</div>
            )
                    }
    

            <div className="">
            Web Maintenance Package
From P 84/ month
NB: Price depends on the features of the website.

            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-2xl underline text-center">Purchase Now</div>

            <div>Everything in Premium, plus :</div>
            <div className="flex space-y-6 flex-col">
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                7 - 10 Website pages
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                Add unlimited pages using a WordPress CMS
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                        
                E-Commerce/Online shop   
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                        
                First month hosting
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                        
                Training included
                </div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">
                        
                Search Engine Optimization  
                </div>
              </div>
             
              </div>
          </div>

 
        </div>
        </div>
  
      


    </div>
  );
};

export default FirstSection;
