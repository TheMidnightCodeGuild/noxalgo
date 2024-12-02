import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const positions = [
    {
      title: "Business Development Executive",
      description:
        "We are seeking a dynamic Business Development Executive to drive growth and expand our market presence. The ideal candidate will identify new business opportunities, develop relationships with potential clients, and contribute to our overall business strategy.",
      requirements: [
        "3+ years of B2B sales or business development experience",
        "Strong networking and relationship building skills", 
        "Excellent communication and presentation abilities",
        "Experience in the technology/software industry preferred",
      ],
    },
    {
      title: "Next.js Developer",
      description:
        "Looking for an experienced Next.js Developer to join our frontend team. The role involves building scalable web applications, optimizing performance, and implementing modern web technologies.",
      requirements: [
        "Strong experience with Next.js and React",
        "Proficiency in TypeScript and modern JavaScript",
        "Understanding of SEO and web performance optimization",
        "Experience with state management and API integration",
      ],
    },
    {
      title: "SEO Executive & Content Creator", 
      description:
        "Seeking a creative SEO Executive & Content Creator to enhance our digital presence. Will be responsible for developing SEO strategies, creating engaging content, and improving our search rankings.",
      requirements: [
        "Proven experience in SEO and content creation",
        "Strong understanding of SEO best practices and tools",
        "Excellent writing and editing skills",
        "Experience with content management systems and analytics tools",
      ],
    },
    {
      title: "Sales Executive",
      description:
        "We're looking for an energetic Sales Executive to join our growing team. The role involves generating leads, closing deals, and maintaining strong client relationships.",
      requirements: [
        "2+ years of sales experience",
        "Strong negotiation and closing skills",
        "Experience with CRM systems", 
        "Target-driven mindset with proven track record",
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit application");
      }

      setMessage({
        type: "success",
        text: "Application submitted successfully!",
      });
      e.target.reset();

    } catch (error) {
      console.error("Error:", error);
      setMessage({
        type: "error",
        text: error.message || "Server timeout or connection error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
        {showMessage && (
          <div
            className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg ${
              message.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white transition-opacity duration-500 z-50`}>
            {message.text}
          </div>
        )}
        <div className="mb-12">
          <div className="w-[100px] sm:w-[150px] h-[3px] bg-[#fffff0] mb-3 sm:mb-5"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Careers at Noxalgo
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - Positions */}
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                <button
                  className={`w-full text-left px-6 py-4 font-semibold text-[#fffff0] flex justify-between items-center ${
                    selectedPosition === index
                      ? "text-red-200"
                      : "hover:text-red-200"
                  }`}
                  onClick={() =>
                    setSelectedPosition(
                      selectedPosition === index ? null : index
                    )
                  }>
                  <span>{position.title}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      selectedPosition === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {selectedPosition === index && (
                  <div className="px-6 py-4 border-t border-neutral-800 animate-fadeIn">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    <h3 className="text-[#fffff0] font-semibold mb-3">
                      Requirements:
                    </h3>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-300">
                          <span className="mr-2 mt-1.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Application Form */}
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <h2 className="text-2xl font-bold mb-6 text-[#fffff0]">
              Apply Now
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fffff0]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fffff0]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Position
                </label>
                <select
                  name="position"
                  required
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fffff0]">
                  <option value="">Select a position</option>
                  {positions.map((position, index) => (
                    <option key={index} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  required
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white h-32 focus:outline-none focus:ring-2 focus:ring-[#fffff0]"
                  placeholder="Tell us why you'd be a great fit..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Resume/CV
                </label>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#fffff0]"
                />
                <p className="text-xs text-gray-400 mt-1">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#fffff0] text-black font-semibold py-2 rounded-lg transition duration-200 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}>
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
