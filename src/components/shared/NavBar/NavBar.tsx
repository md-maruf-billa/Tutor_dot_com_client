import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.png"
import { Button } from "@/components/ui/button";
import { getLogedUser } from "@/server_actions/auth/auth_actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = async () => {
      const user = await getLogedUser()
      console.log(user)
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
                                    {
                                          user ? <>
                                                <Avatar title="Go Dahsboard">
                                                      <AvatarImage src={user?.referencedUser?.profileImage} />
                                                      <AvatarFallback>{user?.name.slice(2).toLocaleUpperCase()}</AvatarFallback>
                                                </Avatar>
                                          </> :
                                                <>
                                                      <Link href="/login"><Button>Login</Button></Link>
                                                      <Link href="/register"><Button>Sign up</Button></Link>
                                                </>
                                    }
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NavBar;