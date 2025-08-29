import React, { useRef, useState, useEffect } from "react";
import {
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Section from "../components/Section";
import PlusSvg from "../assets/svg/PlusSvg";
import story from "../assets/story.jpg";
import { MouseParallax } from "react-just-parallax";

const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="absolute -top-[42rem] left-1/2 w-[78rem] aspect-square border border-purple-500/20 rounded-full -translate-x-1/2">
      {[65, 45, 30, 18].map((size, i) => (
        <div
          key={i}
          style={{ width: `${size}rem`, height: `${size}rem` }}
          className="absolute top-1/2 left-1/2 border border-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      ))}
      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        {[45, -60, 70, -85].map((angle, i) => (
          <div
            key={i}
            style={{ transform: `rotate(${angle}deg)` }}
            className="absolute bottom-1/2 left-1/2 origin-bottom"
          >
            <div
              className={`w-4 h-4 bg-gradient-to-b from-purple-400 to-blue-500 rounded-full shadow-lg transition-all ${
                mounted ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};

const AboutPage = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="relative py-32 text-white"
      crosses
      customPaddings
      id="about"
    >
      <div className="container relative z-10" ref={parallaxRef}>
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
         
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <h3 className="text-2xl text-purple-400 mb-4">
              From Vision to Digital Reality
            </h3>
            <p className="text-gray-300 leading-relaxed">
              ShinaLabs began with a question: Why should powerful digital
              solutions be available only to companies with massive budgets? We
              set out to bridge this gap, combining enterprise-level expertise
              with the agility and cost-effectiveness growing businesses need.
            </p>
          </div>

         
          <div className="flex justify-center">
            <img
              src={story}
              alt="Our Story"
              className="rounded-2xl shadow-lg max-w-full h-96"
            />
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          To democratize digital transformation by providing smart, scalable,
          and creative solutions for businesses of all sizes.
        </p>
        <div className="grid md:grid-cols-5 gap-6 ml-10 mr-10">
          {["Accessibility", "Partnership", "Creativity", "Excellence", "Growth"].map(
            (value) => (
              <div
                key={value}
                className="p-6 rounded-xl bg-black/40 border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition"
              >
                <h4 className="text-lg font-semibold">{value}</h4>
              </div>
            )
          )}
        </div>
      </div>

      {/* Our Team */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6">Our Team</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          The minds behind ShinaLabs—developers, designers, and strategists
          driven by passion and excellence.
        </p>
        <div className="grid md:grid-cols-3 gap-6 ml-10 mr-10">
          {[
            { icon: Users, title: "Developers" },
            { icon: Lightbulb, title: "Designers" },
            { icon: Target, title: "Strategists" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400 hover:scale-105 transition"
            >
              <item.icon className="mx-auto mb-4 text-purple-400" size={40} />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-12">Why Choose ShinaLabs</h2>
        <div className="grid md:grid-cols-5 gap-6 ml-10 mr-10">
          {[
            { title: "Balanced Expertise", icon: Users },
            { title: "Right-Sized Solutions", icon: Target },
            { title: "Transparent Communication", icon: Lightbulb },
            { title: "Results Focus", icon: CheckCircle },
            { title: "Long-Term Thinking", icon: TrendingUp },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-black/40 border border-blue-500/20 hover:border-blue-400 hover:scale-105 transition"
            >
              <item.icon className="mx-auto mb-4 text-blue-400" size={40} />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center py-20 rounded-2xl bg-gradient-to-b from-purple-600 to-blue-600 shadow-lg ml-10 mr-10">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Amazing Together
        </h2>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:scale-105 transition">
            Start Your Digital Journey
          </button>
          <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Schedule a Free Consultation
          </button>
        </div>
      </div>

      {/* Side Borders + Circles */}
      <BackgroundCircles parallaxRef={parallaxRef} />
      <div className="hidden absolute top-[10rem] left-10 right-10 h-0.5 bg-purple-500/10 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[9.5rem] left-[2rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[9.5rem] right-[2rem] z-2 pointer-events-none xl:block" />
    </Section>
  );
};

export default AboutPage;