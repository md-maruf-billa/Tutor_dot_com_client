import Image from 'next/image'
import bannerGirl from "@/assets/images/bannerGirl.png"
import { CalendarDays, Mail } from 'lucide-react'

export default function Banner() {
      return (
            <section className="relative min-h-screen bg-[var(--Bprimary)] flex justify-center items-center">
                  {/* Hero Content */}
                  <div className="relative z-10 container mx-auto pt-36 ">
                        <h1 className="text-5xl font-bold text-white">
                              <span className="text-[var(--BSelect)]">Studying</span> Online is now much easier
                        </h1>
                        <p className="mt-4 max-w-lg text-white">TOTC is an interesting platform that will teach you in a more interactive way.</p>

                        <div className="mt-6 space-x-4">
                              <button className="bg-white text-teal-500 px-6 py-3 rounded-full font-medium">Join for free</button>
                              <button className="text-white font-medium">▶ Watch how it works</button>
                        </div>
                  </div>


                  <div className="absolute left-[60%] z-20 top-[30%] bg-white/80 backdrop-sepia-0 text-black rounded-lg shadow-lg p-4 flex items-center space-x-3">
                        <div className='bg-[#23bdee] p-3 rounded-md text-white'>
                              <CalendarDays />
                        </div>
                        <div>
                              <p className="font-bold">250k</p>
                              <p className="text-sm">Assisted Student</p>
                        </div>
                  </div>

                  <div className="left-[60%] top-[60%] z-20 absolute bg-white/80 text-black rounded-lg shadow-lg p-4 space-y-2 backdrop-sepia-0 ">
                        <div className="relative flex items-center space-x-2">
                              <span className='absolute p-2 border-2 border-white bottom-0 left-8 rounded-full bg-green-600'></span>
                              <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="User" width={1000} height={1000} className="w-12 h-12 rounded-full" />
                              <div>
                                    <p className="font-medium">User Experience Class</p>
                                    <p className="text-xs text-gray-500">Today at 12:00 PM</p>
                              </div>
                        </div>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded w-fit cursor-pointer">Join Now</button>
                  </div>

                  <div className="absolute left-[80%] z-20 bg-white/80 backdrop-sepia-0 text-black rounded-lg shadow-lg p-4 flex items-center space-x-3">
                        <div className='bg-[#f88b3d] p-3 rounded-md text-white'>
                              <Mail />
                        </div>
                        <div>
                              <p className="font-bold">Congratulations</p>
                              <p className="text-sm">Your admission completed</p>
                        </div>
                  </div>

                  <Image
                        src={bannerGirl}
                        alt="Student"
                        width={700}
                        height={700}
                        className="absolute bottom-0 right-20 z-0"
                  />
            </section>
      )
}
