import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";

const GitHub = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 1.2
            }}
            className="bg-white">
            <div className="container mx-auto my-4 py-4 text-dark-grey bg-[url('/images/bg3.png')] bg-cover bg-center border-1 border-light-grey ">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl font-jost">More Updated Resource!</h1>
                    <div className="border-l-3 border-dark-grey px-3">
                        <p className=""> Check out my GitHub profile for a complete collection of open-source projects, contributions, and active code repositories. Dive into the source code to explore my latest commits, architectural approaches, and development practices.
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <CustomLink
                            text="Github"
                            href="https://github.com/osman10"
                            icon={FaGithub}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default GitHub;