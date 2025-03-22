import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo/logo.png"
import { Input } from '@/components/ui/input';
import Custom_Button from '../Custom_Button/Custom_Button';
const Footer = () => {
      const date = new Date().getFullYear()
      return (

            <footer className="bg-[#252641] mt-20">
                  <div className="container px-6 py-8 mx-auto">
                        <div className="flex flex-col items-center text-center">
                              <div className='flex items-center gap-8'>
                                    <Link href={"/"}>
                                          <Image
                                                src={logo}
                                                width={600}
                                                height={600}
                                                alt='Logo'
                                                className='w-16 h-16'
                                          />
                                    </Link>
                                    <h1 className='text-left border-l-2 px-8 text-white'>Virtual Class <br /> for Zoom</h1>
                              </div>

                              <p className="max-w-md mx-auto mt-12 text-[#B2B3CF]">Subscribe to get our Newsletter</p>

                              <div className="flex gap-2 mt-4 w-full max-w-sm">
                                    <Input className='rounded-full h-12 placeholder:px-4' placeholder='Enter your email' />
                                    <Custom_Button
                                          text='Subscribe'
                                          custom_class='px-8 py-3'
                                    />
                              </div>
                        </div>

                        <hr className="my-10 border-gray-200 dark:border-gray-700" />

                        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                              <p className="text-sm text-gray-500">© Copyright {date}. All Rights Reserved. <br /> Developed by- Md Abumahid Islam</p>

                              <div className="flex mt-3 -mx-2 sm:mt-0">
                                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                                    <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                              </div>
                        </div>
                  </div>
            </footer>

      );
};

export default Footer;