import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {});

  return (
    <div>
      <nav>
        <div className="px-lg-4 py-lg-1 py-2 nav ">
          <div className="container">
            <div className="d-flex flex-lg-row flex-column justify-content-between py-3">
              <div className="d-flex justify-content-between">
                <HashLink className="logo" to="#">
                  CONVERTER
                </HashLink>
                <div className="d-lg-none d-flex align-items-center">
                  <svg
                    onClick={() => setIsOpen(!isOpen)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 18H20M4 6H20H4ZM4 12H12H4Z"
                      stroke="#e5e5e5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className={`hide-mobile ${isOpen ? "show" : ""}`}>
                <HashLink to="#about" className="nav-link pl-lg-4">
                  About
                </HashLink>
                <HashLink to="#faq" className="nav-link pl-lg-4">
                  FAQ
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
