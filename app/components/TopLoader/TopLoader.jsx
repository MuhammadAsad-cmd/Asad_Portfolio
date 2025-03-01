"use client";
import NextTopLoader from "nextjs-toploader";
import React from "react";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#71b7fb"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      easing="ease"
      speed={200}
      zIndex={1600}
      showAtBottom={false}
    />
  );
};

export default TopLoader;
