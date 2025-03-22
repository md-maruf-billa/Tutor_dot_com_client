import Title from '@/components/shared/Title/Title';
import { CalendarDays, NotebookText, Users } from 'lucide-react';
import React from 'react';

const Home_services = () => {
      return (
            <div className='mt-28'>
                  <Title
                        title_first='All-In-One'
                        title_second='Cloud Software'
                        description='Tutor.com is one powerful online software suite that combines all the tools needed to run a successful school.'
                  />
                  <div className='grid grid-cols-3 gap-16 mt-22'>
                        <div className='bg-white p-14 flex flex-col items-center justify-center relative gap-4 shadow-md'>
                              <div className='absolute -top-8 bg-[#5B72EE] w-fit p-5 text-white rounded-full'>
                                    <NotebookText />
                              </div>
                              <h3 className='text-[var(--Bsecondary)] text-xl font-semibold
                              '>Online Billing, Invoicing, & Contracts</h3>
                              <p className='text-[var(--Bgray)] text-center'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                        </div>
                        <div className='bg-white shadow-md p-14 flex flex-col items-center justify-center relative gap-4'>
                              <div className='absolute -top-8 bg-[#00CBB8] w-fit p-5 text-white rounded-full'>
                                    <CalendarDays />
                              </div>
                              <h3 className='text-[var(--Bsecondary)] text-xl font-semibold
                              '>Easy Scheduling & Attendance Tracking</h3>
                              <p className='text-[var(--Bgray)] text-center'>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                        </div>
                        <div className='bg-white shadow-md p-14 flex flex-col items-center justify-center relative gap-4'>
                              <div className='absolute -top-8 bg-[var(--BOther)] w-fit p-5 text-white rounded-full'>
                                    <Users />
                              </div>
                              <h3 className='text-[var(--Bsecondary)] text-xl font-semibold
                              '>Student and Teacher Tracking</h3>
                              <p className='text-[var(--Bgray)] text-center'>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                        </div>
                  </div>
            </div>
      );
};

export default Home_services;