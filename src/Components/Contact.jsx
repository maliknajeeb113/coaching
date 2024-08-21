import React from "react";

export const Contact = () => {
  return (
    <div className="flex gap-10 px-8 text-[#1F2426]">
      <div>
        <div className="flex flex-wrap gap-4 mb-8 uppercase">
          <div className="">05</div>
          <div className="">-----</div>
          <div className="">Contact</div>
        </div>
        <h2 className="leading-[50px] mb-[40px] text-[40px]">
          How can we help you about your project?
        </h2>
        <div className="flex flex-col gap-4 max-w-48 text-lg leading-[30px] font-thin">
          <div>
            <div>Moonshine St. 14/05 Chelsea, London, UK</div>
          </div>
          <div>
            <a href="mailto:#">info@email.com</a>
            <div>00 (123) 456 78 90</div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[26px] leading-10 mb-[80px] font-extralight">
          Need assistance more about our services? Simply fill out our contact
          form below and our team will be in touch soon!
        </p>
        <div className="mb-[30px]">
          <form
            id="email-form"
            name="email-form"
            className=""
          >
            <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] x mb-[50px] gap-[50px]">
              <div className="col-span-1">
                <input
                  className="py-2 w-[100%] border-solid border border-transparent border-b-[#333333] text-[#000000] placeholder-[#000000] focus:outline-none bg-transparent min-h-[54px] text-[18px] leading-[30px] font-thin"
                  maxLength="256"
                  name="Name"
                  placeholder="What is your name *"
                  type="text"
                  id="Name"
                  required=""
                />
              </div>
              <div className="col-span-1">
                <input
                  className="py-2 w-[100%] border-solid border border-transparent border-b-[#333333] text-[#000000] placeholder-[#000000] focus:outline-none bg-transparent min-h-[54px] text-[18px] leading-[30px] font-thin"
                  maxLength="256"
                  name="Email"
                  placeholder="You email address *"
                  type="text"
                  id="Email"
                  required=""
                />
              </div>
              <div
                className="col-span-2"
              >
                <select
                  id="field-2"
                  name="field-2"
                  className="py-2 w-[100%] border-solid border border-transparent border-b-[#333333] text-[#000000] placeholder-[#000000] focus:outline-none bg-transparent min-h-[54px] text-[18px] leading-[30px] font-thin"
                >
                  <option value="">Select one...</option>
                  <option value="First">First choice</option>
                  <option value="Second">Second choice</option>
                  <option value="Third">Third choice</option>
                </select>
              </div>
              <div className="col-span-2">
                <textarea
                  placeholder="Tell us about your project *"
                  maxLength="5000"
                  id="field"
                  name="field"
                  required=""
                  className="py-5 w-[100%] border-solid border border-transparent border-b-[#333333] text-[#000000] placeholder-[#000000] focus:outline-none bg-transparent min-h-[150px] text-[18px] leading-[30px] font-thin"
                ></textarea>
              </div>
            </div>
            <div className="inline-block">
              <input
                type="submit"
                data-wait="Please wait..."
                className="border border-[#333333] bg-transparent text-[#000000] tracking-[.03rem] uppercase rounded-[10px] px-[20px] pt-[12px] pb-[11px] text-[14px] font-medium leading-[26px] no-underline transition-all duration-200 ease-[cubic-bezier(.645,.045,.355,1)] relative overflow-hidde"
                value="Submit"
              />
            </div>
          </form>
          <div
            className="font-extralight mb-5"
            tabindex="-1"
            role="region"
            aria-label="Email Form success"
          >
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div
            className="font-extralight"
            tabindex="-1"
            role="region"
            aria-label="Email Form failure"
          >
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
