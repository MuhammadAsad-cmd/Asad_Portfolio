"use client";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { closeSidebar } from "@/redux/sidebarSlice";

const Sidebar = ({ id, position = "left", children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar[id]);

  return (
    <>
      {/* Overlay (Click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => dispatch(closeSidebar(id))}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 z-50 h-full w-[340px] bg-white shadow-lg transition-transform duration-300 ease-in-out dark:bg-discordDark
        ${position === "left" ? "left-0" : "right-0"}
        ${
          isOpen
            ? "translate-x-0"
            : position === "left"
              ? "-translate-x-full"
              : "translate-x-full"
        }
      `}
      >
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeSidebar(id))}
          className="text-SkyBlue absolute right-3 top-3"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Sidebar Content */}
        <div>{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
