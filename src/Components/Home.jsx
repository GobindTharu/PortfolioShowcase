import { SparklesIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button1, Button2 } from "./Button";
import { letterText } from "../Constants/constant";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../Utils/motion";
import Profile from "./Profile";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    if (isWriting && charIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + letterText[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isWriting]);

  const startWriting = () => {
    setDisplayText("");
    setCharIndex(0);
    setIsWriting(true);
  };

  return (
    <>
      <div className="relative  w-full px-16 py-16">
        {/* Background Video */}
        <video
          className="fixed inset-0 w-full min-h-screen object-cover"
          src="./starfall.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col  md:flex-row items-center justify-start mt-22 sm:mt-7 md:mt-12 lg:mt-16 w-full z-[20] gap-6 sm:gap-3 md:gap-5 lg:gap-10"
        >
          {/* Left Section */}
          <div className="flex flex-col ml-2 sm:ml-0 md:ml-0 lg:ml-32 justify-center gap-2 sm:gap-5 md:gap-4 text-start md:text-left sm:text-left w-full z-50">
            <motion.div
              variants={slideInFromTop(0.25)}
              className="w-[200px] sm:w-[260px] md:w-[300px] py-[6px] sm:py-[8px] px-[4px] border rounded-xl border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
            >
              <span className="flex items-center justify-start">
                <SparklesIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mr-2 sm:mr-3  text-[#8e63f1]" />
                <h1 className="text-[12px] sm:text-[14px] md:text-[16px] xs:text-[333px] text-center  text-gray-200 sm:text-center">
                  FullStack Developer Portfolio
                </h1>
              </span>
            </motion.div>

            <motion.div
              variants={slideInFromTop(0.5)}
              className="my-3 sm:my-4 md:my-5 z-[10]"
            >
              <h2 className="Welcome-text uppercase tracking-wide text-base sm:text-lg md:text-md lg:text-xl text-purple-500 text-center md:text-left">
                Dynamic Web Design With Next.js
              </h2>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.75)}
              className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[700px] sm:max-w-[600px] w-auto h-auto"
            >
              <span className="text-violet-800">
                Providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  the best{" "}
                </span>
                project exprience
              </span>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(1)}
              className="flex flex-col mt-3 mb-0 text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                I&apos;m
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Bal Gobind Chaudhary{" "}
                </span>
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(1.25)}
              className="text-lg text-gray-300 my-5 max-w-[600px]"
            >
              Full Stack Software Developer with experience in MERN Stack
              Developer.
              {displayText}
            </motion.p>

            <motion.div
              variants={slideInFromLeft(1.75)}
              className="flex mx-auto md:mx-0 gap-5"
            >
              <Button1 startWriting={startWriting} />
              <Button2 />
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            variants={slideInFromRight(1.5)}
            className="relative flex top-0 flex-col sm:flex-row items-center justify-center w-full p-4 sm:p-6 lg:p-8"
          >
            <Profile />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
