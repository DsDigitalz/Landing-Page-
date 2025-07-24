import React from "react";

export default function Navbar() {
  return (
    // Header
    <header className="p-3 flex items-center justify-between lg:px-10">
      {/* logo */}
      <div className="flex items-center gap-1">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <h1 className="text-[32px] font-semibold">teach</h1>
      </div>

      {/* hamburger */}
      <div className="flex flex-col gap-1 lg:hidden">
        <div className="bg-black p-0.5 w-10 rounded-full"></div>
        <div className="bg-black p-0.5 w-10 rounded-full"></div>
        <div className="bg-black p-0.5 w-10 rounded-full"></div>
      </div>

      {/* Nav menu */}
      <nav>
        <ul className="flex gap-20">
            <li className="font-medium">Products</li>
            <li className="font-medium">Solutions</li>
            <li className="font-medium">Pricing</li>
            <li className="font-medium">Resourcess</li>
          
        </ul>
      </nav>
    </header>
  );
}
