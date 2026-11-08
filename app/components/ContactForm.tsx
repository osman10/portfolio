import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (

    <div className="mt-20">
      <h1 className="relative pb-2 mb-5 text-gray-500 text-xl font-semibold uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-light-orange after:rounded-full">
        DROP ME A LINE
      </h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Grid container: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Column: Input Fields */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 transition"
            />
          </div>

          {/* Right Column: Message Area */}
          <div className="flex flex-col">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              required
              rows={5}
              className="w-full h-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 resize-none transition"
            />
          </div>
        </div>

        {/* Bottom Row: Notice text & Submit Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <p className="text-gray-500 text-sm">
            I will contact you within one business day.
          </p>
          <button
            type="submit"
            className="relative inline-block px-4 py-3 font-semibold text-white bg-light-orange overflow-hidden z-10 transition-colors duration-300 hover:text-white group cursor-pointer"
          >
            {/* Sliding background layer */}
            <span className="absolute inset-0 bg-dark-orange -translate-x-full origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 -z-10" />
            {/* Link Content (Text + Icon) */}
            <span className="relative z-10 flex items-center gap-2">
              SEND MESSAGE
            </span>
          </button>
        </div>
      </form>
      <div>
      </div>
    </div>





  );
}