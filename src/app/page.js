import Hero from "@/components/home/Hero";
import StatsCards from "@/components/home/StatsCards";
import FriendsList from "@/components/home/FriendsList";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Hero />
      <StatsCards />
      <FriendsList />
    </div>
  );
}
