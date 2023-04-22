"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { FiMenu } from "react-icons/fi";
import { SlUser, SlLogout } from "react-icons/sl";
import Link from "next/link";
import UserInfo from "../users/UserInfo";
import LogoBoc from "../LogoBoc";

/**
 * @description The Navbar component
 */
const HorizontalBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <section className="flex justify-between md:justify-end items-center bg-slate-700 text-white md:bg-white md:text-black px-4 py-4 mb-6 border-b-2 border-[var(--primary-color)]">
      <div className="md:hidden">
        <LogoBoc />
      </div>

      <div className="flex gap-4 mr-4 py-[5px]">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative md:hidden"
        >
          <FiMenu className="text-2xl" />
        </div>

        <div className="hidden md:flex justify-between items-center gap-8 w-full">
          <div className="flex gap-4">
            <div className="relative cursor-pointer hover:opacity-50">
              <Link href={"/user"}>
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
    </section>
  );
};

export default HorizontalBar;
