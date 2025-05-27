import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="topnav bg-[#031645] text-white ">
                <div className="navbar-container flex justify-between">
                    <p className="p-6 font-semibold text-white text-2xl tracking-widest font-[times]">Matthew Linerode</p>
                    <div className="flex justify-items">
                        <Link to="/" className="p-6 text-white text-xl font-[cambria]">Home</Link>
                        <Link to="/projects" className="p-6 text-white text-xl font-[cambria]">Projects</Link>
                        <Link to="/contact" className="p-6 text-white text-xl font-[cambria]">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;