import React from "react";

export const Contact = () => {
  return (
    <div className="flex px-8 font-satoshiVaria text-[#1F2426]">
      <div>
        <div className="flex gap-4 mb-8 uppercase">
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
      <div id="w-node-bec057cd-d64d-9b42-7b41-2c7bd6e67e0f-b67e14b3">
        <p className="paragraph-large margin-bottom-80">
          Need assistance more about our services? Simply fill out our contact
          form below and our team will be in touch soon!
        </p>
        <div className="contact-form-block w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            data-wf-page-id="659e8ba042c43623b67e14b3"
            data-wf-element-id="9862a4a7-38b4-7440-7d90-f5e020170ff5"
            aria-label="Email Form"
          >
            <div className="form-fields-grid">
              <div id="w-node-_9862a4a7-38b4-7440-7d90-f5e020170ff7-b67e14b3">
                <input
                  className="text-field w-input"
                  maxlength="256"
                  name="Name"
                  data-name="Name"
                  placeholder="What is your name *"
                  type="text"
                  id="Name"
                  required=""
                />
              </div>
              <div id="w-node-_9862a4a7-38b4-7440-7d90-f5e020170ff9-b67e14b3">
                <input
                  className="text-field w-input"
                  maxlength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="You email address *"
                  type="text"
                  id="Email"
                  required=""
                />
              </div>
              <div
                id="w-node-_9bab9189-225b-92e6-e5fc-440c8e320161-b67e14b3"
                className="select-field-wrapper"
              >
                <select
                  id="field-2"
                  name="field-2"
                  data-name="Field 2"
                  className="select-field w-select"
                >
                  <option value="">Select one...</option>
                  <option value="First">First choice</option>
                  <option value="Second">Second choice</option>
                  <option value="Third">Third choice</option>
                </select>
              </div>
              <div id="w-node-_9862a4a7-38b4-7440-7d90-f5e020170ffb-b67e14b3">
                <textarea
                  placeholder="Tell us about your project *"
                  maxlength="5000"
                  id="field"
                  name="field"
                  required=""
                  data-name="Field"
                  className="textarea w-input"
                ></textarea>
              </div>
            </div>
            <div className="inline-block">
              <input
                type="submit"
                data-wait="Please wait..."
                className="button-basic w-button"
                value="Submit"
              />
            </div>
          </form>
          <div
            className="success-message w-form-done"
            tabindex="-1"
            role="region"
            aria-label="Email Form success"
          >
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div
            className="error-message w-form-fail"
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
