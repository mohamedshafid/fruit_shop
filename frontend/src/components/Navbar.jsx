import { useState } from "react";
import clsx from "clsx";
import logo from "/logo.png";
import { useAppContext } from "../contexts/AppContext";
import { AlignJustify, BaggageClaim, X } from "lucide-react";
import { navLinks } from "../lib";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Top");
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const { toggleAuthModal } = useAppContext();

  return (
    <nav className="flex items-center justify-between z-100 px-2 py-5 sm:px-6 md:px-10 lg:px-16 bg-white shadow-sm">
      {/* Logo */}
      <h1 className="flex items-center gap-1 text-4xl font-bold cursor-pointer">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <span className="text-accent">Shop</span>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-4">
        {navLinks.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              onClick={() => setActiveLink(item.name)}
              className={clsx(
                "text-lg",
                activeLink === item.name
                  ? "text-accent font-bold"
                  : "text-gray-700"
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Slider Navigation */}
      <ul
        className={clsx(
          "sm:hidden",
          isSliderOpen
            ? "absolute top-0 right-0 z-50 flex h-screen w-1/2 flex-col items-center justify-between rounded-lg bg-white p-4 shadow-lg transition-all duration-500 ease-in-out"
            : "hidden"
        )}
      >
        <X
          className="absolute left-5 top-5 cursor-pointer"
          onClick={() => setIsSliderOpen(false)}
        />

        <div className="flex flex-col items-center gap-10 py-20">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                onClick={() => setActiveLink(item.name)}
                className={clsx(
                  "text-lg",
                  activeLink === item.name
                    ? "text-accent font-bold"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleAuthModal}
              className="rounded-xl bg-accent px-6 py-2 text-white"
            >
              Login
            </button>
          </li>
        </div>
      </ul>

      {/* Desktop Right Side */}
      <div className="hidden items-center gap-4 sm:flex">
        <BaggageClaim />
        <button
          onClick={toggleAuthModal}
          className="rounded-xl bg-accent px-6 py-2 text-white"
        >
          Login
        </button>
      </div>

      {/* Hamburger Icon */}
      <AlignJustify
        size={35}
        className="block cursor-pointer sm:hidden"
        onClick={() => setIsSliderOpen(true)}
      />
    </nav>
  );
};

export default Navbar;
