import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/logo.png";
import git from "/assets/git.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navActivated, setNavActivated] = useState(false);

  const navLinkClass = ({ isActive }) =>
    navActivated && isActive
      ? "text-primary font-semibold border-b-2 border-primary pb-1"
      : "text-base-content hover:text-primary transition-colors";

  const handleNavClick = () => {
    setNavActivated(true);
    setMenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* ......................Logo */}
        <Link to="/home" className="flex items-center gap-2" onClick={handleNavClick}>
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-lg text-purple-500 text-bold">HERO.IO</span>
        </Link>

        {/* .................... Menu */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/home" className={navLinkClass} onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/apps" className={navLinkClass} onClick={handleNavClick}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={navLinkClass} onClick={handleNavClick}>
            Installation
          </NavLink>
        </div>

        {/* ...................... Button */}
        <a
          href="https://github.com/urmi213"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center btn btn-primary  btn-sm hidden md:block lg:inline-flex"
        >
           <img src={git} alt="" className="w-4 h-4" />
          Contribute
        </a>

       
        <button
          className="md:hidden btn btn-outline btn-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-base-200 p-4 flex flex-col gap-4">
          <NavLink to="/" className={navLinkClass} onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/apps" className={navLinkClass} onClick={handleNavClick}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={navLinkClass} onClick={handleNavClick}>
            Installation
          </NavLink>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
          >
           
            Contribute
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
