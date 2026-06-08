import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now: simple alert (you can later connect email/API)
    alert("Message sent successfully!");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-28 md:pt-32 px-6 bg-white min-h-screen">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Contact Us
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          Get in touch for legal consultation. We respond as soon as possible.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 p-8 rounded-2xl border shadow-sm"
        >
          <div className="mb-5">
            <label className="text-sm text-slate-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="mb-5">
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="mb-5">
            <label className="text-sm text-slate-600">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your legal issue..."
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>

        {/* INFO SIDE */}
        <div className="space-y-6">

          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <Phone className="text-yellow-500 mb-3" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-slate-600 mt-1">+91 XXXXX XXXXX</p>
          </div>

          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <Mail className="text-yellow-500 mb-3" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-slate-600 mt-1">contact@lawfirm.com</p>
          </div>

          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <MapPin className="text-yellow-500 mb-3" />
            <h3 className="font-semibold text-lg">Office</h3>
            <p className="text-slate-600 mt-1">
              Ghaziabad, Uttar Pradesh, India
            </p>
          </div>

          {/* CTA BOX */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl">
            <h3 className="text-xl font-semibold">
              Need urgent legal help?
            </h3>
            <p className="text-slate-300 mt-2">
              Call us directly for faster response.
            </p>

            <button className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Call Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}