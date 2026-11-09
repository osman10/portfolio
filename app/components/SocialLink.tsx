import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine, RiFacebookFill } from "react-icons/ri";
import Link from "next/link";
const SocialLink = () => {
    return (
        <div>
            {/* social links */}
            <div className="flex flex-row items-center  gap-1 pt-4">
                <Link href="https://www.linkedin.com/in/osmanmirpur/" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                    <FaLinkedinIn />
                </Link>
                <Link href="https://discord.com/users/1493113939628658769" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                    <RiDiscordLine />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100003858831991" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                    <RiFacebookFill />
                </Link>
                <Link href="https://wa.me/8801737290987" className="p-2 text-gray-500 bg-white hover:bg-dark-orange hover:text-white transition-colors">
                    <FaWhatsapp />
                </Link>
            </div>
        </div>
    );
};

export default SocialLink;