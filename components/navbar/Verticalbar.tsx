"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Menu from "./Menu";

/**
 * @description The Vertical Bar component
 */
const VerticalBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const inactiveLink =
    "cursor-pointer flex gap-2 items-center py-1 hover:opacity-80 px-2";
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

      <Menu />
    </div>
  );
};

export default VerticalBar;
