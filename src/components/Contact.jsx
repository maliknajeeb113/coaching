import { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (formData) => {
    setIsSubmitted(true);
    try {
      window.location.href = `mailto:${formData.email}?subject=Query related to Sanjeev Edupoint&body=Hi, my name is ${formData.name} (${formData.phone}). ${formData.message}`;
      setIsSuccess(true);
    }
    catch(err) {
      setIsSuccess(false);
      document.getElementById("demo").innerHTML = err.message;
    }
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10 px-5 xs:px-8 text-[#1F2426]">
      <div className="pr-20">
        <ul className="flex gap-4 text-[14px] md:text-[15px] mb-[30px] uppercase">
          <li>05</li>
          <li><hr className="w-10 h-[1px] bg-gray-100 border-0 rounded my-3 dark:bg-gray-700"/></li>
          <li>Contact</li>
        </ul>
        <h2 className="leading-[50px] mb-[40px] text-[34px] md:text-[40px]">
          How can we support you in your studies?
        </h2>
        <div className="flex flex-col gap-4 max-w-48 text-lg leading-[30px] font-thin">
          <div>
            243/b New Plots Puran nagar, Jammu, J&K
          </div>
          <div>
            <a href="mailto:#">info@email.com</a>
            <div>00 (123) 456 78 90</div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[26px] leading-10 mb-[30px] lg:mb-[80px] font-extralight">
          Need more information about our classes? Simply fill out our contact
          form below and our team will be in touch soon!
        </p>
        <div className="mb-[30px]">
        {!isSubmitted && <form
            id="email-form"
            name="email-form"
            className=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] x mb-[50px] gap-[50px]">
              <div className="col-span-2 md:col-span-1">
                <input
                  className="py-2 w-[100%] border-solid border border-transparent border-b-[#333333] text-black placeholder-black focus:outline-none bg-transparent min-h-[54px] text-[18px] leading-[30px] font-thin"
                  maxLength="256"
                  name="Name"
                  placeholder="What is your name *"
                  type="text"
                  id="Name"
                  required
                  {...register("name")}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  className="py-2 w-[100%] border-solid border border-transparent border-b-[#333333] text-black placeholder-black focus:outline-none bg-transparent min-h-[54px] text-[18px] leading-[30px] font-thin"
                  maxLength="256"
                  name="Phone"
                  placeholder="Your mobile number *"
                  type="text"
                  id="Phone"
                  required
                  {...register("phone")}
                />
              </div>
              <div
                className="col-span-2"
              >
                <input
                  className="py-2 w-[100%] border-solid border border-transparent border-b-[#333333] text-black placeholder-black focus:outline-none bg-transparent min-h-[54px] text-[18px] leading-[30px] font-thin"
                  maxLength="256"
                  name="Email"
                  placeholder="Your email address *"
                  type="text"
                  id="Email"
                  required
                  {...register("email")}
                />
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Write your message *"
                  maxLength="5000"
                  id="message"
                  name="Message"
                  required
                  className="py-5 w-[100%] border-solid border border-transparent border-b-[#333333] text-black placeholder-black focus:outline-none bg-transparent min-h-[150px] text-[18px] leading-[30px] font-thin"
                  {...register("message")}
                ></textarea>
              </div>
            </div>
            <div className="inline-block">
              <input
                type="submit"
                data-wait="Please wait..."
                className="border border-[#333333] bg-transparent text-black tracking-[.03rem] uppercase rounded-[10px] px-[20px] pt-[12px] pb-[11px] text-[14px] font-medium leading-[26px] hover:cursor-pointer transform active:scale-75 transition-transform"
                value="Submit"
              />
            </div>
          </form>}
          {isSubmitted && isSuccess && <div
            className="font-extralight mb-5"
            aria-label="Email Form success"
          >
            <div>Thank you! Your submission has been received!</div>
          </div>}
          {isSubmitted && !isSuccess && <div
            className="font-extralight"
            aria-label="Email Form failure"
          >
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;