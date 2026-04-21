const StatsCards = () => {
  const cards = [
    { value: "10", label: "Total Friends" },
    { value: "3", label: "On Track" },
    { value: "6", label: "Need Attention" },
    { value: "12", label: "Interactions This Month" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl py-10 px-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col justify-center items-center"
          >
            <span className="text-[32px] font-bold text-[#16423C] mb-2">{card.value}</span>
            <span className="text-[15px] font-medium text-[#64748B]">{card.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
