"use client";

import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <nav className="bg-neutral-200">
      <div onClick={() => signOut()} className="cursor-pointer">
        Déconnexion
      </div>
    </nav>
  );
};

export default Navbar;
