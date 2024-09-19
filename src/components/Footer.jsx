import Marquee from "react-fast-marquee";
import logo from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <div className="flex flex-col w-screen items-center py-6">
      <Marquee autoFill speed={100} pauseOnHover>
        <div className="px-8 font-satoshi text-8xl">Follow Us</div>
        <div className="inline-block w-[80px] h-[5px] bg-black"></div>
      </Marquee>

      <div id="footer-heads" className="flex flex-row pt-12">
        <div id="left" className="flex flex-col">
          <div className="flex items-center">
            <img src={logo} className="h-6" />
            <div className="font-satoshi font-medium px-2 text-xl">
              Sanjeev Edupoint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
