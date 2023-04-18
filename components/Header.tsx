import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo-img.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center space-x-2 font-bold px-10 py-5">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative w-12 h-12 rounded-full">
          <Image src={logo} alt="" fill className="rounded-full" />
        </div>
        <p>Jeff Oliver</p>
      </Link>

      <Link
        href="https://www.papareact.com/universityofcode"
        className="flex items-center px-5 py-3 text-center text-sm md:text-base bg-gray-900 text-custom-brand rounded-full"
        target="_blank">
        Sign up to the University of Code
      </Link>
    </header>
  );
};

export default Header;
