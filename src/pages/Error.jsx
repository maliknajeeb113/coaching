import { ArrowForwardRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="flex h-screen justify-center items-center flex-col text-center font-satoshi gap-4 px-[30px]">
    <h1 className="text-9xl font-semibold">404</h1>
    <h2 className="lg:text-6xl text-4xl font-medium">Page Not Found</h2>
    <p className="lg:text-xl text-xl">
      The page you are looking for is not available or has been moved.
      <br />
      Try a different page or go to homepage with the button below.
    </p>
    <Link to="/">
      <button
        className="group relative border-2 border-black px-[24px] lg:px-8 py-4 lg:text-sm rounded-lg text-xs font-semibold my-4"
        aria-label="Go to Home"
      >
        <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-white items-center flex gap-2">
          GO HOME <ArrowForwardRounded />
        </span>
        <div className="absolute left-0 top-0 h-full w-0 bg-black transition-all ease-in-out duration-300 group-hover:w-full" />
      </button>
    </Link>
  </div>
);

export default Error;
