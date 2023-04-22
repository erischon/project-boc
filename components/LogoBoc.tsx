"use client";

import logoLight from "/images/logo-light.png";

const LogoBoc = () => {
  return (
    <div className="flex items-center gap-1">
      <img
        src="/images/logo-light.png"
        alt="Logo BOC"
        className="w-[30px] h-[30px]"
      />

      <span className="text-xl">oc</span>
    </div>
  );
};

export default LogoBoc;
