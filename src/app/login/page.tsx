import Image from 'next/image';
import React from 'react';
import loginBanner from "@/assets/images/login.png"

const LoginPage = () => {
      return (
            <div className='min-h-screen flex justify-between items-center' >
                  <div>
                        <Image
                              src={loginBanner}
                              width={600}
                              height={600}
                              alt='Login page image'
                        />
                  </div>

            </div>
      );
};

export default LoginPage;