import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";



const page = () => {
  return (
    <>
      {/* full screen content */}
      <div className="relative bg-image h-screen flex flex-col justify-center">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* text content */}
        <div className="container mx-auto text-center md:text-left text-white relative z-10">
          <h1 className="h1 text-center md:text-left">Hi, I'm Osman Goni</h1>
          <h2 className="font-bold tracking-[1.6px] py-4">MERN Stack Developer</h2>
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