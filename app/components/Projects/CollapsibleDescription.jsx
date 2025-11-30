"use client";
import { useEffect, useRef, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const CollapsibleDescription = ({ description, maxLines = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (!el) return;

    const checkOverflow = () => {
      if (el.scrollHeight > el.clientHeight) {
        setHasOverflow(true);
      } else {
        setHasOverflow(false);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [description]);

  return (
    <div className="relative">
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[500px]" : "max-h-[4.5em]"
        } overflow-hidden`}
      >
        <p
          ref={pRef}
          className={`text-base leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        
        {/* Gradient Fade for Collapsed State */}
        {!isExpanded && hasOverflow && (
           <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-discordDark dark:via-discordDark/90"></div>
        )}
      </div>

      {/* Toggle Button */}
      {hasOverflow && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center gap-1 text-sm font-medium text-SkyBlue transition-colors hover:text-lightHover hover:underline dark:hover:text-darkHover"
        >
          {isExpanded ? (
            <>
              Show Less <IoChevronUp />
            </>
          ) : (
            <>
              Read More <IoChevronDown />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CollapsibleDescription;
