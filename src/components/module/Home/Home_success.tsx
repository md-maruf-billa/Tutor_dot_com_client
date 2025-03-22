import Title from '@/components/shared/Title/Title';
import React from 'react';

const Home_success = () => {
      return (
            <div className='mt-28'>
                  <Title
                        title_first='Our'
                        title_second='Success'
                        description='Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. '
                  />

                  <div className='mt-16 flex justify-between items-center'>

                        <div className='text-center'>
                              <h1 className='text-[var(--BOther)] text-6xl'>15K+</h1>
                              <p className='text-xl'>Students</p>
                        </div>
                        <div className='text-center'>
                              <h1 className='text-[var(--BOther)] text-6xl'>1K+</h1>
                              <p className='text-xl'>Teachers</p>
                        </div>
                        <div className='text-center'>
                              <h1 className='text-[var(--BOther)] text-6xl'>70%</h1>
                              <p className='text-xl'>Total success</p>
                        </div>
                        <div className='text-center'>
                              <h1 className='text-[var(--BOther)] text-6xl'>6+</h1>
                              <p className='text-xl'>Years of experience</p>
                        </div>
                  </div>
            </div>
      );
};

export default Home_success;