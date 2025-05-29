import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
  <div className="topnav bg-[#031645] text-white w-full">
    <div className="navbar-container flex flex-col md:flex-row items-center justify-between w-full px-6 py-6">
      <p className="font-semibold text-white text-2xl tracking-widest font-[times] mb-2 md:mb-0">
        Matthew Linerode
      </p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12">
        <Link to="/" className="text-white text-xl font-[cambria]">Home</Link>
        <Link to="/projects" className="text-white text-xl font-[cambria]">Projects</Link>
        <Link to="/contact" className="text-white text-xl font-[cambria]">Contact</Link>
      </div>
    </div>
  </div>
</div>

    );

}

export default Navbar;