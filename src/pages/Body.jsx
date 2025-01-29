import { motion } from "framer-motion";
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
            src="data:image/jpeg;base64,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"
            alt=""
            // unoptimized={true}
            // fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </motion.div>

        <div className="space-y-10 px-0">
          <h4 className="text-3xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-gray-400">little</span>{" "}
            background
          </h4>
          <div className="text-sm sm:text-base space-y-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui natus voluptas accusamus molestias minus reiciendis autem earum nobis mollitia deleniti odio in amet aliquam porro, eum modi illo perferendis vitae voluptates distinctio debitis laborum? Veniam atque voluptatibus voluptatem. Natus, alias. Omnis reiciendis quisquam mollitia culpa, voluptatem tempore provident, ipsum dolore distinctio sapiente laboriosam dolores nostrum eligendi maxime repudiandae recusandae esse nisi cupiditate quaerat. Vitae, quia perspiciatis dicta quo eveniet aut animi eius accusantium suscipit, sequi aspernatur fugiat debitis quis illum consequuntur ex obcaecati eos temporibus nostrum at. Iusto, ipsam aliquid commodi porro esse nisi molestiae ea ratione doloribus vero?</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Body;
