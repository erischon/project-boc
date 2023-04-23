"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiMoneyEuroBoxLine } from "react-icons/ri";
import { AiOutlineProject, AiOutlineFieldTime } from "react-icons/ai";

/**
 * @description The Menu component
 */
const Menu = () => {
  const pathname = usePathname();

  const inactiveLink =
    "cursor-pointer flex gap-2 items-center py-1 hover:opacity-80 px-2";
  const activeLink = `${inactiveLink} bg-white text-blue-900 rounded-l-md`;
  return (
    <nav className="flex flex-col w-full mr-6 gap-2">
      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? activeLink : inactiveLink}
      >
        <MdOutlineDashboard />
        Dashboard
      </Link>

      <Link
        href="/projets"
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
  );
};

export default Menu;
