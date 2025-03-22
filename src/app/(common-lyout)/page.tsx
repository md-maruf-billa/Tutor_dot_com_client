import Banner from '@/components/module/Home/Banner';
import Home_About from '@/components/module/Home/Home_About';
import Home_services from '@/components/module/Home/Home_services';
import Home_success from '@/components/module/Home/Home_success';
import Home_testimonial from '@/components/module/Home/Home_testimonial';
import React from 'react';

const HomePage = () => {
      return (
            <div>
                  <Banner />
                  <div className='container mx-auto'>
                        <Home_success />
                        <Home_services />
                        <Home_About />
                        <Home_testimonial />
                  </div>
            </div>
      );
};

export default HomePage;