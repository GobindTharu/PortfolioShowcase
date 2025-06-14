import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { slideInFromLeft } from "../Utils/motion";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const menuIcon = [
    { icon: "./home.png", link: "/" },
    { icon: "./about.png", link: "/about" },
    { icon: "./skill.png", link: "/skills" },
    { icon: "./project.png", link: "/projects" },
  ];

  const menuList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-transparent  shadow-sm ">
      <div className="md:mx-42 rounded-b-full  bg-white/70  border-gray-200 border-b">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-4 flex justify-between items-center h-16">
          <Link to="/">
            <img
              src="./logo.png"
              className="h-16 w-52  bg-cover cursor-pointer"
            ></img>
          </Link>

          {/* Desktop Menu start */}

          <div className="absolute left-2   bg-transparent  backdrop-blur-lg border-2 border-purple-900 shadow-2xl rounded-lg py-12 px-3 top-52 hidden lg:flex lg:flex-col items-between gap-6">
            {menuIcon.map(({ icon, link }) => (
              <Link key={link} to={link}>
                <span className="text-sm font-medium px-3 py-2  rounded-md transition cursor-pointer">
                  <img
                    src={icon}
                    className="h-10 w-10 bg-cover rounded-lg  hover:border-white hover:border-b-2 text-transparent"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-2 space-x-3 ">
              <span className="text-lg">Connect With Me:</span>
              <a
                href="https://www.facebook.com/balgobind422"
                className="text-black hover:text-blue-600 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/balgobind422/"
                className="text-black hover:text-blue-400 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/balgobind422"
                className="text-black hover:text-blue-300 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/balgobind422/"
                className="text-black hover:text-pink-400 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Single Toggle Button */}
          <div className="lg:hidden cursor-pointer" ref={toggleRef}>
            <button
              onClick={handleToggle}
              className="focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-7 h-7 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Sliding Mobile Dropdown */}
        <div
          ref={menuRef}
          className={clsx(
            "fixed top-16 right-0 w-80 h-100 bg-gray-100 border-l border-gray-200 shadow-xl z-140 flex flex-col justify-between py-8 px-6 transition-transform duration-300 ease-in-out cursor-pointer",
            {
              "translate-x-0": isMenuOpen,
              "translate-x-full": !isMenuOpen,
            }
          )}
        >
          <nav className="space-y-2 ">
            {menuList.map(({ name, link }) => (
              <Link key={link} to={link} onClick={() => setIsMenuOpen(false)}>
                <span className="block text-[15px] font-semibold text-gray-800 px-4 py-2 rounded-sm hover:bg-gray-100 transition-all duration-200">
                  {name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="my-4 border-t border-gray-100" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
