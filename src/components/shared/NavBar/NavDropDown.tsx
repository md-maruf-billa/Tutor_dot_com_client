"use client"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { logOutUser } from '@/server_actions/auth/auth_actions';
import { LayoutDashboard, LogOut } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'sonner';

const NavDropDown = () => {
      const handleLogOut = async () => {
            const res = await logOutUser()
            if (res) {
                  toast.success("Log out successfull.")
            }
      }
      return (
            <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={`/dashboard`} >
                        <DropdownMenuItem className="cursor-pointer">
                              <LayoutDashboard />
                              <span>Dashboard</span>
                        </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                        <LogOut />
                        <span>Log out</span>
                  </DropdownMenuItem>
            </DropdownMenuContent>
      );
};

export default NavDropDown;