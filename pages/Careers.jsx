import React, { useState } from "react";
import Navbar from "./components/Navbar";

const Career = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

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
    const formData = new FormData(e.target);

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        e.target.reset(); // Reset form after successful submission
      } else {
        const error = await response.json();
        alert(`Failed to submit application: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the application');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-32 px-4 sm:px-8 md:px-16 lg:px-32">
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
                className="bg-neutral-900 rounded-xl border border-neutral-800">
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-[#fffff0]"
                  onClick={() =>
                    setSelectedPosition(
                      selectedPosition === index ? null : index
                    )
                  }>
                  {position.title}
                </button>
                {selectedPosition === index && (
                  <div className="px-6 py-4 border-t border-neutral-800">
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <h3 className="text-[#fffff0] font-semibold mb-2">
                      Requirements:
                    </h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
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
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white"
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
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Position
                </label>
                <select 
                  name="position"
                  required
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white">
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
                  className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white h-32"></textarea>
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
     className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-white"
   />
              </div>
              <button
                type="submit"
                className="w-full bg-[#fffff0] text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition duration-200">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
