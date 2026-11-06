import Image from "next/image";


const page = () => {
    return (
        <div className="container mx-auto bg-white h-screen flex items-center justify-center">
            <Image src={"/images/404.jpg"} width={400} height={200} alt="Not Found"/>
            <p className="text-center text-2xl text-dark-grey">Oops! Looks like you're lost.</p>
            <p className="text-center text-light-grey">We can't seem to find the page you're looking for. It might have been renamed, removed, or never existed in the first place.</p>
            <link href="/" className="text-center px-5 py-4 text-white bg-dark-grey hover:bg-light-grey">Back to home</link>
        </div>
    );
};

export default page;