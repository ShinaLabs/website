import Services from "./sections/Services";
import Industries from "./sections/Industries";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Roadmap from "./sections/Roadmap";
import Milestones from "./sections/Milestones";
import Hiring from "./sections/Hiring";
import Contact from "./sections/Contact";

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Navbar />
                <Home />
                <Services />
                <Industries />
                <Milestones />
                <Hiring />
                <Roadmap />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
