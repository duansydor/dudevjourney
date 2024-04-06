import Logo from "./Logo";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
function Header() {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between z-50">
      <Logo />
      <nav
        className="
        fixed top-6 right-1/2 translate-x-1/2 w-max 
        py-3 px-8 border border-solid 
        border-dark rounded-full 
        font-medium capitalize flex items-center
        bg-light/80 backdrop-blur-sm z-50
        "
      >
        <Link className="mr-2" href="/">
          Home
        </Link>
        <Link className="mr-2" href="/about">
          About
        </Link>
        <Link className="mr-2" href="/contact">
          Contact
        </Link>
        <button><IoMdSunny fontSize={25} className="animate-spin-slow"/></button>
      </nav>
      <div className="flex gap-3">
        <a href="http://ex.com" className="text-lg">
          <FaGithub  fontSize={30}/>
        </a>
        <a href="http://ex.com">
          <FaInstagram fontSize={30}/>
        </a>
        <a href="http://ex.com">
          <FaLinkedin fontSize={30}/>
        </a>
      </div>
    </header>
  );
}

export default Header;
