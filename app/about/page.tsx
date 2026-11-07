"use client";
import ScrollIndicator from "../components/ScrollIndicator";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaMapMarkerAlt, FaBriefcase, FaClock, FaArrowRight } from "react-icons/fa";
import TabsSection from "../components/Tab";
import CustomLink from "../components/CustomLink";
import { GoDownload } from "react-icons/go";


const page = () => {

  const infoCards = [
    {
      icon: FaCode,
      title: "Core Expertise",
      value: "MongoDB, Express, React, Node.js",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kushtia, Bangladesh",
    },
    {
      icon: FaBriefcase,
      title: "Work Focus",
      value: "Full-Stack Web Development",
    },
    {
      icon: FaClock,
      title: "Availability",
      value: "Open for Remote & On-site Roles",
    },
  ];
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
            About Me
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
            I am a passionate Full-Stack Web Developer with a strong foundation in building scalable web applications.
          </motion.h2>
        </div>
        {/* Placed at the bottom of the hero section */}
        <ScrollIndicator />
      </div>



      {/* Tab section */}
      <TabsSection />



      {/* About me section */}
      <div className="container mx-auto bg-[#FDFDFD] ">
        <div className="flex flex-col lg:flex-row justify-between items-center py-10">
          {/* image */}
          <div className="bg-white flex-1 w-full py-4 min-h-[350px]">
            <div className="bg-light-grey p-4 flex items-center justify-center ">
              <Image src='/images/Osman.jpg' height={500} width={300} alt="Osman Goni" className="w-full rounded-xl" />
            </div>
          </div>
          {/* text info */}
          <div className=" px-4 flex-1 md:flex-2 w-full p-4 flex flex-col justify-start ">
            <div className="min-h-[350px]">
              <h1 className="relative pb-2 mb-5 text-gray-500 text-xl font-semibold uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-light-orange after:rounded-full">
                ABOUT ME
              </h1>
              <h1 className="text-3xl">Hi there I'm <span className="text-light-orange">Md. Osman Goni</span></h1>
              <h1 className="">I am a MERN stack web developer.</h1>

              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-dark-grey min-h-[160px]">
                <div>
                  <dt className="font-semibold">Education</dt>
                  <dd>Your degree or field of study</dd>
                </div>
                <div>
                  <dt className="font-semibold">University</dt>
                  <dd>Your university name</dd>
                </div>
                <div>
                  <dt className="font-semibold">Address</dt>
                  <dd>Kushtia, Bangladesh</dd>
                </div>
                <div>
                  <dt className="font-semibold">Phone No.</dt>
                  <dd>Add your phone number</dd>
                </div>
              </dl>

              <div className=" mt-5 ">
                <CustomLink
                  text="Download Resume"
                  href="/resume.pdf"
                  icon={GoDownload}
                />

              </div>

            </div>
          </div>
        </div>
      </div>


      {/* below full screen content */}
      <section className="bg-light-grey py-4">
        <div className="container mx-auto">



          <div className="flex bg-white flex-col md:flex-row md:justify-between overflow-hidden shadow-sm">
            {/* Left Section: Responsive Image Container */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <Image
                src="/images/about.jpg"
                alt="About Image"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <div className="p-6 md:p-8">
                <h1 className="text-dark-grey text-5xl font-bold font-jost mb-4">
                  My Jobs
                </h1>

                <p className="text-gray-500 mb-8 leading-relaxed text-justify">
                  Hello! I am Osman, a dedicated and passionate MERN Stack Developer based in Kushtia, Bangladesh. I specialize in building responsive, high-performance web applications using modern JavaScript, React.js, Express.js, Node.js, and MongoDB.
                </p>

                {/* 4 Separate Boxes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

                  {/* Box 1 */}
                  <div className="p-4 bg-white border border-gray-200 shadow-sm">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                      Core Expertise
                    </h3>
                    <p className="text-dark-grey font-medium">
                      MongoDB, Express, React, Node.js
                    </p>
                  </div>

                  {/* Box 2 */}
                  <div className="p-4 bg-white border border-gray-200 shadow-sm">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                      Location
                    </h3>
                    <p className="text-dark-grey font-medium">
                      Kushtia, Bangladesh
                    </p>
                  </div>

                  {/* Box 3 */}
                  <div className="p-4 bg-white border border-gray-200 shadow-sm">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                      Work Focus
                    </h3>
                    <p className="text-dark-grey font-medium">
                      Full-Stack Web Development
                    </p>
                  </div>

                  {/* Box 4 */}
                  <div className="p-4 bg-white border border-gray-200 shadow-sm">
                    <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-1">
                      Availability
                    </h3>
                    <p className="text-dark-grey font-medium">
                      Open for Remote &amp; On-site Roles
                    </p>
                  </div>

                </div>

                <CustomLink
                  text="Explore My Project"
                  href="/projects"
                  icon={FaArrowRight}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default page;