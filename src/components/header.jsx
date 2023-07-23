import { useState } from "react";
import Logo from "../assets/mist.png";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";
import { PiBagSimpleBold } from "react-icons/pi";
import Wrapper from "./wrapper";
import { cn } from "../utils";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <Wrapper customStyling="flex justify-between items-center py-4">
        <h1 className="lg:basis-[15%]">
          <a title="Mixt" href="#FIXME" target="_self">
            <img src={Logo} alt="Mist" />
          </a>
        </h1>
        <div
          className="lg:hidden child:absolute child:h-[3px] child:w-full child:bg-black child:transition-all child:duration-300 child:ease-in tablet:hidden relative flex h-6 w-6 cursor-pointer items-center justify-center"
          onClick={handleHamburger}
        >
          <span
            className={`top-1 ${
              hamburger ? cn("top-3 -translate-y-1/2 rotate-[45deg]") : cn("")
            }`}
          />
          <span
            className={`${
              hamburger ? cn("-translate-x-1/2 opacity-0") : cn("")
            }`}
          />
          <span
            className={`bottom-1 ${
              hamburger
                ? cn("bottom-3 translate-y-1/2 rotate-[-45deg]")
                : cn("")
            }`}
          />
        </div>
        <nav
          className={`top-0 absolute bg-white w-full text-center lg:basis-1/2 ${
            hamburger ? "translate-y-[88px]" : "translate-y-[-200%]"
          } lg:translate-y-0 lg:static transition-transform duration-300 ease-in-out`}
        >
          <ul className="space-y-5 lg:space-y-0 w-full h-[calc(100vh_-_88px)] lg:h-auto lg:flex items-center justify-between uppercase">
            <li>
              <a
                className="hover:underline"
                href="#FIXME"
                title="Women"
                target="_self"
              >
                Women
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="#FIXME"
                title="Men"
                target="_self"
              >
                Men
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="#FIXME"
                title="Collections"
                target="_self"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="#FIXME"
                title="About"
                target="_self"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="#FIXME"
                title="Contact"
                target="_self"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="#FIXME"
                title="Blog"
                target="_self"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <ul className="hidden basis-1/5 items-center justify-center space-x-3 lg:flex">
          <li>
            <FiSearch className="text-2xl" />
          </li>
          <li>
            <FiUser className="text-2xl" />
          </li>
          <li className="relative">
            <FiHeart className="text-2xl" />
            <span className="absolute top-2 right-0 bg-[#60b846] rounded-full text-[8px] text-center text-white my-auto w-3 h-3">
              1
            </span>
          </li>
          <li className="relative">
            <PiBagSimpleBold className="text-2xl" />
            <span className="absolute top-2 right-0 bg-[#7c3e94] rounded-full text-[8px] text-center text-white my-auto w-3 h-3">
              2
            </span>
          </li>
        </ul>
      </Wrapper>
    </header>
  );
};

export default Header;
