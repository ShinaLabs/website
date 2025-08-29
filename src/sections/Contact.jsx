import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
const HOSTING_URL = import.meta.env.VITE_HOSTING_URL;

import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        // Phone validation: must be 10 digits
        const phoneRegex = /^\d{10}$/;
        

        if (!phoneRegex.test(form.phone)) {
            setError("Phone number must be exactly 10 digits.");
            setLoading(false);
            return;
        }
        try {
            const res = await fetch(`${HOSTING_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess(data.message || "Message sent successfully!");
                setForm({ name: "", phone: "", email: "", message: "" });
                setShowModal(true);
            } else {
                setError(data.message || "Something went wrong.");
            }
        } catch (err) {
            setError("Network error. Please try again later.");
        }
        setLoading(false);
    };

    return (
        <Section id="contact-us">
            <div className="container py-16 text-center">
                <Heading title="Contact Us" text="We'd love to hear from you!" />
                <p className="mb-8 text-white/70 max-w-xl mx-auto">
                    Have a question, project, or just want to say hello? Fill out the form below or reach us directly at <a href="mailto:contact@shinalabs.com" className="underline text-color-1">contact@shinalabs.com</a>.
                </p>
                <form className="max-w-xl mx-auto grid gap-6" onSubmit={handleSubmit}>
                    <input
                        className="p-3 rounded bg-n-7 text-white"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-3 rounded bg-n-7 text-white"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (10 digits)"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        maxLength={10}
                    />
                    <input
                        className="p-3 rounded bg-n-7 text-white"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="p-3 rounded bg-n-7 text-white"
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </Button>
                    {error && <div className="text-red-400">{error === 'Phone number must be exactly 10 digits.' ? 'Please enter a valid 10-digit phone number.' : error}</div>}
                </form>
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                        <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-black">Thanks for contacting us!</h2>
                            <p className="mb-6 text-black">We will get in touch soon with you.</p>
                            <Button onClick={() => setShowModal(false)} className="w-full">Close</Button>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Contact;
