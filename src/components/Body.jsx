import { motion } from "framer-motion";
import Header from "../assets/images/Header.jpg"
const Body = () => {
  return (
    <section id="home" className="px-8 mt-20 lg:mt-28 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative text-center justify-center m-auto items-center"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center flex-shrink-0 mb-10 w-60 h-60 xl:w-[500px]"
        >
          <img
            src={Header}
            alt="Header Image"
            className="rounded-full object-cover"
          />
        </motion.div>

        <div className="space-y-10 px-0">
          <h4 className="text-3xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-gray-400">little</span>{" "}
            background
          </h4>
          <div className="text-sm sm:text-base space-y-2 px-16">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              qui natus voluptas accusamus molestias minus reiciendis autem
              earum nobis mollitia Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              qui natus voluptas accusamus molestias minus reiciendis autem
              earum nobis mollitia Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              qui natus voluptas accusamus molestias minus reiciendis autem
              earum nobis mollitia
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Body;
