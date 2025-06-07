import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3B82F6] text-white hover:text-blue-100 shadow-md p-4 sticky top-0 z-50">
      <div className=" max-w-7xl mx-auto flex md:justify-start  justify-between gap-[35rem] items-center px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span className="text-blue-900">Trendify</span>
        </Link>

          <div className="hidden md:flex gap-[3rem] text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category/Web"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Web
          </NavLink>
          <NavLink
            to="/category/AI"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            AI
          </NavLink>
          <NavLink
            to="/category/ML"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            ML
          </NavLink>
          <NavLink
            to="/category/Data%20Science"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Data Science
          </NavLink>
        </div>
        
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-blue-600 dark:text-blue-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-3 bg-white dark:bg-gray-800 shadow-md">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 " : "") + "block hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/category/Web"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 " : "") + "block hover:text-blue-600"
            }
          >
            Web
          </NavLink>
          <NavLink
            to="/category/AI"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 " : "") + "block hover:text-blue-600"
            }
          >
            AI
          </NavLink>
          <NavLink
            to="/category/ML"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 " : "") + "block hover:text-blue-600"
            }
          >
            ML
          </NavLink>
          <NavLink
            to="/category/Data%20Science"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 " : "") + "block hover:text-blue-600"
            }
          >
            Data Science
          </NavLink>
        </div>
      )}
    </nav>
  );
}
