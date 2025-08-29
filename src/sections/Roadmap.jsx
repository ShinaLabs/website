import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import { check2, grid, loading1, gradient, roadmap3, roadmap4 } from "../assets";
import restaurant from "../assets/restaurant.jpg";
import Travel from "../assets/Travel.jpg";

const roadmap = [
  {
    id: "0",
    title: "Restaurant website",
    text: "Experience farm-to-table freshness with locally sourced ingredients in every dish.",
    date: "May 2025",
    status: "done",
    imageUrl: restaurant,
    colorful: true,
    cursor: "pointer",
  },
  {
    id: "1",
    title: "Travel website",
    text: "Explore the world with our curated travel experiences, designed to inspire and delight.",
    date: "August 2025",
    status: "progress",
    imageUrl: Travel,
    cursor: "pointer",
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    cursor: "pointer",
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
    cursor: "pointer",
  },
];

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-10 md:grid-cols-2 md:gap-8 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              key={item.id}
              className={`group md:flex even:md:translate-y-[7rem] p-1 rounded-[2.5rem] transition-all duration-300 ${
                item.status === "progress"
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-gradient-x"
                  : "bg-n-6"
              }`}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-12 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                {/* Background grid */}
                <div className="absolute top-0 left-0 max-w-full opacity-10">
                  <img className="w-full" src={grid} width={500} height={550} alt="" />
                </div>

                <div className="relative z-10">
                  {/* Date + Status */}
                  <div className="flex items-center justify-between max-w-[27rem] mb-6 md:mb-12">
                    <Tagline>{item.date}</Tagline>

                    <div
                      className={`flex items-center px-4 py-1 rounded-full text-xs font-semibold ${
                        item.status === "done"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      {status}
                    </div>
                  </div>

                  {/* Image */}
<div className="mb-8 rounded-xl overflow-hidden flex justify-center">
  <img
    className="w-full max-h-[300px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
    src={item.imageUrl}
    alt={item.title}
  />
</div>
                  {/* Content */}
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-n-4 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Decorative Gradient */}
        <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
            <img className="w-full" src={gradient} width={942} height={942} alt="" />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12 md:mt-16 xl:mt-20">
        <Button href="#roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;