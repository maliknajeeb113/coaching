import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-scroll";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import logo from "../assets/images/logo.svg";
import { Sling as Hamburger } from "hamburger-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Notes", id: "notes" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navRef = useRef(null); // Ref for the dropdown menu

  // Optimized scroll & click event handlers
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]);

  return (
    <div>
      {/* Navbar */}
      <div className="fixed left-0 px-[20px] xs:px-[30px] w-full h-20 flex justify-between items-center bg-white bg-opacity-70 backdrop-blur-md lg:top-[-490px] z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-6" alt="Sanjeev Edupoint Logo" />
          <span className="font-satoshi font-medium px-2 text-xl">Sanjeev Edupoint</span>
        </div>

        {/* Hamburger Menu */}
        <div className="text-white bg-black rounded-full p-1">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </div>

      {/* Navigation Menu */}
      <ul
        ref={navRef}
        className={`lg:flex gap-10 lg:rounded-[30px] mx-[20px] xs:mx-[30px] lg:mx-0 p-[20px] lg:p-[8px_13px] fixed lg:top-[33px] rounded-b-lg w-[calc(100%-40px)] xs:w-[calc(100%-60px)] lg:w-auto left-0 lg:left-1/2 bg-[#1f2426] backdrop-blur-[10px] text-white lg:transform lg:translate-x-[-50%] z-10 transition-all duration-500 ease-in-out ${
          isOpen ? "top-20" : "top-[-490px]"
        } ${
          isScrolled
            ? "lg:bg-opacity-70 lg:bg-[#1f2426b3] lg:backdrop-blur-lg lg:translate-y-[-15px]"
            : "lg:bg-opacity-100 lg:bg-[#1f2426e6] lg:translate-y-0"
        }`}
      >
        {navItems.map(({ id, name }) => {
          const isActive = activePage === id;
          return (
            <Link
              to={id}
              key={id}
              smooth
              spy
              offset={-100}
              duration={500}
              onSetActive={setActivePage}
              onClick={() => setIsOpen(false)}
              className={`tracking-[.03em] leading-[30px] uppercase rounded-sm lg:rounded-[40px] py-[5px] lg:py-0 px-[15px] lg:px-[10px] text-[13px] font-normal no-underline lg:hover:bg-white lg:hover:text-black hover:cursor-pointer duration-200 flex relative ${
                isActive ? "bg-white text-black" : ""
              }`}
            >
              {id === "home" ? (
                <>
                  <span className="hidden lg:block">
                    <HomeRoundedIcon />
                  </span>
                  <span className="lg:hidden">{name}</span>
                </>
              ) : (
                name
              )}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
