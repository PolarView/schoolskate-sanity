"use client";
import { useState, useLayoutEffect } from "react";

const useWindowDimentions = (mobileWidth) => {
  const getWindowWidth = () => window.innerWidth;
  const getWindowHeight = () => window.innerHeight;
  const getIsMobile = () => (window.innerWidth <= +mobileWidth ? true : false);

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
      setIsMobile(getIsMobile());
      setWindowHeight(getWindowHeight());
    };

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);
  return { windowWidth, windowHeight, isMobile };
};

export default useWindowDimentions;
