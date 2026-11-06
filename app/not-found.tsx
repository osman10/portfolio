import Image from "next/image";


const page = () => {
    return (
        <div className="bg-[#F1F1F1]">
            <div className="bg-dark-grey py-10"></div>
            <div className="container mx-auto  h-screen flex flex-col items-center justify-center gap-2">
                <Image src={"/images/404.jpg"} width={400} height={200} alt="Not Found" />
                <p className="text-center text-2xl text-dark-grey">Oops! Looks like you're lost.</p>
                <p className="text-center text-dark-grey max-w-[400px]">We can't seem to find the page you're looking for. It might have been renamed, removed, or never existed in the first place.</p>            </div>
        </div>
    );
};

export default page;