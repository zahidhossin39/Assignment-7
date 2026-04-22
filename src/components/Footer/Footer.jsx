import Link from "next/link";
import Image from "next/image";
import instagramIcon from "@/assets/img/instagram.png";
import facebookIcon from "@/assets/img/facebook.png";
import twitterIcon from "@/assets/img/twitter.png";
import logoXl from "@/assets/img/logo-xl.png";

const Footer = () => {
  return (
    <footer className="bg-[#16423C] text-white pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6">
          <Image src={logoXl} alt="KeenKeeper" width={260} height={60} className="w-[200px] sm:w-[260px] h-auto object-contain" />
        </div>
        
        <p className="text-[#a5b4b1] text-[15px] font-medium max-w-[600px] mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h3 className="text-white text-[15px] font-semibold mb-4">
            Social Links
          </h3>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src={instagramIcon} alt="Instagram" width={40} height={40} className="object-contain" />
            </Link>
            <Link href="#" className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src={facebookIcon} alt="Facebook" width={40} height={40} className="object-contain" />
            </Link>
            <Link href="#" className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src={twitterIcon} alt="Twitter" width={40} height={40} className="object-contain" />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-end pt-8 border-t border-[#2a554f]">
          <p className="text-[#a5b4b1] text-xs mb-4 sm:mb-0">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[#a5b4b1] text-xs">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
