import { Routes, Route } from "react-router-dom";
import Services from "./sections/Services";
import Industries from "./sections/Industries";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Roadmap from "./sections/Roadmap";
import Milestones from "./sections/Milestones";
import Hiring from "./sections/Hiring";
import Contact from "./sections/Contact";
import AboutPage from "./sections/Aboutus";
import Blog from "./sections/Blog";
import FullBlog from "./sections/FullBlog";
import Pricing from "./sections/pricing";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Industries />
              <Milestones />
              <Hiring />
              <Roadmap />
              <AboutPage />
              <Contact />
              
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<FullBlog />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;