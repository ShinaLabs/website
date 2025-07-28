import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";

const pricing = [
    {
        title: "🌐 Explore Our Full Stack Expertise",
        description: "Get a firsthand experience of how we build scalable, end-to-end digital solutions.Gain access to a fully functional, no-cost demo of our full stack capabilities. From dynamic front-end interfaces to robust back-end systems, we’ll show you how we transform ideas into responsive, high-performance web applications.",
        features: ["🔹 Experience intuitive UI/UX design in action", "🔹 Understand how our APIs and databases work behind the scenes" , "🔹 Explore core app features and flows" , "🔹Perfect for MVP trials, startup demos, or tech evaluation"],
    },
    {
        title: "📊 Discover the Power of Data",
        description: "Unlock smarter decisions with our Data Science & Analytics capabilities.Dive into a hands-on experience where we show how raw data transforms into meaningful insights and intelligent actions. From predictive modeling to dashboard visualizations, explore how we blend data science with analytics to drive business value.",
        features: ["🔹 Visualize trends through interactive dashboards and reports", "🔹 Understand how machine learning models can forecast outcomes" ,"🔹 Explore real-world data pipelines, preprocessing, and pattern detection" ,"🔹 Ideal for businesses seeking insight-driven growth and automation"],
    },
    {
        title: "📢 Experience Digital Marketing That Delivers",
        description: "Reach the right audience, with the right message, at the right time.Explore how our digital marketing strategies drive real engagement and measurable results. From SEO to social campaigns and performance analytics, we create tailored solutions that grow your brand and boost visibility across platforms.",
        features: ["🔹 Learn how SEO and content strategies improve search rankings ", "🔹 See how targeted ads convert clicks into customers ", "🔹 Explore campaign analytics, audience insights, and ROI reporting", "🔹 Ideal for brands ready to scale their online presence and engagement"],
    },
];

const Hiring = () => {
    return (
        <Section className="overflow-hidden" id="hiring">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading tag="Custom Solutions. Trusted Team." title="Hire a Developer" />

                <div className="relative">
                    <div className="flex gap-[1rem] max-lg:flex-wrap">
                        {pricing.map((item, i) => (
                            <div key={i} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-white/50">{item.description}</p>

                                <div className="flex items-center h-[5.5rem] mb-6">
                                    {item.price && (
                                        <>
                                            <div className="h3">$</div>
                                            <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                                        </>
                                    )}
                                </div>

                                <Button className="w-full mb-6" href={item.price ? "/pricing" : "mailto:your-email@domain.com"} white={item.price}>
                                    {item.price ? "Get started" : "Contact us"}
                                </Button>

                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                                            <img src={check} width={24} height={24} alt="" />
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="#hiring">
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Hiring;
