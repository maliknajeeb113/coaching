import Marquee from "react-fast-marquee";
import logo from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <div className="flex flex-col items-center py-12 font-satoshi">
      <Marquee autoFill speed={60} pauseOnHover className="overflow-hidden">
        <div className="px-8 text-5xl md:text-8xl">Follow Us</div>
        <div className="inline-block w-[80px] h-[5px] bg-black"></div>
      </Marquee>

      <div id="footer-heads" className="flex flex-col lg:flex-row pt-12 lg:justify-between px-8 lg:px-32 w-full py-6 gap-10">
        
        {/* left side */}
        <div id="left" className="flex flex-col lg:w-1/4 gap-4 ">
          <div className="flex items-center">
            <img src={logo} className="h-6" />
            <div className="font-satoshi font-medium px-2 text-xl">
              Sanjeev Edupoint
            </div>
          </div>
          <div className="text-xl text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla esse blanditiis impedit nemo aliquid. 
          </div>
        </div>
        
        {/* left side end */}
        {/* right side */}
        <div className="flex font-light flex-col md:flex-row gap-12 md:gap-32 text-lg ">
          <ul>
            <li className="font-medium pb-4 text-sm">REACH US</li>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          <ul>
          <li className="font-medium pb-4 text-sm">LEARN MORE</li>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          <ul>
          <li className="font-medium pb-4 text-sm">FOLLOW US</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            
          </ul>
          
        </div>
        {/* right side end*/}
 
        <hr className="border-black py-2" />


      </div>
    </div>
  );
};

export default Footer;
