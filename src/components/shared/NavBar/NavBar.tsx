import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.png"
import { Button } from "@/components/ui/button";

const NavBar = () => {
      return (
            <div className="container mx-auto relative z-20">
                  <div className="flex justify-between  absolute w-full">
                        <div className="">
                              <Image
                                    src={logo}
                                    width={600}
                                    height={600}
                                    alt="Tutor.com a online learning platform"
                                    className="w-20"
                              />
                        </div>

                        <div className="flex items-center gap-20">
                              <div className="flex items-center gap-10">
                                    <Link href={"/"}>Home</Link>
                                    <Link href={"/"}>Tutors</Link>
                                    <Link href={"/"}>Courses</Link>
                                    <Link href={"/"}>Careers</Link>
                                    <Link href={"/"}>Blog</Link>
                                    <Link href={"/"}>About Us</Link>
                                    <Link href={"/"}>FAQ</Link>
                              </div>
                              <div className="flex items-center gap-6">
                                    <Link href="/login"><Button>Login</Button></Link>
                                    <Link href="/register"><Button>Sign up</Button></Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NavBar;