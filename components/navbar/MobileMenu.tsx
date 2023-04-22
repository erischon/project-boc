"use client";

import { AiOutlineClose } from "react-icons/ai";

import Menu from "./Menu";
import MenuUser from "./MenuUser";

/**
 * @description The Mobile Menu component
 */
const MobileMenu = () => {
  return (
    <div className="absolute top-0 end-0 border-1 border-slate-400">
      <div className="bg-slate-100 flex flex-col items-end text-black rounded-md">
        <div className="text-2xl p-2">
          <AiOutlineClose />
        </div>

        <div className="px-4 py-4">
          <Menu />

          <div className="flex justify-around mt-4 bg-slate-300 p-2 rounded-md">
            <MenuUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
