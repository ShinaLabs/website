import { file02, heroBackground, homeSmile, loading, plusSquare, searchMd, yourlogo } from "../assets";
import Button from "../components/Button";
import robot1 from "../assets/hero/robot1.png";
import robot2 from "../assets/hero/robot2.png";
import robot from "../assets/hero/robot.jpg";
import Section from "../components/Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";
import PlusSvg from "../assets/svg/PlusSvg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            {[65.875, 51.375, 36.125, 23.125].map((size, i) => (
                <div
                    key={i}
                    className={`absolute top-1/2 left-1/2 w-[${size}rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2`}
                />
            ))}
            {/* Animated Dots */}
            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                {[46, -56, 54, -65, -85, 70].map((angle, i) => (
                    <div key={i} className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[${angle}deg]`}>
                        <div className={`w-${i + 2} h-${i + 2} bg-gradient-to-b from-[#${i % 2 ? "DD734F" : "88E5BE"}] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                    </div>
                ))}
            </MouseParallax>
        </div>
    );
};

const Hero = () => {
    const parallaxRef = useRef(null);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 10,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="container relative" ref={parallaxRef}>
                {/* Slideshow */}
                <div className="relative max-w-[55rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-[#43435C] rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <Slider {...sliderSettings}>
                                    {[robot, robot1, robot2].map((src, i) => (
                                        <div key={i} className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={src}
                                                className="w-full h-full object-cover" // Ensure the image covers the container
                                                alt={`Slide ${i + 1}`}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="relative z-1 h-6 mx-2.5 bg-[#1B1B2E] shadow-xl rounded-b-[1.25rem] lg:mx-8" />
                        <div className="relative z-1 h-6 mx-6 bg-[#1B1B2E]/70 shadow-xl rounded-b-[1.25rem] lg:mx-20" />
                    </div>
                </div>

                {/* Full-Screen Background Image */}
                <div className="absolute top-0 left-0 w-full h-screen"> {/* Full-screen container */}
                    <img 
                        src={heroBackground} 
                        className="w-full h-full object-cover" // Stretch image to fill the container
                        alt="hero" 
                    />
                </div>

                <BackgroundCircles parallaxRef={parallaxRef} />
            </div>

            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
        </Section>
    );
};

export default Hero;
