"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { FiMenu } from "react-icons/fi";
import { SlUser, SlLogout } from "react-icons/sl";
import Link from "next/link";
import UserInfo from "../users/UserInfo";

/**
 * @description The Navbar component
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center border-b-2 border-cyan-700 h-16">
      <div className="ml-4 w-[120px]">
        <img
          src="/images/logo.png"
          alt="Logo BOC"
          className="w-[30px] h-[30px]"
        />
      </div>

      <div className="hidden sm:flex">
        <ul className="flex gap-4 uppercase text-sm ">
          <li
            className={`cursor-pointer hover:text-cyan-700  hover:border-cyan-700 hover:border-b-2 ${
              pathname === "/dashboard"
                ? "border-cyan-700 border-b-2"
                : "border-b-2 border-white"
            }`}
          >
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li
            className={`cursor-pointer hover:text-cyan-700  hover:border-cyan-700 hover:border-b-2 ${
              pathname === "/temps"
                ? "border-cyan-700 border-b-2"
                : "border-b-2 border-white"
            }`}
          >
            Temps
          </li>
          <li
            className={`cursor-pointer hover:text-cyan-700  hover:border-cyan-700 hover:border-b-2 ${
              pathname === "/clients"
                ? "border-cyan-700 border-b-2"
                : "border-b-2 border-white"
            }`}
          >
            Clients
          </li>
          <li
            className={`cursor-pointer hover:text-cyan-700  hover:border-cyan-700 hover:border-b-2 ${
              pathname === "/finances"
                ? "border-cyan-700 border-b-2"
                : "border-b-2 border-white"
            }`}
          >
            Trésorerie
          </li>
        </ul>
      </div>

      <div className="flex gap-4 mr-4">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative sm:hidden"
        >
          <FiMenu className="text-2xl" />
        </div>

        <div className="hidden sm:flex justify-between items-center gap-8 w-full">
          <div className="flex gap-4">
            <div className="relative cursor-pointer hover:opacity-50">
              <Link href={"/dashboard/user"}>
                <SlUser className="text-xl" />
              </Link>
            </div>

            <div
              className="cursor-pointer hover:opacity-50"
              onClick={() => signOut()}
            >
              <SlLogout className="text-xl rotate-180" />
            </div>
          </div>
        </div>

        {isOpen ? <div className="hidden"></div> : null}
      </div>
    </nav>
  );
};

export default Navbar;
