import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, service3, check, openaiWhiteSymbol, gradient, play, loading, recording03, recording01, disc02, chromecast, sliders04 } from "../assets";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing"

const openaiServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

const Milestones = () => {
    return (
        <Section id="milestones">
            <div className="container">
                <Heading title="MILESTONES" text="EVERY STEP FORWARD, A STORY OF PROGRESS" />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img className="w-full h-full object-cover md:object-right" width={800} alt="" height={730} src={service1} />
                        </div>

                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <ul className="body-2">
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">5+ Years Of Experince</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">10+ Projects Delivered</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">25+ HAPPY CUSTOMERS</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Industries Covered: EdTech, HealthTech, Retail, etc.</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Registered as a Private Limited Company</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] absolute left-4 right-4 bottom-4 border-white/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-base">
                            <img className="w-5 h-5 mr-4" src={loading} alt="" />
                            Defining Moments That Shaped Our Journey...
                        </div>
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-white/10 rounded-3xl overflow-hidden">

                            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90">
                                <h4 className="h4 mb-4 text-lg md:text-xl lg:text-2xl">What is Digital Transformation</h4>
                                <ul className="body-2 text-sm md:text-base lg:text-lg">
                                    <li className="flex items-start py-2 border-t border-n-6">
                                        <img width={24} height={24} src={check} alt="check" />
                                        <p className="ml-2 md:ml-4">Technology and customer demands are driving agile, innovative change.</p>
                                    </li>
                                    <li className="flex items-start py-2 border-t border-n-6">
                                        <img width={24} height={24} src={check} alt="check" />
                                        <p className="ml-2 md:ml-4">Digital transformation reshapes how businesses operate and deliver value through automation, data, and innovation.</p>
                                    </li>
                                    <li className="flex items-start py-2 border-t border-n-6">
                                        <img width={24} height={24} src={check} alt="check" />
                                        <p className="ml-2 md:ml-4">With years of experience and wide-ranging expertise in technologies like AI, IoT, and Data Analytics, we help you transform into a true Digital Enterprise. Our smart digital transformation solutions enable you to harness the unlimited power of data by obtaining valuable insights to meet the ever-evolving customer needs and facilitate strategic decision-making.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Why Your Business Needs Digital Transformation</h4>
                                <p className="body-2 mb-[2rem] text-n-3">Our digital transformation service consultants help you unlock the prominent benefits of digitalization.</p>

                                <ul className="body-2">
                                    <li className="flex items-start py-4 border-t border-n-6">
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">Create new revenue streams for your business</p>
                                    </li>
                                    <li className="flex items-start py-4 border-t border-n-6">
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">Increase efficiency and optimize business processes to drive innovation</p>
                                    </li>
                                    <li className="flex items-start py-4 border-t border-n-6">
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">Empower business employees and boost workforce productivity</p>
                                    </li>
                                    <li className="flex items-start py-4 border-t border-n-6">
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">Reduce operational costs and mitigate risks with strategic decision-making</p>
                                    </li>
                                    <li className="flex items-start py-4 border-t border-n-6">
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">Redefine how you engage with your clientele</p>
                                    </li>
                                    <li className="flex items-start py-4 border-t border-n-6">
                                        <img width={24} height={24} src={check} />
                                        <p className="ml-4">Become more receptive and responsive to evolving market trends</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                        <img className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2" src={gradient} width={1417} height={1417} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Milestones;
