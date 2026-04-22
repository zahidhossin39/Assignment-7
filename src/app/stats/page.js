"use client";

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = {
  Text: '#8B5CF6',
  Call: '#16423C',
  Video: '#22C55E'
};

export default function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.resolve().then(() => {
      const stored = JSON.parse(localStorage.getItem("timelineLogs") || "[]");
      
      const counts = stored.reduce((acc, entry) => {
        const type = entry.type?.toLowerCase();
        if (['text', 'call', 'video'].includes(type)) {
          acc[type] = (acc[type] || 0) + 1;
        }
        return acc;
      }, { text: 0, call: 0, video: 0 });

      const chartData = [
        { name: 'Text', value: counts.text },
        { name: 'Call', value: counts.call },
        { name: 'Video', value: counts.video }
      ].filter(i => i.value > 0);

      setData(chartData);
    });
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12">
      <h1 className="text-[32px] font-bold text-[#111827] mb-8">Friendship Analytics</h1>
      
      <div className="bg-white rounded-xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col h-[500px]">
        <h2 className="text-[#16423C] text-[15px] font-semibold mb-4">By Interaction Type</h2>
        
        {data.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            No interaction data available
          </div>
        ) : (
          <>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={90}
                    outerRadius={125}
                    paddingAngle={6}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[entry.name]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: COLORS[entry.name] }}
                  />
                  <span className="text-[13px] font-medium text-[#64748B]">{entry.name}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
