"use client"
import Image from 'next/image';
import React from 'react';
import registerBanner from "@/assets/images/register.png";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Custom_Button from '@/components/shared/Custom_Button/Custom_Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { loginUser, registerUser } from '@/server_actions/auth/auth_actions';
import { useRouter } from 'next/navigation';

// Define schema using Zod
const registerSchema = z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().min(1, 'Email is required').email('Invalid email address'),
      password: z.string().min(6, 'Password must be at least 6 characters long'),
      role: z.enum(['student', 'teacher'], { message: 'Role is required' })
});

const RegisterForm = () => {
      const router = useRouter()
      const form = useForm({
            resolver: zodResolver(registerSchema),
            defaultValues: {
                  name: '',
                  email: '',
                  password: '',
                  role: undefined
            },
      });


      // handle register
      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            const toastId = toast.loading("Account creating.....")
            try {
                  const res = await registerUser(data)
                  if (res.success) {
                        toast.success(res.message, { id: toastId })
                        await loginUser({ email: data?.email, password: data?.password })
                        router.push("/")
                  } else {
                        toast.error(res.message, { id: toastId })
                  }
            } catch (error) {
                  console.error('Registration failed', error);
            }
      };

      return (
            <div className='min-h-screen flex justify-between items-center container mx-auto'>
                  <div>
                        <Image src={registerBanner} width={700} height={900} alt='Login page image' />
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

                                    <FormField
                                          control={form.control}
                                          name="role"
                                          render={({ field }) => (
                                                <FormItem className='flex items-center gap-8'>
                                                      <FormLabel>Account Type:</FormLabel>
                                                      <FormControl>
                                                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                                                                  <FormItem className="flex items-center space-x-2">
                                                                        <FormControl>
                                                                              <RadioGroupItem value="student" />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal">Student</FormLabel>
                                                                  </FormItem>
                                                                  <FormItem className="flex items-center space-x-2">
                                                                        <FormControl>
                                                                              <RadioGroupItem value="teacher" />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal">Teacher</FormLabel>
                                                                  </FormItem>
                                                            </RadioGroup>
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

export default RegisterForm;
