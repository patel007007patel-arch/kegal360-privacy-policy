"use client";

import { useState } from "react";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000/api';
      const response = await fetch(`${API_URL}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccessMsg(false), 5000);
      } else {
        console.error("Failed to submit inquiry");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Error submitting message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-[#fffcfd] text-[#333333] flex flex-col ${lora.className}`}>
      <main className="flex-grow flex flex-col items-center pt-24 pb-16 px-4">
        {/* Header Section */}
        <div className="text-center mb-[40px] md:mb-[80px] max-w-2xl px-4">
          <h2 className="text-[30px] leading-[35px] md:text-[44px] md:leading-[55px] font-bold text-[#111827] mb-[24px]">
            <a href="/" className="hover:text-[#8c4a6b] transition-colors tracking-[0.2em] md:tracking-[0.3em]">
              K E G E L 3 6 0
            </a>
          </h2>
          <p className="text-[#555555] text-[16px] md:text-[18px] leading-[28px] max-w-[800px] mx-auto italic">
            Need help with your period tracker or cycle yoga? Reach out to the Kegel 360 support team for quick assistance. Satisfaction guaranteed!
          </p>
          <div className="mt-[30px] w-full max-w-[300px] mx-auto border-b border-[#fad1df]"></div>
        </div>

        {/* Contact & Support Wrapper */}
        <div className="w-full max-w-[1140px] pt-[20px] md:pt-[40px] px-[15px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] lg:gap-[60px]">

            {/* Left: Contact Form */}
            <div className="lg:col-span-2">
              <h3 className="text-[22px] md:text-[28px] font-bold mb-[30px] md:mb-[40px] flex items-center text-[#111827]">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#b4285b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Leave <span className="font-bold ml-2 text-[#b4285b]">A Message.</span>
              </h3>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[14px] text-[#555555] mb-[8px] font-medium">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] border border-[#d1d5db] rounded-[4px] py-[15px] px-[20px] text-[16px] text-[#333333] focus:outline-none focus:border-[#b4285b] focus:ring-1 focus:ring-[#b4285b] transition-colors shadow-sm"
                        placeholder="Your Name"
                        required
                      />
                      <div className="absolute top-[50%] right-[20px] -translate-y-1/2 pointer-events-none text-[#9ca3af]">
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[14px] text-[#555555] mb-[8px] font-medium">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] border border-[#d1d5db] rounded-[4px] py-[15px] px-[20px] text-[16px] text-[#333333] focus:outline-none focus:border-[#b4285b] focus:ring-1 focus:ring-[#b4285b] transition-colors shadow-sm"
                        placeholder="Your Email"
                        required
                      />
                      <div className="absolute top-[50%] right-[20px] -translate-y-1/2 pointer-events-none text-[#9ca3af]">
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col mt-[30px]">
                  <label htmlFor="message" className="text-[14px] text-[#555555] mb-[8px] font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#ffffff] border border-[#d1d5db] rounded-[4px] py-[15px] px-[20px] text-[16px] text-[#333333] focus:outline-none focus:border-[#b4285b] focus:ring-1 focus:ring-[#b4285b] transition-colors resize-none shadow-sm"
                      placeholder="How can we help you?"
                      required
                    />
                    <div className="absolute top-[20px] right-[20px] pointer-events-none text-[#9ca3af]">
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-[30px] md:mt-[40px] text-center md:text-left flex flex-col md:flex-row items-center gap-[20px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-[20px] py-[12px] md:px-[35px] md:py-[14px] bg-[#b4285b] border border-[#b4285b] rounded-[4px] text-[14px] font-bold text-white hover:bg-[#8c4a6b] hover:border-[#8c4a6b] transition-all duration-300 uppercase tracking-wide inline-block shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {successMsg && (
                    <span className="text-[#b4285b] font-semibold text-[15px]">
                      Your message has been sent successfully!
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Right: Support Info Card */}
            <div className="lg:col-span-1 self-start">
              <h3 className="text-[22px] md:text-[28px] font-bold mb-[30px] md:mb-[40px] flex items-center text-[#111827]">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 mr-3 text-[#b4285b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Support <span className="font-bold ml-2 text-[#b4285b]">Info.</span>
              </h3>
              <div className="flex flex-col">
                <label className="text-[14px] text-[#555555] mb-[8px] font-medium block">
                  Company Details
                </label>
                <div className="text-left text-[#333333] rounded-r-[6px] bg-[#fdf2f6] border-l-[4px] border-l-[#b4285b] p-[30px] w-full shadow-sm">
                  <p className="font-bold text-[#111827] mb-[24px] text-[16px] uppercase tracking-wide">
                    Kegel 360, LLC
                  </p>
                  <div className="space-y-6 text-[15px]">
                    <p className="flex items-start group">
                      <svg className="w-5 h-5 mr-4 mt-0.5 text-[#8c4a6b] group-hover:text-[#b4285b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <a href="mailto:support@kegel360.com" className="hover:text-[#b4285b] transition-colors break-all">
                        support@kegel360.com
                      </a>
                    </p>
                    <p className="flex items-start group">
                      <svg className="w-5 h-5 mr-4 mt-0.5 text-[#8c4a6b] group-hover:text-[#b4285b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span>502 W 7th St STE 100,<br />Erie, PA 16502</span>
                    </p>
                    <p className="flex items-start group">
                      <svg className="w-5 h-5 mr-4 mt-0.5 text-[#8c4a6b] group-hover:text-[#b4285b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <a href="tel:+14158155024" className="hover:text-[#b4285b] transition-colors">
                        +1 415-815-5024
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#fdf2f6] border-t border-[#fad1df] pt-[20px] md:pt-[30px] pb-[40px] md:pb-[50px] mt-[40px]">
        <div className="container mx-auto px-4 text-center">

          <div className="flex flex-col md:flex-row items-center justify-center text-[16px] md:text-[18px] text-[#555555] mb-[24px] md:mb-[32px] gap-2 md:gap-0 font-medium">
            <a href="/privacy-policy" className="hover:text-[#b4285b] transition-colors p-[10px]">
              Privacy Policy
            </a>

            <span className="text-[#fad1df] hidden md:inline px-2">|</span>
            <a href="mailto:support@kegel360.com" className="hover:text-[#b4285b] transition-colors p-[10px]">
              support@kegel360.com
            </a>
          </div>

          <h3 className="mt-[20px] md:mt-[30px]">
            <a href="/" className="text-[20px] md:text-[28px] font-bold text-[#111827] hover:text-[#b4285b] transition-colors tracking-[0.2em] md:tracking-[0.3em]">
              K E G E L 3 6 0
            </a>
          </h3>
        </div>
      </footer>
    </div>
  );
}
