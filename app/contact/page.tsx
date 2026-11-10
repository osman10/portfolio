"use client";
import Image from "next/image";
import ScrollIndicator from "../components/ScrollIndicator";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import GoogleMapEmbed from "../components/GoogleMapEmbed";



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
            Contact Me
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
            Feel free to reach out if you have any questions or would like to collaborate!
          </motion.h2>
        </div>
        {/* Placed at the bottom of the hero section */}
        <ScrollIndicator />
      </div>


      {/* below full screen content */}
      <div className="container mx-auto px-8 py-10">



        <p className="text-center text-light-orange px-4">Have A Question?</p>
        <h1 className="relative pb-2 mb-5 mt-2 text-gray-500 text-xl font-semibold uppercase tracking-wider text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-light-orange after:rounded-full">
          Get in Touch
        </h1>
        <div className="flex flex-col md:flex-row justify-bewtween items-center gap-5 mt-10">
          <div className="flex flex-row items-center gap-4 w-full">
            <Image src="/images/icons/phone.svg" height={50} width={50} alt="Phone" />
            <div className="flex flex-col ">
              <h2 className="text-xl text-dark-grey">Phone/WhatsApp</h2>
              <p>(+88) 01737 290987</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 w-full">
            <Image src="/images/icons/mail.svg" height={50} width={50} alt="Phone" />
            <div className="flex flex-col ">
              <h2 className="text-xl text-dark-grey">Email</h2>
              <p>osman.mirpur55@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 w-full">
            <Image src="/images/icons/location.svg" height={50} width={50} alt="Phone" />
            <div className="flex flex-col ">
              <h2 className="text-xl text-dark-grey">Location</h2>
              <p>Sultanpur, Mirpur, Kushtia, Bangladesh</p>
            </div>
          </div>
        </div>




        {/* form */}
        <ContactForm />

        {/* Google map for my location*/}
        <div className="mt-10">
          <h1 className="relative pb-2 mb-5 text-gray-500 text-xl font-semibold uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-light-orange after:rounded-full">
            Location
          </h1>
          {/* <GoogleMapEmbed /> */}
        </div>
      </div>


    </>
  );
};

export default page;