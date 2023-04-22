"use client";

import { SlUser, SlLogout } from "react-icons/sl";
import Link from "next/link";
import { signOut } from "next-auth/react";

/**
 * @description The User Menu component
 */
const MenuUser = () => {
  return (
    <>
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
    </>
  );
};

export default MenuUser;
