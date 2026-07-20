import React from "react";

const Navbar = () => {
  return (
    <nav className="h-20  flex items-center justify-between text-white bg-[rgba(122,18,107,0.8)]
 px-10 border-b">

      <h1 className="text-3xl font-bold">
        LENOVO
      </h1>

      <ul className="flex gap-10 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <button className="
      border 
      border-black
      px-6
      py-2
      hover:bg-black
      hover:text-white
      ">
        Login
      </button>

    </nav>
  );
};

export default Navbar;
