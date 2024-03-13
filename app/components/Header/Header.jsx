import React from "react";

const Header = () => {
  return (
    <>
      <div className="sticky flex items-center py-4 px-[50px] bg-white justify-between">
        <div className="flex items-center text-[#333] duration-300 ease-in-out cursor-pointer hover:text-[#7843E9] gap-5">
          <div className="bg-[#7843E9] rounded-full">
            <img
              src="/images/asad1.jpg"
              alt=""
              className="w-[50px] h-[50px] object-cover overflow-hidden p-1 object-center rounded-full"
            />
          </div>
          <div>
            <h2 className="uppercase text-lg  font-bold SpacingLetter">
              Muhammad Asad
            </h2>
          </div>
        </div>
        <div className="">
          <ul class="flex items-center text-base font-bold SpacingLetter">
            <li className="px-[30px] py-[22px] text-[#333] duration-300 ease-in-out cursor-pointer hover:text-[#7843E9]">
              <a href="#" className="">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="px-[30px] py-[22px] text-[#333] duration-300 ease-in-out cursor-pointer hover:text-[#7843E9]">
              <a href="#" className="">
                About{" "}
              </a>
            </li>
            <li className="px-[30px] py-[22px] text-[#333] duration-300 ease-in-out cursor-pointer hover:text-[#7843E9]">
              <a href="#" className="">
                {" "}
                Projects{" "}
              </a>
            </li>
            <li className="px-[30px] py-[22px] text-[#333] duration-300 ease-in-out cursor-pointer hover:text-[#7843E9]">
              <a href="#" className="">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
