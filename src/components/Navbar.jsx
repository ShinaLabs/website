import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { background, openai } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Importing icons

const navigation = [
    
    {                   // ADD AN ANCHOR TAG TO THE NAVIGATION
        id: "0",
        title: "HOME",
        url: "#home",
        
    },
    {
        id: "1",
        title: "SERVICES",
        url: "#services",
    },
    {
        id: "2",
        title: "INDUSTRIES",
        url: "#industries",
    },
    {
        id: "3",
        title: "WHAT WE DO",
        url: "#milestones",
    },
    {
        id: "4",
        title: "HIRE A DEVELOPER",
        url: "#hiring",
    },
    {
        id: "5",
        title: "TECHNOLOGY",
        url: "#technology",
    },
    {
        id: "6",
        title: "ABOUT US",
        url: "#Footer",
        
    },
    {
        id: "7",
        title: "CONTACT US",
        url: "#contact-us",
    },


];

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#home">
                    <img src={openai} width={250} height={40} alt="OpenAI" />
                </a>

                {/* Contact Numbers and Social Media Links */}
                <div className="flex items-center justify-between w-full lg:w-auto space-x-4 py-2 bg-n-8">
                    <div className="text-white text-xs">
                        <span>+919682302290</span>
                        <span> | </span>
                        <span>contact@shinalabs.com</span>
                    </div>
                    <div className="flex space-x-2">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-xs">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <button onClick={toggleDropdown} className="text-white text-lg lg:hidden">
                        <MenuSvg openNavigation={openNavigation} />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-n-8 rounded-md shadow-lg z-10">
                            {navigation.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    onClick={handleClick}
                                    className={`block px-4 py-2 text-white hover:bg-n-7`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-lg uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-4 md:py-6 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname.hash ? "z-2 lg:text-white" : "lg:text-white/50"
                                } lg:leading-5 lg:hover:text-white xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                            <img className="w-full h-full object-cover" src={background} width={688} height={953} alt="" />
                        </div>

                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>

                        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
