import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] px-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className=" text-[38px] font-semibold text-[#333333]">
              We’d love to here from you.
            </h2>
          </div>
          <div>
            <button className=" flex h-12 w-[142px] items-center justify-center rounded-xl bg-[#f7faff] ">
              <a
                href="https://asad-portfolio-ai.vercel.app/"
                className="ReadMore"
              >
                {" "}
                See Portfolio
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
