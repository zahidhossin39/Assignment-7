"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import callIcon from '@/assets/img/call.png';
import textIcon from '@/assets/img/text.png';
import videoIcon from '@/assets/img/video.png';

export default function TimelinePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timelineLogs") || "[]");
    const icons = { call: callIcon, text: textIcon, video: videoIcon };
    
    setEvents(data.map(item => ({
      ...item,
      icon: icons[item.iconType] || "🤝"
    })));
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-bold text-[#111827] mb-6">Timeline</h1>
      
      <div className="mb-8">
        <select className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-[#475569] outline-none shadow-sm min-w-[200px] cursor-pointer">
          <option>Filter timeline</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 pb-20">
        {events.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-5 flex items-center gap-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
            <div className="flex items-center justify-center w-12 h-12 shrink-0">
              {typeof item.icon === 'string' ? (
                <span className="text-[30px] leading-none">{item.icon}</span>
              ) : (
                <Image src={item.icon} alt={item.type} width={38} height={38} className="object-contain" />
              )}
            </div>
            <div>
              <div className="text-[15px] text-[#475569]">
                <span className="font-bold text-[#111827]">{item.type}</span> with {item.person}
              </div>
              <div className="text-sm text-[#94A3B8] mt-0.5">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
