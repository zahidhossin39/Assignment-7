"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlineClock, HiOutlineChartBar } from "react-icons/hi2";
import logo from "@/assets/img/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: HiOutlineHome },
    { name: "Timeline", href: "/timeline", icon: HiOutlineClock },
    { name: "Stats", href: "/stats", icon: HiOutlineChartBar },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-4 md:px-10 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 gap-4 md:gap-0">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="KeenKeeper Logo" width={160} height={32} className="h-8 w-auto" priority />
      </Link>

      <div className="flex items-center space-x-2 sm:space-x-6 w-full md:w-auto justify-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#16423C] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#16423C] hover:bg-gray-50"
              }`}
            >
              <Icon className={`text-xl ${isActive ? "stroke-[2.5]" : "stroke-[2]"}`} />
              <span className={isActive ? "" : "text-sm uppercase tracking-wider"}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
