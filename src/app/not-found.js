import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
      <h1 className="text-[54px] md:text-[68px] font-extrabold text-[#111827] tracking-tight mb-6">
        404
      </h1>
      <h2 className="text-[24px] font-bold text-[#111827] mb-4">
        Page Not Found
      </h2>
      
      <p className="text-lg text-[#64748B] max-w-md font-medium mb-10">
        It looks like we can't find the page you're searching for. The path might be broken or the connection was lost.
      </p>

      <Link 
        href="/"
        className="bg-[#16423C] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#123531] transition-all shadow-sm active:scale-95 mb-10"
      >
        Return Home
      </Link>
    </div>
  );
}
