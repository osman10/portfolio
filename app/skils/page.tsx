"use client";
import ScrollIndicator from "../components/ScrollIndicator";
import { motion } from "framer-motion";
import ShapeYourDream from "../components/ShapeYourDream";
import { CiDesktop, CiLaptop } from "react-icons/ci";
import { IoIosTabletLandscape } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Image from "next/image";
import GitHub from "../components/GitHub";


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

        {/* skills section */}
        <div className="py-5">
          <h1 className="text-4xl text-center font-extrabold text-light-orange">Modern Technologies <span className="font-medium text-dark-grey">Built for Every Device</span></h1>
          <p className="text-center py-5 max-w-[900px] mx-auto"> Leveraging robust MERN stack tools to build high-performance, fully responsive web applications that deliver a seamless experience across all screens.</p>
           
           
          {/* items */}
          <div className="flex justify-center rounded-2xl bg-[url('/images/skils/skilbg.jpg')] bg-cover bg-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">

            {/* item 1 */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
              <Image src="/images/skils/reactJS.png" height={400} width={400} alt="react" className="shadow-2xl rounded-3xl mb-2"/>
              <p className="font-bold text-dark-grey">ReactJS <span className="font-normal text-gray-500">Frontend Library</span></p>
            </div>

            {/* item 2 */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
              <Image src="/images/skils/expressJS.png" height={400} width={400} alt="express" className="shadow-2xl rounded-3xl mb-2"/>
              <p className="font-bold text-dark-grey">ExpressJS <span className="font-normal text-gray-500">Backend Framework</span></p>
            </div>

            {/* item 3 */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
              <Image src="/images/skils/mongoDB.png" height={400} width={400} alt="mongodb" className="shadow-2xl rounded-3xl mb-2"/>
              <p className="font-bold text-dark-grey">MongoDB <span className="font-normal text-gray-500">No SQL Database</span></p>
            </div>

           {/* item 4 */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
              <Image src="/images/skils/nodeJS.png" height={400} width={400} alt="node" className="shadow-2xl rounded-3xl mb-2"/>
              <p className="font-bold text-dark-grey">NodeJS <span className="font-normal text-gray-500">Runtime Environment</span></p>
            </div>

           {/* item 5 */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
              <Image src="/images/skils/reduxJS.png" height={400} width={400} alt="redux" className="shadow-2xl rounded-3xl mb-2"/>
              <p className="font-bold text-dark-grey">ReduxJS <span className="font-normal text-gray-500">State Management</span></p>
            </div>

            {/* item 6 */}
            <div className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
              <Image src="/images/skils/nextJS.png" height={400} width={400} alt="next" className="shadow-2xl rounded-3xl mb-2"/>
              <p className="font-bold text-dark-grey">NextJS <span className="font-normal text-gray-500">Fullstack Framework</span></p>
            </div>


            </div>
          </div>
        </div>

        {/* Responsiveness */}
        <div className="px-8 py-10 ">
          <h1 className="text-4xl text-center font-extrabold text-light-orange">Responsive design <span className="font-medium text-dark-grey">that fits all the devices</span></h1>
          <p className="text-center py-5 max-w-[900px] mx-auto"> The layout automatically detects screen size and adjusts the content, ensuring a fully responsive experience on any device.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {/* Card 1: Full Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2 transition hover:shadow-md">
              {/* Icon placeholder (Replace with your icon) */}
              <div className="text-light-orange mb-2 text-6xl"><CiDesktop /></div>
              <h3 className="font-bold text-gray-800">1920 x 1080px</h3>
              <p className="text-sm text-gray-500">Full Screen Layout</p>
            </div>

            {/* Card 2: Laptop Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2 transition hover:shadow-md">
              <div className="text-light-orange mb-2 text-6xl"><CiLaptop /></div>
              <h3 className="font-bold text-gray-800">1364 x 768px</h3>
              <p className="text-sm text-gray-500">Laptop Screen Layout</p>
            </div>

            {/* Card 3: Tablet Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2 transition hover:shadow-md">
              <div className="text-light-orange mb-2 text-6xl"><IoIosTabletLandscape /></div>
              <h3 className="font-bold text-gray-800">1024 x 768px</h3>
              <p className="text-sm text-gray-500">Tablet Screen Layout</p>
            </div>

            {/* Card 4: Mobile Screen */}
            <div className="flex flex-col items-center justify-center p-6 border border-light-orange rounded-sm shadow-sm bg-white text-center gap-2 transition hover:shadow-md">
              <div className="text-light-orange mb-2 text-6xl"><IoPhonePortraitOutline /></div>
              <h3 className="font-bold text-gray-800">767 x 365px</h3>
              <p className="text-sm text-gray-500">Mobile Screen Layout</p>
            </div>
          </div>

        </div>

        {/* Shape your dream */}
        <ShapeYourDream />

      <GitHub/>

      </div>
    </>
  );
};

export default page;