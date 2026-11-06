import Link from "next/link";
import { FaGithub } from "react-icons/fa";


const GitHub = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto my-4 py-4 text-dark-grey bg-[url('/images/bg3.png')] bg-cover bg-center border-1 border-light-grey ">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl font-jost">More Updated Resource!</h1>
                    <div className="border-l-3 border-dark-grey px-3">
                        <p className=""> Check out my GitHub profile for a complete collection of open-source projects, contributions, and active code repositories. Dive into the source code to explore my latest commits, architectural approaches, and development practices.
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <Link href="https://github.com/osman10" className="flex flex-row gap-2 items-center bg-light-orange hover:bg-dark-orange text-white px-5 py-3 transition"><FaGithub />GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHub;