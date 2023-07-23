import Wrapper from "./wrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

import img2 from '../assets/images/footerlogo.png'

const Footer = () => {
  return (
    <footer className="my-10">
      <Wrapper customStyling="lg:flex justify-between items-start flex-wrap">
        <figure className="md:basis-1/2 xl:basis-[calc(25%_-_20px)] overflow-hidden">
          <img src={img2} alt="footerlogo" />
        </figure>
        <ul className="md:basis-1/2 xl:basis-[calc(25%_-_20px)] mt-10 lg:mt-0">
          <li className="text-lg font-semibold uppercase mb-10">
            Useful Links
          </li>
          <li className="mb-4 text-lg text-gray-500 hover:underline ">
            <a href="#FIXME" title="Returns" target="_self">
              Returns
            </a>
          </li>
          <li className="mb-4 text-lg text-gray-500 hover:underline ">
            <a href="#FIXME" title="Support Policy" target="_self">
              Support Policy
            </a>
          </li>
          <li className="mb-4 text-lg text-gray-500 hover:underline ">
            <a href="#FIXME" title="Size Guide" target="_self">
              Size Guide
            </a>
          </li>
          <li className="text-gray-500 hover:underline ">FAQs</li>
        </ul>
        <div className="md:basis-1/2 xl:basis-[calc(25%_-_20px)] mt-10 xl:mt-0">
          <ul>
            <li className="text-lg font-semibold uppercase mb-10">help</li>
            <li className=" hover:underline mb-4 text-lg text-gray-500">
              <a href="#FIXME" title="Contact Us" target="_self">
                Contact Us
              </a>
            </li>
            <li className=" hover:underline mb-4 text-lg text-gray-500">
              <a href="#FIXME" title="Orders Tracking" target="_self">
                Orders Tracking
              </a>
            </li>
            <li className=" hover:underline mb-4 text-lg text-gray-500">
              <a href="#FIXME" title="Work With Us" target="_self">
                Work With Us
              </a>
            </li>
          </ul>
          <span className="block text-lg font-semibold uppercase mt-11">
            Follow Us
          </span>
          <ul className="flex justify-start items-center mt-6 space-x-4">
            <li>
              <a
                className="hover:opacity-60 w-6 h-6 rounded-full bg-[#dce1e4] flex justify-center items-center"
                href="#FIXME"
                title="Facebook"
                target="_self"
              >
                <FaFacebookF className="text-[#606060]" />
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-60 w-6 h-6 rounded-full bg-[#dce1e4] flex justify-center items-center"
                href="#FIXME"
                title="Instagram"
                target="_self"
              >
                <FaInstagram className="text-[#606060]" />
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-60 w-6 h-6 rounded-full bg-[#dce1e4] flex justify-center items-center"
                href="#FIXME"
                title="Twitter"
                target="_self"
              >
                <FaTwitter className="text-[#606060]" />
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-60 w-6 h-6 rounded-full bg-[#dce1e4] flex justify-center items-center"
                href="#FIXME"
                title="Youtube"
                target="_self"
              >
                <FaYoutube className="text-[#606060]" />
              </a>
            </li>
            <li>
              <a
                className="hover:opacity-60 w-6 h-6 rounded-full bg-[#dce1e4] flex justify-center items-center"
                href="#FIXME"
                title="Whatsapp"
                target="_self"
              >
                <FaWhatsapp className="text-[#606060]" />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2 xl:basis-[calc(25%_-_20px)] mt-10 xl:mt-0">
          <span className="block text-lg font-semibold uppercase mb-10">
            Let's make it official
          </span>
          <p className="text-lg text-gray-500">
            Get e-mail updates about our latest shop and special offers.
          </p>
          <form className="mt-5 md:mt-28 xl:mt-24">
            <input
              className="block w-full py-2 focus-visible:outline-none placeholder:font-semibold placeholder:text-black placeholder:text-lg border-b border-black"
              type="email"
              placeholder="Enter your email address"
            />
            <button
              className="bg-black text-white px-4 py-0.5 mt-5"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
