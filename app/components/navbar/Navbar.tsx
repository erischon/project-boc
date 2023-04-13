"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import { FiMenu } from "react-icons/fi";
import { SlUser, SlLogout } from "react-icons/sl";

/**
 * @description The Navbar component
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <nav className="flex justify-between items-center border-b-2 border-cyan-600 h-16">
      <div className="ml-4">
        <img
          src="/images/logo.png"
          alt="Logo BOC"
          className="w-[30px] h-[30px]"
        />
      </div>

      <div className="hidden sm:flex">
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:opacity-50">Dashboard</li>
          <li className="cursor-pointer hover:opacity-50">Temps</li>
          <li className="cursor-pointer hover:opacity-50">Clients</li>
          <li className="cursor-pointer hover:opacity-50">Trésorerie</li>
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
            <div className="cursor-pointer hover:opacity-50">
              <SlUser className="text-xl" />
            </div>

            <div
              className="cursor-pointer hover:opacity-50"
              onClick={() => signOut()}
            >
              <SlLogout className="text-xl rotate-180" />
            </div>
          </div>
        </div>

        {isOpen ? (
          <div onClick={() => signOut()} className="cursor-pointer">
            Déconnexion
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
