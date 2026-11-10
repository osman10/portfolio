"use client";
import ScrollIndicator from "../components/ScrollIndicator";
import { motion } from "framer-motion";
import ShapeYourDream from "../components/ShapeYourDream";
import { CiDesktop, CiLaptop } from "react-icons/ci";
import { IoIosTabletLandscape } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";


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
      <div className="container mx-auto lg:px-4 py-0">
        <ShapeYourDream />

        {/* Responsiveness */}
        <div className="px-8 py-10 ">
          <h1 className="text-4xl text-center font-extrabold text-light-orange">Responsive design <span className="font-medium text-dark-grey">that fits all the devices</span></h1>
          <p className="text-center py-5 max-w-[900px] mx-auto"> The layout automatically detects screen size and adjusts the content, ensuring a fully responsive experience on any device.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {/* Card 1: Full Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2">
              {/* Icon placeholder (Replace with your icon) */}
              <div className="text-light-orange mb-2 text-6xl"><CiDesktop /></div>
              <h3 className="font-bold text-gray-800">1920 x 1080px</h3>
              <p className="text-sm text-gray-500">Full Screen Layout</p>
            </div>

            {/* Card 2: Laptop Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2">
              <div className="text-light-orange mb-2 text-6xl"><CiLaptop /></div>
              <h3 className="font-bold text-gray-800">1364 x 768px</h3>
              <p className="text-sm text-gray-500">Laptop Screen Layout</p>
            </div>

            {/* Card 3: Tablet Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2">
              <div className="text-light-orange mb-2 text-6xl"><IoIosTabletLandscape /></div>
              <h3 className="font-bold text-gray-800">1024 x 768px</h3>
              <p className="text-sm text-gray-500">Tablet Screen Layout</p>
            </div>

            {/* Card 4: Mobile Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2">
              <div className="text-light-orange mb-2 text-6xl"><IoPhonePortraitOutline /></div>
              <h3 className="font-bold text-gray-800">767 x 365px</h3>
              <p className="text-sm text-gray-500">Mobile Screen Layout</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;