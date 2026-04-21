"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, []);

  const statusStyles = {
    "on-track": "bg-[#16423C] text-white",
    "overdue": "bg-[#EF4444] text-white",
    "almost due": "bg-[#F59E0B] text-white",
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 pb-20">
      <h2 className="text-[20px] font-bold text-[#111827] mb-6">Your Friends</h2>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-ring loading-xl text-[#16423C]"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link href={`/friends/${friend.id}`} key={friend.id}>
              <div
                className="bg-white rounded-xl pt-8 pb-6 px-4 flex flex-col items-center justify-between text-center h-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
              >
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-4 relative">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-[#111827] text-[16px] mb-0.5">
                {friend.name}
              </h3>
              <p className="text-[13px] text-[#64748B] mb-4">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#D1F0E5] text-[#16423C] text-[11px] font-bold uppercase py-1 px-3 rounded-full tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className={`text-[12px] font-medium px-4 py-1.5 rounded-full capitalize mt-auto ${
                  statusStyles[friend.status.toLowerCase()] || "bg-gray-500 text-white"
                }`}
              >
                {friend.status.replace("-", " ")}
              </div>
            </div>
          </Link>
        ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
