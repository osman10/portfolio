"use client";
import { AiOutlineHome } from "react-icons/ai";
import ScrollIndicator from "./components/ScrollIndicator";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine, RiFacebookFill } from "react-icons/ri";
import CarouselSlider from "./components/CarouselSlider";
import GitHub from "./components/GitHub";
import Parallax from "./components/Parallax";






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
            Hi, I'm Osman Goni
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
            className="font-bold tracking-[1.6px] py-4"
          >
            MERN Stack Developer
          </motion.h2>
        </div>
        {/* Placed at the bottom of the hero section */}
        <ScrollIndicator />
      </div>




      {/* below full screen content */}
        <div className="container mx-auto px-4 py-8">

          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* left side-- where meet skills */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:flex-1 min-h-[30svh] sm:min-h-125 lg:min-h-150 bg-[url('/images/bg2.jpg')] bg-cover bg-center flex flex-col justify-between p-6 sm:p-10 text-white"
            >
              <h1 className="font-bold text-2xl flex items-center gap-2"><span><AiOutlineHome /></span>Osman.</h1>
              <h1 className="text-3xl sm:text-5xl uppercase font-light">Where ideas meet skills</h1>
              <p className="text-justify font-extralight text-sm sm:text-base">As a MERN stack developer, I build dynamic, scalable, and responsive web applications from the database up to the user interface.</p>
              <p className="text-justify font-extralight text-sm sm:text-base">My core expertise lies in designing robust RESTful APIs with Node.js and Express, managing flexible data models in MongoDB, and crafting intuitive, high-performance front-end experiences using React.</p>

              {/* social links */}
              <div className="flex flex-row items-center justify-center gap-4 pt-4">
                <Link href="#" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                  <FaLinkedinIn />
                </Link>
                <Link href="#" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                  <RiDiscordLine />
                </Link>
                <Link href="#" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                  <RiFacebookFill />
                </Link>
                <Link href="#" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                  <FaWhatsapp />
                </Link>
              </div>
            </motion.div>

            {/* right side slider */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:flex-2 min-h-[50svh] sm:min-h-125 lg:min-h-150 flex justify-center items-center bg-[url('/images/bg3.png')] bg-cover bg-center p-4 sm:p-6"
            >
              <CarouselSlider />
            </motion.div>
          </div>
          <GitHub />
        </div>
       <Parallax />

    </>
  );
};

export default page;