import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import logo from "../assets/images/logo.svg";
import { Sling as Hamburger } from 'hamburger-react';

const NavBar = () => {
  let navItems = [
    { name: "Home", id: "home" },
    { name: "Notes", id: "notes" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navRef = useRef(null); // Ref for the entire navbar

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnClick = (id) => {
    setIsOpen(false);
    setActivePage(id);
  };

  return (
    <nav ref={navRef} aria-label="Main Navigation" className="relative">
      <div className="fixed left-0 px-[20px] xs:px-[30px] w-full h-20 flex justify-between items-center bg-white bg-opacity-70 backdrop-blur-md lg:top-[-490px] z-50">
        <div className="flex items-center">
          <img src={logo} alt="Sanjeev Edupoint Logo" className="h-6" />
          <span className="font-satoshi font-medium px-2 text-xl">Sanjeev Edupoint</span>
        </div>

        <button
          aria-label="Toggle Navigation Menu"
          className="text-white bg-black rounded-full p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </button>
      </div>

      <ul
        className={`lg:flex gap-10 lg:rounded-[30px] mx-[20px] xs:mx-[30px] lg:mx-0 p-[20px] lg:p-[8px_13px] fixed lg:top-[33px] rounded-b-lg w-[calc(100%-40px)] xs:w-[calc(100%-60px)] lg:w-auto left-0 lg:left-1/2 bg-[#1f2426] backdrop-blur-[10px] text-white lg:transform lg:translate-x-[-50%] z-10 transition-all duration-500 ease-in-out ${
          isOpen ? "top-20" : "top-[-490px]"
        }
        ${
          isScrolled
            ? "lg:bg-opacity-70 lg:bg-[#1f2426b3] lg:backdrop-blur-lg lg:translate-y-[-15px]"
            : "lg:bg-opacity-100 lg:bg-[#1f2426e6] lg:translate-y-0"
        }`}
      >
        {navItems.map((navItem) => (
          <li
            key={navItem.id}
            className={`tracking-[.03em] leading-[30px] uppercase rounded-sm lg:rounded-[40px] py-[5px] lg:py-0 px-[15px] lg:px-[10px] text-[13px] font-normal no-underline lg:hover:bg-white lg:hover:text-black hover:cursor-pointer duration-200 flex relative ${
              activePage === navItem.id ? "bg-white text-black" : ""
            }`}
          >
            <Link
              to={navItem.id}
              smooth
              spy
              offset={-100}
              duration={500}
              onSetActive={(id) => setActivePage(id)}
              onClick={() => handleOnClick(navItem.id)}
              name={navItem.id}
              aria-label={`Navigate to ${navItem.name}`}
            >
              {navItem.id === "home" ? (
                <>
                  <span className="hidden lg:block">
                    <HomeRoundedIcon />
                  </span>
                  <span className="lg:hidden">{navItem.name}</span>
                </>
              ) : (
                navItem.name
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
