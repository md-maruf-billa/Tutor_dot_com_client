"use client"
import Image from 'next/image';
import React from 'react';
import loginBanner from "@/assets/images/login.png";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Custom_Button from '@/components/shared/Custom_Button/Custom_Button';
import { loginUser } from '@/server_actions/auth/auth_actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

// Define schema using Zod
const loginSchema = z.object({
      email: z.string().min(1, 'Email is required').email('Invalid email address'),
      password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const LoginForm = () => {
      const router = useRouter()
      const form = useForm({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                  email: '',
                  password: '',
            },
      });

      // handle login
      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Loging......")
            try {
                  const res = await loginUser(data);
                  if (res.success) {
                        toast.success(res.message, { id: toastId })
                        router.push("/")
                  } else {
                        toast.error(res.message, { id: toastId })
                  }
            } catch (error) {
                  console.error('Login failed', error);
            }
      };

      return (
            <div className='min-h-screen flex justify-between items-center container mx-auto'>
                  <div>
                        <Image src={loginBanner} width={700} height={900} alt='Login page image' />
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-md space-y-8'>
                                    <h3 className='text-center'>Welcome to Tutor.com..</h3>

                                    <div className='bg-[var(--Bprimary)]/60 flex justify-between gap-2 items-center p-3 rounded-full w-2/3 mx-auto'>
                                          <Link href="/login" className="bg-[var(--Bprimary)] py-2 rounded-full text-white w-1/2 text-center">Login</Link>
                                          <Link href="/register" className="rounded-full py-2 w-1/2 text-center text-white">Register</Link>
                                    </div>

                                    <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel>E-mail</FormLabel>
                                                      <FormControl>
                                                            <Input {...field} className='rounded-full h-12 placeholder:px-3 border-[var(--Bprimary)]' placeholder="Enter your email" />
                                                      </FormControl>
                                                      {/* <FormMessage /> */}
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
                                                            <Input {...field} type='password' className='rounded-full h-12 placeholder:px-3 border-[var(--Bprimary)]' placeholder="Enter your password" />
                                                      </FormControl>
                                                      {/* <FormMessage /> */}
                                                </FormItem>
                                          )}
                                    />

                                    <div className="flex justify-end">
                                          <Custom_Button text='Login now' custom_class='py-3 px-10' />
                                    </div>
                              </form>
                        </Form>
                  </div>
            </div>
      );
};

export default LoginForm;
