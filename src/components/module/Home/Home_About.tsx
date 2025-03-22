import Title from '@/components/shared/Title/Title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import teacher from "@/assets/images/teacher.png";
import student from "@/assets/images/student.png";

const Home_About = () => {
      return (
            <div className='mt-28'>
                  <Title
                        title_first='What is'
                        title_second='Tutor.com'
                        description='Tutor.com is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.'
                  />
                  <div className='mt-16 flex justify-between items-center gap-10'>
                        {/* Instructor Section */}
                        <div className='relative py-28 w-full flex flex-col items-center justify-center text-white rounded-2xl overflow-hidden'>
                              {/* Background Image */}
                              <Image
                                    src={teacher}
                                    alt="Instructor"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute top-0 left-0 z-0"
                              />
                              {/* Dark Overlay */}
                              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                              {/* Content */}
                              <div className="relative z-10 text-center p-8">
                                    <h1 className="text-2xl font-bold mb-4">FOR INSTRUCTORS</h1>
                                    <Button className="rounded-full bg-transparent border-white border hover:bg-transparent cursor-pointer text-white">Start a class today</Button>
                              </div>
                        </div>

                        {/* Student Section */}
                        <div className='relative py-28 w-full flex flex-col items-center justify-center text-white rounded-2xl overflow-hidden'>
                              {/* Background Image */}
                              <Image
                                    src={student}
                                    alt="Student"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute top-0 left-0 z-0"
                              />
                              {/* Dark Overlay */}
                              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                              {/* Content */}
                              <div className="relative z-10 text-center p-8">
                                    <h1 className="text-2xl font-bold mb-4">FOR STUDENTS</h1>
                                    <Button className="rounded-full cursor-pointer text-white bg-[#23BDEEE5]">Enter access code</Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Home_About;
