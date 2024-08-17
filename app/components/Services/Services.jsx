import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <>
      <div className="bg-raisin-black rounded-lg my-2">
        <div className="p-[19px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Services</p>
            </div>
            <div className="w-12 h-12 cursor-pointer rounded-full hover:bg-[#2c2f33] flex items-center justify-center">
              <svg
                role="img"
                aria-hidden="false"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                data-test-icon="edit-medium"
                fill="#FFFFFFE6"
              >
                <path d="M21.7,2.3c-1.1-1.1-2.9-1.1-4,0L15.1,4.9L19.1,9l2.6-2.6C22.8,5.1,22.8,3.4,21.7,2.3z M14.1,5.9L3,17v4h4L18.1,9.9L14.1,5.9z"></path>
              </svg>
            </div>
          </div>
          <div className="pt-3">
            <ul>
              <li className="text-sm font-medium">
                Website Development • UI/UX Design Implementation • E-commerce
                Solutions • Web Application Development • API Integration •
                Performance Optimization • State Management Solutions
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-darkGray duration-200 ShowH ease-in-out hover:bg-[#2c2f33] rounded-b-lg cursor-pointer gap-2 flex items-center justify-center h-[41px] w-full">
          <p className="text-base font-semibold">Show all</p>
          <IoMdArrowRoundForward className="text-xl" />
        </div>
      </div>
    </>
  );
};

export default Services;
