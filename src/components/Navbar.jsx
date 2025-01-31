import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import logo from "../assets/images/logo.svg";
import { Sling as Hamburger } from 'hamburger-react'

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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    <div ref={navRef}>
      <div className={`fixed left-0 px-[20px] xs:px-[30px] w-full h-20 flex justify-between items-center bg-white bg-opacity-70 backdrop-blur-md lg:top-[-490px] z-50`}>
        <div className="flex items-center">
          <img src={logo} className="h-6" />
          <span className="font-satoshi font-medium px-2 text-xl">
            Sanjeev Edupoint
          </span>
        </div>

        <div className="text-white bg-black rounded-full p-1">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20}/>
        </div>
        
        {/* <div onClick={() => setIsOpen(!isOpen)}>
        
          {isOpen ? (
            <CloseRoundedIcon
              className="bg-[#1f2426] text-white text-4xl p-1 rounded-[50%] hidden"
              fontSize=""
            />
          ) : (
            <DragHandleRoundedIcon
              className="bg-[#1f2426] text-white text-4xl p-1 rounded-[50%] hidden"
              fontSize=""
            />
          )}
        </div> */}
        
      </div>

      <ul
        className={`lg:flex gap-10 lg:rounded-[30px] mx-[20px] xs:mx-[30px] lg:mx-0 p-[20px] lg:p-[8px_13px] fixed lg:top-[33px] rounded-b-lg w-[calc(100%-40px)] xs:w-[calc(100%-60px)] lg:w-auto left-0 lg:left-1/2 bg-[#1f2426] backdrop-blur-[10px] text-white lg:transform lg:translate-x-[-50%] z-10 transition-all duration-500 ease-in-out ${
          isOpen ? "top-20" : "top-[-490px]"
        }
        ${
          isScrolled
            ? "lg:bg-opacity-70 lg:bg-[#1f2426b3] lg:backdrop-blur-lg lg:translate-y-[-15px]" // Translucent and move up on scroll
            : "lg:bg-opacity-100 lg:bg-[#1f2426e6] lg:translate-y-0"
        }
        `}
      >
        {navItems.map((navItem) => (
          <Link
          to={navItem.id}
          key={navItem.id}
          smooth
          spy
          offset={-100}
          duration={500}
          onSetActive={(id) => setActivePage(id)}
          onClick={() => handleOnClick(navItem.id)}
          name={navItem.id}
          className={`tracking-[.03em] leading-[30px] uppercase rounded-sm lg:rounded-[40px] py-[5px] lg:py-0 px-[15px] lg:px-[10px] text-[13px] font-normal no-underline lg:hover:bg-white lg:hover:text-black hover:cursor-pointer duration-200 flex relative ${
            activePage === navItem.id ? "bg-white text-black" : ""
          }`}
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
          // <li
          //   
            
          // >
            
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
