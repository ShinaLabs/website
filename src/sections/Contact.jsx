import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Contact = () => {
    return (
        <Section id="contact-us">
            <div className="container py-16 text-center">
                <Heading title="Contact Us" text="We'd love to hear from you!" />
                <p className="mb-8 text-white/70 max-w-xl mx-auto">
                    Have a question, project, or just want to say hello? Fill out the form below or reach us directly at <a href="mailto:contact@shinalabs.com" className="underline text-color-1">contact@shinalabs.com</a>.
                </p>
                <form className="max-w-xl mx-auto grid gap-6">
                    <input className="p-3 rounded bg-n-7 text-white" type="text" placeholder="Your Name" required />
                    <input className="p-3 rounded bg-n-7 text-white" type="email" placeholder="Your Email" required />
                    <textarea className="p-3 rounded bg-n-7 text-white" rows={5} placeholder="Your Message" required />
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
