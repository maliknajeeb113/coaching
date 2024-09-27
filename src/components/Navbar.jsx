import React, { useState } from "react";
import { Link } from "react-scroll";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const NavBar = () => {
  let navItems = [
    { name: "Home", id: "home" },
    { name: "Notes", id: "notes" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const handleOnClick = (id) => {
    setIsOpen(!isOpen);
    setActivePage(id);
    console.log(activePage);
  };

  return (
    <div>
      <div className="fixed left-0 px-[20px] xs:px-[30px] w-full h-20 flex justify-between items-center bg-white backdrop-blur-[10px] z-20 lg:top-[-490px]">
        <div>
          <span>Coaching</span>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
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
        </div>
      </div>

      <ul
        className={`lg:flex gap-[30px] lg:rounded-[30px] mx-[20px] xs:mx-[30px] lg:mx-0 p-[20px_30px] lg:p-[8px_13px] fixed lg:top-[33px] w-[calc(100%-40px)] xs:w-[calc(100%-60px)] lg:w-auto left-0 lg:left-1/2 bg-[#1f2426] lg:bg-[#1f2426e6] backdrop-blur-[10px] text-white lg:transform lg:translate-x-[-50%] z-10 transition-all duration-500 ease-in lg:transition-none ${
          isOpen ? "top-20" : "top-[-490px]"
        }`}
      >
        {navItems.map((navItem) => (
          <li
            key={navItem.id}
            className={`tracking-[.03em] leading-[30px] uppercase rounded-[40px] py-[5px] lg:py-0 lg:px-[10px] text-[13px] font-normal no-underline lg:hover:bg-white lg:hover:text-black hover:cursor-pointer duration-200 flex relative ${
              activePage === navItem.id ? "lg:bg-white lg:text-black" : ""
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
            >
              {navItem.id == "home" ? (
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
    </div>
  );
};

export default NavBar;
