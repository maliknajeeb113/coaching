import Marquee from "react-fast-marquee";
import logo from "../assets/images/logo.svg";
const Footer = () => {
  return (
    <div className="flex flex-col w-screen items-center py-6">
      <Marquee autoFill speed={100} pauseOnHover>
        <div className="px-8 font-satoshi text-8xl">Follow Us</div>
        <div className="inline-block w-[80px] h-[5px] bg-black"></div>
      </Marquee>

      <div id="footer-heads" className="flex flex-row pt-12 justify-between w-screen px-8">
        
        {/* left side */}
        <div id="left" className="flex flex-col w-1/4 gap-4">
          <div className="flex items-center">
            <img src={logo} className="h-6" />
            <div className="font-satoshi font-medium px-2 text-xl">
              Sanjeev Edupoint
            </div>
          </div>
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla esse blanditiis impedit nemo aliquid. 
          </div>
        </div>
        
        {/* left side end */}
        {/* right side */}
        <div className="flex flex-row gap-4">
          <ul>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          <ul>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          <ul>
            <li>email id @gg.com</li>
            <li>9988775544</li>
            
          </ul>
          
        </div>

      </div>
    </div>
  );
};

export default Footer;
