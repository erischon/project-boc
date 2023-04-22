"use client";

import VerticalBar from "./Verticalbar";

const MobileMenu = () => {
  return (
    <div className="absolute top-0 end-0 border-1 border-slate-400">
      <div className="bg-orange-500">
        <VerticalBar />
      </div>
    </div>
  );
};

export default MobileMenu;
