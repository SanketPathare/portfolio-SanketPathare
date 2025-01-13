import React from "react";
import { Twitter, Dribbble } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-4 mx-4 sm:mx-17 rounded-lg mb-4 border border-black ring-2 ring-neutral-700 bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-neutral-300 transition-colors"
            >
              SP
            </Link>
          </div>
          <div className="text-center text-neutral-400 text-base">
            {new Date().getFullYear()} © All rights reserved.
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:scale-105 transition-all"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:scale-105 transition-all"
            >
              <Dribbble className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-500 transition">About</Link>
            <Link href="/works" className="hover:text-blue-500 transition">Works</Link>
            <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </div>  */
}
