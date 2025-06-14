import React, { useState } from "react";
import { motion } from "framer-motion";

const swingAnimation = {
  animate: {
    rotate: [10, -10, 10],
    x: [0, 4, -4, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Profile = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex justify-center items-start mt-16 h-[300px] relative border-amber-50 p-2">
      <motion.div
        variants={swingAnimation}
        animate={!isHovering ? "animate" : undefined}
        className="absolute top-16 rotate-180 flex flex-col items-center md:w-82 md:h-82 w-48 h-48 "
        style={{
          transformOrigin: "top center",
        }}
      >
        <img
          src="./rope.png"
          alt=""
          className="rotate-90 w-full h-full object-cover z-1000"
        />
      </motion.div>

      <motion.div
        variants={swingAnimation}
        animate={!isHovering ? "animate" : undefined}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
        className="relative top-14 flex flex-col items-center md:w-82 md:h-92 w-46 h-48 rounded-lg border-4 border-white shadow-lg bg-white overflow-hidden"
        style={{
          transformOrigin: "top center",
        }}
      >
        <div className="md:w-82 md:h-82 w-40 h-40 rounded-lg border-4 border-white shadow-lg overflow-hidden bg-white">
          <img
            src="./profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
            initial={{ scale: 0.9 }}
            animate={{ scale: 5 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <h1 className="text-purple-700 md:font-bold p-2">
          Bal Gobind Chaudhary
        </h1>
      </motion.div>
    </div>
  );
};

export default Profile;
