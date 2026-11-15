'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
  }>({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error: any) {
      setStatus({ loading: false, success: false, error: error.message || 'Failed to send message' });
    }
  };

  return (
    <div className="mt-20">
      <h1 className="relative pb-2 mb-5 text-gray-500 text-xl font-semibold uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[3px] after:bg-light-orange after:rounded-full">
        DROP ME A LINE
      </h1>

      {/* Status Messages */}
      {status.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
          Your message has been sent successfully! I will get back to you soon.
        </div>
      )}
      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
          {status.error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
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
            disabled={status.loading}
            className="relative inline-block px-6 py-3 font-semibold text-white bg-light-orange overflow-hidden z-10 transition-colors duration-300 hover:text-white group cursor-pointer disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-dark-orange -translate-x-full origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 -z-10" />
            <span className="relative z-10 flex items-center gap-2">
              {status.loading ? 'SENDING...' : 'SEND MESSAGE'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}