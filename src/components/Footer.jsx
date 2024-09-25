import Marquee from "react-fast-marquee";
import logo from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <div className="flex flex-col items-center py-6 font-satoshi">
      <Marquee autoFill speed={100} pauseOnHover>
        <div className="px-8  text-8xl">Follow Us</div>
        <div className="inline-block w-[80px] h-[5px] bg-black"></div>
      </Marquee>

      <div id="footer-heads" className="flex flex-row pt-12 justify-between px-32 w-full">
        
        {/* left side */}
        <div id="left" className="flex flex-col w-1/4 gap-4">
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
        <div className="flex flex-row gap-32">
          <ul>
            <li className="font-medium pb-4">REACH US</li>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          <ul>
          <li className="font-medium pb-4">LEARN MORE</li>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          <ul>
          <li className="font-medium pb-4">FOLLOW US</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            
          </ul>
          
        </div>

      </div>
    </div>
  );
};

export default Footer;
