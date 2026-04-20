const Hero = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-[54px] md:text-[68px] font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
          Friends to keep close in your life
        </h1>
        
        <p className="text-lg md:text-xl text-[#64748B] max-w-2xl font-normal leading-relaxed mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="bg-[#16423C] text-white px-7 py-4 rounded-lg font-bold text-[17px] flex items-center justify-center gap-2 hover:bg-[#123531] transition-all shadow-sm active:scale-95 group">
          <span className="text-xl inline-block transition-transform duration-300 group-hover:rotate-90">+</span>
          <span>Add a Friend</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
