"use client";

/**
 * @description The Footer component
 */
const Footer = () => {
  return (
    <footer className="flex justify-between w-full bg-cyan-700 mt-auto py-4 px-4">
      <div className="text-white text-xs">
        © Eri Schön 2023 - {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
