import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo.png"
import { Button } from "@/components/ui/button";
import { getLogedUser } from "@/server_actions/auth/auth_actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CalendarDays } from "lucide-react";
import {
      DropdownMenu,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner";
import NavDropDown from "./NavDropDown";

const NavBar = async () => {
      const user = await getLogedUser();
      const date = user?.createdAt ? new Date(user.createdAt) : null;
      const formattedDate = date ? date.toLocaleString('en-US', { month: 'long', year: 'numeric' }) : "N/A";
      const userFallback = user?.name.slice(2).toUpperCase();
      // handle logout

      return (
            <div className="container mx-auto relative z-20">
                  <div className="flex justify-between absolute w-full">
                        {/* Logo */}
                        <div>
                              <Image
                                    src={logo}
                                    width={600}
                                    height={600}
                                    alt="Tutor.com a online learning platform"
                                    className="w-20"
                              />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-20">
                              <div className="flex items-center gap-10">
                                    <Link href="/">Home</Link>
                                    <Link href="/">Tutors</Link>
                                    <Link href="/">Courses</Link>
                                    <Link href="/">Careers</Link>
                                    <Link href="/">Blog</Link>
                                    <Link href="/">About Us</Link>
                                    <Link href="/">FAQ</Link>
                              </div>

                              {/* User Section */}
                              <div className="flex items-center gap-6">
                                    {user ? (
                                          <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                      <div>
                                                            <HoverCard>
                                                                  <HoverCardTrigger asChild>
                                                                        <Avatar className="cursor-pointer">
                                                                              <AvatarImage src={user?.referencedUser?.profileImage} />
                                                                              <AvatarFallback>{userFallback}</AvatarFallback>
                                                                        </Avatar>
                                                                  </HoverCardTrigger>
                                                                  <HoverCardContent>
                                                                        <div className="flex items-center gap-3">
                                                                              <Avatar>
                                                                                    <AvatarImage src={user?.referencedUser?.profileImage} />
                                                                                    <AvatarFallback>{userFallback}</AvatarFallback>
                                                                              </Avatar>
                                                                              <div className="space-y-1">
                                                                                    <h4 className="text-sm font-semibold">{user?.name}</h4>
                                                                                    <p className="text-sm">{user?.email}</p>
                                                                                    <div className="flex items-center pt-2">
                                                                                          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                                                                                          <span className="text-xs text-muted-foreground">
                                                                                                Joined {formattedDate}
                                                                                          </span>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </HoverCardContent>
                                                            </HoverCard>
                                                      </div>
                                                </DropdownMenuTrigger>

                                                <NavDropDown />
                                          </DropdownMenu>
                                    ) : (
                                          <>
                                                <Link href="/login">
                                                      <Button>Login</Button>
                                                </Link>
                                                <Link href="/register">
                                                      <Button>Sign up</Button>
                                                </Link>
                                          </>
                                    )}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NavBar;
