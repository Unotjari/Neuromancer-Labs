'use client'

import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion'

const FirstSection = () => {
    return (
        <section className='md: py-36 py-10 space-y-10 bg-[#d1d1f7]'>
              <div className='container mx-auto text-center md:w-1/2'>
                <div className = 'text-6xl flex justify-center md:px-20 pb-10  text-[#2b1c50]'>
                A smarter way to increase revenue
                </div>
                <p className='text-lg md:text-xl mb-10  text-[#2b1c50]'>
                 Want more efficiency in your organisation? Neuromancer can drive clarity and impact at scale by connecting work and workflows to company-wide goals.
                 </p>
                 <div className = 'flex gap-4 justify-center'>
                    <Link href = '/contact'>
                    <button className = ' 
                    text-white
                    md:justify-center
                    md:flex
                    font-light
                    rounded-[60px]
                    border-8
                    border-indigo-400/90
                    py-3
                    px-6
                    xl:py-6
                    xl:px-12
                    bg-[#565add]
                  
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300
                    hover:scale-110
                    '>
                        Get Started
                    </button>
                    </Link>
                    
                    <Link href = '/pricing'>
                        <button className=' text-white
                    md:justify-center
                    md:flex
                    font-light
                    rounded-[60px]
                    border-8
                    border-indigo-400/90
                    py-3
                    px-6
                    xl:py-6
                    xl:px-12
                    bg-[#565add]
                  
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300
                    hover:scale-110'>
                             See How it works
                        </button>
                    </Link>
                 </div>
              </div>


              <div className = 'md:pt-10 items-center space-y-10 md:flex justify-center md:mx-auto md:space-x-10'>
                  <motion.div
                   initial = {{y:0 , opacity:0}} 
                   animate = {{y:10, opacity:1}}
                   className = 'px-10 md:px-0'
                    
                   >
                    <Image 
                    src = '/images/campaign.png'
                    alt = 'illustration'
                    width = {500}
                    height = {500}
                    />
                          
                  </motion.div>

                  <motion.div
                   initial = {{y:0 , opacity:0}} 
                   animate = {{y:10, opacity:1}}
                   className = 'px-10 md:px-0'
                    
                   >
                    <Image 
                    src = '/images/computer.png'
                    alt = 'illustration'
                    width = {500}
                    height = {500}
                    />
                          
                  </motion.div>

                  <motion.div
                   initial = {{y:0 , opacity:0}} 
                   animate = {{y:10, opacity:1}}
                   className = 'px-10 md:px-0'
                    
                   >
                    <Image 
                    src = '/images/purple.png'
                    alt = 'illustration'
                    width = {500}
                    height = {500}
                    />
                          
                  </motion.div>
              </div>
        </section>
    );
}

export default FirstSection;