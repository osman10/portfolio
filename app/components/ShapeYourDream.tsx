import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import SocialLink from "./SocialLink";


const ShapeYourDream = () => {
    return (
        <div className="relative container mx-auto  bg-[url('/images/dream/shade.png')] bg-cover bg-center bg-no-repeat my-10">
            <div className="flex flex-col md:flex-row items-center justify-betwen gap-0 bg-[url('/images/dream/linebg.png')] bg-cover bg-left bg-no-repeat ">



                {/* Left side */}
                <div className="flex-1 md:flex-2">
                    <div className="p-4 md:p-10">
                        <div className="flex items-center mb-10 md:mb-20 gap-4 text-4xl text-dark-grey font-bold">
                            <AiOutlineHome />
                            <h1 className="">Osman.</h1>
                        </div>

                        <div className="flex items-end w-full h-full bg-none md:bg-[url('/images/dream/greybg.png')] bg-no-repeat bg-[left_60px]">
                            <div className="mb-10 ml-0 md:ml-10">
                                <Image src="/images/dream/workplace.jpg" height={300} width={400} alt="dream" />

                                <div className="flex justify-start md:justify-end mt-3 uppercase">
                                    <div className="w-full md:w-auto flex flex-col md:flex-row  border-2 border-dark-grey justify-center items-center md:justify-end ">
                                        <div className="p-1 bg-dark-grey text-white w-full md:w-auto text-center md:text-left">Free consulting : </div>
                                        <div className="p-1">(+88) 01737290987</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right side */}
                <div className="flex-1 bg-[url('/images/dream/textbg.png')] bg-no-repeat">
                    <div className="flex flex-col">
                        <h1>SHAPING YOUR DREAM</h1>
                        <p>Turning ambitious ideas into high-performing digital reality. Using the power of the MERN stack, I craft seamless user experiences, scalable backend systems, and web applications designed to bring your vision to life.</p>
                        <p>I transform complex ideas into intuitive, scalable web applications using React, Node.js, Express, and MongoDB.</p>
                        <SocialLink/>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default ShapeYourDream;