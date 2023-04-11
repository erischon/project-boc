"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

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

      <div className="flex gap-4 mr-4">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer relative"
        >
          <FiMenu className="text-2xl" />
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
