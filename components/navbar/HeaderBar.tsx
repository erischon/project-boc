"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { FiMenu } from "react-icons/fi";
import { SlUser, SlLogout } from "react-icons/sl";
import Link from "next/link";
import UserInfo from "../users/UserInfo";
import LogoBoc from "../LogoBoc";
import MobileMenu from "./MobileMenu";
import MenuUser from "./MenuUser";

/**
 * @description The Header Bar component
 */
const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <section className="flex justify-between md:justify-end items-center bg-slate-700 text-white md:bg-white md:text-black px-4 py-4 mb-6 border-b-2 border-[var(--primary-color)]">
      <div className="md:hidden">
        <LogoBoc />
      </div>

      <div className="flex gap-4 mr-4 py-[5px] relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative md:hidden"
        >
          <FiMenu className="text-2xl" />

          {isOpen ? <MobileMenu /> : null}
        </div>

        <div className="hidden md:flex justify-between items-center gap-8 w-full">
          <div className="flex gap-4">
            <MenuUser />
          </div>
        </div>

        {isOpen ? <div className="hidden"></div> : null}
      </div>
    </section>
  );
};

export default HeaderBar;
