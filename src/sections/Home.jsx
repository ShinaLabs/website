import { file02, heroBackground, homeSmile, loading, plusSquare, searchMd, yourlogo } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";
import PlusSvg from "../assets/svg/PlusSvg";



const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className={`absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]`}>
            {[65.875, 51.375, 36.125, 23.125].map((size, i) => (
                <div
                    key={i}
                    className={`absolute top-1/2 left-1/2 w-[${size}rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2`}
                />
            ))}
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

const FormalHeader = () => {
    return (
        <div className="relative w-full h-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop&crop=center"
                    className="w-full h-full object-cover opacity-40"
                    
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-indigo-900/80"></div>
            </div>
            
            <div className="relative z-10 flex items-center justify-between h-full px-16">
                
                <div className="flex-1 max-w-2xl">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-white/90 text-sm font-medium">Next Generation Technology</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Transforming
                            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Digital Innovation
                            </span>
                        </h1>
                        
                        <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                            Innovating Today, Transforming Tomorrow – Your Partner in Digital Excellence.
                        </p>
                        
                        <div className="flex gap-4 pt-4">
                            <a href="#hiring">
                                <Button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Get Started
                                </Button>
                            </a>

                              <a href="#about">
                                <Button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300">
                                    Learn More
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 flex justify-end items-center">
                    <div className="relative">
                        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        
                        <div className="relative z-10 transform perspective-1000 rotate-y-12 hover:rotate-y-6 transition-transform duration-500">
                            <div className="w-96 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl rounded-b-md shadow-2xl">
                                <div className="w-full h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 rounded-t-lg p-6 relative overflow-hidden">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="h-2 bg-white/30 rounded-full w-3/4"></div>
                                            <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                                            <div className="h-16 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm animate-pulse"></div>
                                    <div className="absolute bottom-4 right-8 w-6 h-6 bg-cyan-300/30 rounded-full animate-ping"></div>
                                </div>
                                
                                <div className="h-16 bg-gray-800 rounded-b-md flex items-center justify-center">
                                    <div className="w-32 h-8 bg-gray-700 rounded border border-gray-600"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl opacity-70 animate-float"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-60 animate-float-delayed"></div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    );
};

const Home = () => {
    const parallaxRef = useRef(null);

    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="home">
            <div className="container relative" ref={parallaxRef}>
                {/* Enhanced Header Display */}
                <div className="relative max-w-[75rem] mx-auto md:max-w-6xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500">
                        <div className="relative bg-gray-900 rounded-[1.25rem] overflow-hidden">
                            {/* Browser-like Header */}
                            <div className="h-[3rem] bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-[1.25rem] flex items-center px-6 border-b border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-gray-700 rounded-full px-4 py-1 text-white/70 text-sm">
                                        Your Digital Platform
                                    </div>
                                </div>
                            </div>
                            
                            {/* Header Container - No Slider */}
                            <div className="aspect-[16/9] overflow-hidden">
                                <FormalHeader />
                            </div>
                        </div>
                        
                        {/* Enhanced Shadow Effects */}
                        <div className="relative z-1 h-8 mx-3 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl rounded-b-[1.5rem] lg:mx-10 opacity-80" />
                        <div className="relative z-1 h-6 mx-6 bg-gradient-to-b from-gray-900 to-black shadow-2xl rounded-b-[1.25rem] lg:mx-24 opacity-60" />
                    </div>
                </div>

                {/* Background Elements */}
                <BackgroundCircles parallaxRef={parallaxRef} />
            </div>

            {/* Bottom Decorative Elements */}
            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-gradient-to-r from-transparent via-cyan-500 to-transparent pointer-events-none xl:block opacity-30" />
            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block text-cyan-400" />
            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block text-cyan-400" />
            
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-3deg); }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite 2s;
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .rotate-y-12 {
                    transform: rotateY(-12deg) rotateX(5deg);
                }
                
                .rotate-y-6:hover {
                    transform: rotateY(-6deg) rotateX(2deg);
                }
            `}</style>
        </Section>
    );
};

export default Home;