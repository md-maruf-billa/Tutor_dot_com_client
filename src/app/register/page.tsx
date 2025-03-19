"use client"
import Image from 'next/image';
import React from 'react';
import registerBanner from "@/assets/images/register.png"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Custom_Button from '@/components/shared/Custom_Button/Custom_Button';

const LoginPage = () => {
      const form = useForm()

      // handle login
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
            console.log(data)
      }
      return (
            <div className='min-h-screen flex justify-between items-center container mx-auto' >
                  <div>
                        <Image
                              src={registerBanner}
                              width={700}
                              height={900}
                              alt='Login page image'
                        // className='w-full h-full'
                        />
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md space-y-8'>

                                    <h3 className='text-center '>Welcome to Tutor.com..</h3>

                                    <div className='bg-[var(--Bprimary)]/60 flex justify-between gap-2 items-center p-3 rounded-full w-2/3 mx-auto'>
                                          <Link href="/login" className="rounded-full py-2 w-1/2 text-center text-white">Login</Link>
                                          <Link href="/register" className="bg-[var(--Bprimary)] py-2 rounded-full text-white w-1/2 text-center">Register</Link>
                                    </div>
                                    <FormField
                                          control={form.control}
                                          name="name"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>Name</FormLabel>
                                                      <FormControl>
                                                            <Input className='rounded-full h-12 placeholder:px-3 border-[var(--Bprimary)]' placeholder="Enter your Name" {...field} />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>E-mail</FormLabel>
                                                      <FormControl>
                                                            <Input className='rounded-full h-12 placeholder:px-3 border-[var(--Bprimary)]' placeholder="Enter your email" {...field} />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="password"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>Password</FormLabel>
                                                      <FormControl>
                                                            <Input className='rounded-full h-12 placeholder:px-3 border-[var(--Bprimary)]' placeholder="Enter your password" type='password' {...field} />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />
                                    <div className="flex justify-end">
                                          <Custom_Button text='Register now' custom_class='py-3 px-10' />
                                    </div>
                              </form>
                        </Form>
                  </div>
            </div>
      );
};

export default LoginPage;