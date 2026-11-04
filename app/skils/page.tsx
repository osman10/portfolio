"use client";
import ScrollIndicator from "../components/ScrollIndicator";
import { motion } from "framer-motion";


const page = () => {
  return (
    <>
      {/* full screen content */}
      <div className="relative bg-image h-screen flex flex-col justify-center">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* text content */}
        <div className="container mx-auto text-center md:text-left text-white relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1
            }}
            className="h1 text-center md:text-left"
          >
            My Skills
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.3
            }}
            className="font-bold tracking-[1.6px] py-4 max-w-[350px] text-center md:text-left"
          >
        Core technologies and developer tools I leverage to engineer robust full-stack applications.
          </motion.h2>
        </div>
        {/* Placed at the bottom of the hero section */}
        <ScrollIndicator />
      </div>


      {/* below full screen content */}
      <div className="container mx-auto px-4 lg:px-0 py-8 h-screen">
        <p className="">Building Scalable Full-Stack Web Applications with React, Node.js, Express & MongoDB. Dedicated to crafting fast, user-centered web applications with clean REST APIs, robust database schemas, and smooth interactive interfaces</p>
      </div>


    </>
  );
};

export default page;