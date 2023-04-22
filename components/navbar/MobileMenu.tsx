"use client";

import { AiOutlineClose } from "react-icons/ai";

import Menu from "./Menu";
import MenuUser from "./MenuUser";

const MobileMenu = () => {
  return (
    <div className="absolute top-0 end-0 border-1 rounded-md border-slate-400">
      <div className="bg-slate-100 flex flex-col items-end text-black">
        <div className="text-2xl p-2">
          <AiOutlineClose />
        </div>

        <div className="px-4 py-4">
          <div className="flex justify-around mb-4">
            <MenuUser />
          </div>

          <Menu />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
