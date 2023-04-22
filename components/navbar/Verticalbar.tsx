"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiMoneyEuroBoxLine } from "react-icons/ri";
import { AiOutlineProject, AiOutlineFieldTime } from "react-icons/ai";

import Link from "next/link";

/**
 * @description The Navbar component
 */
const VerticalBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const inactiveLink =
    "cursor-pointer flex gap-2 items-center py-1 hover:opacity-50 ";
  const activeLink = `${inactiveLink} bg-white text-blue-900 rounded-l-md`;

  return (
    <div>
      <div className="flex items-center gap-1 pb-4 mb-6 border-b-2 border-slate-300">
        <img
          src="/images/logo-light.png"
          alt="Logo BOC"
          className="w-[30px] h-[30px]"
        />
        <span className="text-xl">oc</span>
      </div>

      <nav className="flex flex-col w-full mr-6">
        <Link
          href="/dashboard"
          className={pathname === "/dashboard" ? activeLink : inactiveLink}
        >
          <MdOutlineDashboard />
          Dashboard
        </Link>

        <Link
          href="/dashboard/projets"
          className={pathname === "/projets" ? activeLink : inactiveLink}
        >
          <AiOutlineProject />
          Projets
        </Link>

        <Link
          href="/"
          className={pathname === "/temps" ? activeLink : inactiveLink}
        >
          <AiOutlineFieldTime />
          Temps
        </Link>

        <Link
          href="/"
          className={pathname === "/clients" ? activeLink : inactiveLink}
        >
          <IoPersonOutline />
          Clients
        </Link>

        <Link
          href="/"
          className={pathname === "/finances" ? activeLink : inactiveLink}
        >
          <RiMoneyEuroBoxLine />
          Trésorerie
        </Link>
      </nav>
    </div>
  );
};

export default VerticalBar;
