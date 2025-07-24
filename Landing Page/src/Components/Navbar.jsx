import React from "react";

export default function Navbar() {
  return (
    // Header
    <header className="p-3 flex items-center justify-between md:lg:px-7 lg:px-10">
      {/* logo */}
      <div className="flex items-center gap-1">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <h1 className="text-[32px] font-bold">teach</h1>
      </div>

      {/* hamburger */}
      <button className="flex flex-col gap-1 lg:hidden">
        <div className="bg-black p-0.5 w-10 rounded-full"></div>
        <div className="bg-black p-0.5 w-10 rounded-full"></div>
        <div className="bg-black p-0.5 w-10 rounded-full"></div>
      </button>

      {/* Nav menu */}
      
        <ul className="hidden lg:flex lg:gap-20">
          <li className="font-medium">Products</li>
          <li className="font-medium">Solutions</li>
          <li className="font-medium">Pricing</li>
          <li className="font-medium">Resourcess</li>
        </ul>
      

      {/* button */}
      <div className="hidden lg:flex lg:gap-5">
        <button className="border-none rounded-lg p-2 px-4">Log In</button>
        <button className="border rounded-lg p-2 px-4">Sign Up Now</button>
      </div>
    </header>
  );
}
