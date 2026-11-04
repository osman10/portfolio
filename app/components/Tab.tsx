'use client';

import { useState } from 'react';

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Experience',
      content: 'Here is an overview of my professional experience as a full-stack developer, specializing in building scalable web applications, optimizing performance, and working with modern JavaScript frameworks.',
    },
    {
      title: 'Education',
      content: 'My academic background and specialized certifications in software engineering, computer science, and modern web development technologies.',
    },
    {
      title: 'Skills',
      content: 'Deep expertise in modern web technologies including JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Git version control.',
    },
  ];

  return (
    <div className="container mx-auto my-8">
      {/* Tab Navigation Buttons */}
      <div className="flex flex-col sm:flex-row border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-6 text-sm font-bold transition-all duration-200 border-b-2 text-center sm:text-left ${
              activeTab === index
                ? 'border-orange-500 text-orange-500 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content Display Area (Full Width, No Radius) */}
      <div className="p-6 bg-white border border-t-0 border-gray-200 min-h-[140px]">
        <p className="text-gray-600 leading-relaxed">
          {tabs[activeTab].content}
        </p>
      </div>
    </div>
  );
}