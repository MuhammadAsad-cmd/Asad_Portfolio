"use client";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundForward, IoMdArrowRoundUp } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

const CollapsibleDescription = ({ description, maxLines = 6 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const pRef = useRef(null);

  useEffect(() => {
    const el = pRef.current;
    if (!el) return;

    let rafId = 0;
    let ro;

    const checkOverflowForEl = (element) => {
      if (!element) return false;
      return element.scrollHeight > element.clientHeight + 1;
    };

    const applyCollapsedStyles = (element) => {
      element.style.display = "-webkit-box";
      element.style.WebkitLineClamp = String(maxLines);
      element.style.WebkitBoxOrient = "vertical";
      element.style.overflow = "hidden";
    };

    const applyExpandedStyles = (element) => {
      element.style.display = "block";
      element.style.WebkitLineClamp = "unset";
      element.style.WebkitBoxOrient = "unset";
      element.style.overflow = "visible";
    };

    const update = () => {
      if (!el) return;
      // Temporarily ensure collapsed styles for measurement
      applyCollapsedStyles(el);

      // wait for next frame to measure after style changes
      rafId = requestAnimationFrame(() => {
        setHasOverflow(checkOverflowForEl(el));

        // restore according to expanded state
        if (isExpanded) {
          applyExpandedStyles(el);
        } else {
          applyCollapsedStyles(el);
        }
      });
    };

    update();

    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => update());
      ro.observe(el);
    } else {
      window.addEventListener("resize", update);
    }

    return () => {
      // cleanup using the captured `el` (not pRef.current)
      if (ro && el) {
        try {
          ro.unobserve(el);
          ro.disconnect();
        } catch (e) {
          /* ignore if already disconnected */
        }
      } else {
        window.removeEventListener("resize", update);
      }

      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [description, maxLines, isExpanded]);

  return (
    <div className="space-y-3">
      {/* Description with truncation */}
      <div className="group relative">
        <p
          ref={pRef}
          title={description}
          className="leading-relaxed text-lightSecondarytext transition-all duration-300 dark:text-darkPrimaryGray"
          style={{
            display: isExpanded ? "block" : "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : String(maxLines),
            WebkitBoxOrient: isExpanded ? "unset" : "vertical",
            overflow: isExpanded ? "visible" : "hidden",
          }}
        >
          {description}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-4">
        {/* See More/Less Button: only show when content overflows or when expanded */}
        {hasOverflow || isExpanded ? (
          <button
            onClick={() => setIsExpanded((s) => !s)}
            className="group/btn flex items-center gap-2 text-SkyBlue transition-colors duration-300 hover:text-lightHover dark:hover:text-darkHover"
            aria-expanded={isExpanded}
          >
            <span className="text-sm font-medium">
              {isExpanded ? "See Less" : "See More"}
            </span>
            {isExpanded ? (
              <IoMdArrowRoundUp className="text-sm transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
            ) : (
              <IoMdArrowRoundForward className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            )}
          </button>
        ) : null}

        {/* Info icon with tooltip */}
        <div className="relative">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            className="text-SkyBlue transition-colors duration-300 hover:text-lightHover dark:hover:text-darkHover"
            aria-haspopup="true"
            aria-expanded={showTooltip}
            aria-controls="desc-tooltip"
          >
            <IoInformationCircleOutline className="text-lg" />
          </button>

          {/* Tooltip: appears on hover/focus of the info button */}
          {showTooltip ? (
            <div
              id="desc-tooltip"
              role="tooltip"
              className="absolute left-0 z-[999] mt-2 max-h-64 w-[450px] overflow-auto rounded-md border bg-white p-3 text-sm text-lightPrimarytext shadow-lg dark:border-neutral-800 dark:bg-discordDark dark:text-white"
            >
              <p className="whitespace-pre-wrap text-base">{description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleDescription;
