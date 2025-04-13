"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const ProjectModal = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // match animation duration
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`custom-scrollbar h-[550px] w-full max-w-6xl transform overflow-y-auto rounded-lg bg-white transition-all duration-300 dark:bg-discordDark ${
          isClosing ? "animate-zoomOut" : "animate-zoomIn"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 flex h-[61px] items-center justify-between rounded-t-lg border-b bg-white px-4 dark:border-darkSecondaryGray dark:bg-discordDark">
          <h2 className="text-xl font-semibold">Media</h2>
          <div
            onClick={handleClose}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl font-medium hover:bg-discordDark"
          >
            <RxCross2 />
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto p-6 md:flex-row">
          <div className="w-full md:w-[60%]">
            <Image
              width={400}
              height={200}
              src={project.image}
              alt={project.title}
              className="mt-3 w-full rounded-lg object-cover"
              priority={false}
            />
          </div>
          <div className="w-full pb-10 md:w-[40%]">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <h1 className="text-xl font-semibold">{project.title}</h1>
              <Link target="_blank" href={project.Link}>
                <button className="my-3 flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-SkyBlue px-4 py-2 text-black hover:bg-lightHover dark:hover:bg-darkHover">
                  <p className="text-base font-semibold">Live Preview</p>
                </button>
              </Link>
            </div>
            {project.shortDescription && (
              <p className="mt-3 text-sm">{project.shortDescription}</p>
            )}
            {project.longDescription && (
              <p className="mt-3 text-sm">{project.longDescription}</p>
            )}
            {project.keyFeatures && (
              <>
                <p className="mt-4 text-base font-semibold">Key Features:</p>
                {project.keyFeatures.map((feature, i) => (
                  <p key={i} className="mt-1 text-sm">
                    {feature}
                  </p>
                ))}
              </>
            )}
            {project.technologies && (
              <>
                <p className="mt-2 text-base font-semibold">Technologies:</p>
                <p className="mt-1 text-sm">{project.technologies}</p>
              </>
            )}
            {project.conclusion && (
              <>
                <p className="mt-2 text-base font-semibold">Conclusion:</p>
                <p className="mt-1 text-sm">{project.conclusion}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
