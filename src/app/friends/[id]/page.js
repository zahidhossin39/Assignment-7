"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  HiOutlineClock,
  HiOutlineArchiveBox,
  HiOutlineTrash,
  HiOutlinePhone,
  HiOutlineChatBubbleLeft,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

export default function FriendDetailsPage() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const friendId = id || "2"; 
        const found = data.find((f) => f.id.toString() === friendId);
        setFriend(found || data[1]); 
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-ring loading-xl text-[#16423C]"></span>
      </div>
    );
  }

  if (!friend) {
    return <div className="text-center py-20">Friend not found.</div>;
  }

  const statusStyles = {
    "on-track": "bg-[#16423C] text-white",
    overdue: "bg-[#EF4444] text-white",
    "almost due": "bg-[#F59E0B] text-white",
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-50/50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
            <div className="w-24 h-24 rounded-full overflow-hidden relative mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                fill
                priority
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-[#111827] mb-2">
              {friend.name}
            </h2>

            <div
              className={`text-[12px] font-medium px-4 py-1 rounded-full capitalize mb-3 ${
                statusStyles[friend.status.toLowerCase()] ||
                "bg-gray-500 text-white"
              }`}
            >
              {friend.status.replace("-", " ")}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#D1F0E5] text-[#16423C] text-[10px] font-bold uppercase py-1 px-3 rounded-full tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[#64748B] italic text-sm mb-3">
              &quot;{friend.bio}&quot;
            </p>
            <p className="text-[#94A3B8] text-xs">
              Preferred:{" "}
              <span className="font-medium text-[#64748B]">
                {friend.email}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <button className="w-full bg-white border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 text-[#475569] font-semibold text-sm hover:bg-gray-50 transition-colors">
              <HiOutlineClock className="text-[18px]" />
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 text-[#475569] font-semibold text-sm hover:bg-gray-50 transition-colors">
              <HiOutlineArchiveBox className="text-[18px]" />
              Archive
            </button>
            <button className="w-full bg-white border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors">
              <HiOutlineTrash className="text-[18px]" />
              Delete
            </button>
          </div>
        </div>

        <div className="w-full flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl py-8 px-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="text-[32px] font-bold text-[#16423C] mb-1">
                {friend.days_since_contact}
              </div>
              <div className="text-[13px] font-medium text-[#94A3B8]">
                Days Since Contact
              </div>
            </div>
            <div className="bg-white rounded-xl py-8 px-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="text-[32px] font-bold text-[#16423C] mb-1">
                {friend.goal}
              </div>
              <div className="text-[13px] font-medium text-[#94A3B8]">
                Goal (Days)
              </div>
            </div>
            <div className="bg-white rounded-xl py-8 px-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="text-[28px] font-bold text-[#16423C] mb-2 leading-none mt-1">
                {formatDate(friend.next_due_date)}
              </div>
              <div className="text-[13px] font-medium text-[#94A3B8]">
                Next Due
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#16423C] mb-1.5">
                Relationship Goal
              </h3>
              <p className="text-[#64748B] text-[15px]">
                Connect every{" "}
                <span className="font-bold text-[#111827]">
                  {friend.goal} days
                </span>
              </p>
            </div>
            <button className="bg-gray-50 text-[#475569] text-sm font-semibold px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50">
            <h3 className="text-lg font-bold text-[#16423C] mb-6">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] border border-gray-100 py-8 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                <HiOutlinePhone className="text-3xl text-[#475569]" />
                <span className="font-semibold text-[#475569] text-[15px]">
                  Call
                </span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] border border-gray-100 py-8 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                <HiOutlineChatBubbleLeft className="text-3xl text-[#475569]" />
                <span className="font-semibold text-[#475569] text-[15px]">
                  Text
                </span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 bg-[#F8FAFC] border border-gray-100 py-8 rounded-xl hover:bg-gray-100 transition-colors shadow-sm">
                <HiOutlineVideoCamera className="text-3xl text-[#475569]" />
                <span className="font-semibold text-[#475569] text-[15px]">
                  Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
