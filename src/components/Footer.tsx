import React from "react";
import { Twitter, Dribbble } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 py-4 mx-auto mb-4 border border-black rounded-lg bg-neutral-900 sm:mx-17 ring-2 ring-neutral-700">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white transition-colors hover:text-neutral-300"
            >
              SP
            </Link>
          </div>
          <div className="text-base text-center text-neutral-400">
            {new Date().getFullYear()} © All rights reserved.
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-neutral-800 hover:bg-neutral-700 hover:scale-105"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-neutral-800 hover:bg-neutral-700 hover:scale-105"
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
  /* <div className="flex mb-6 space-x-8 md:mb-0">
            <Link href="/" className="transition hover:text-blue-500">Home</Link>
            <Link href="/about" className="transition hover:text-blue-500">About</Link>
            <Link href="/works" className="transition hover:text-blue-500">Works</Link>
            <Link href="/contact" className="transition hover:text-blue-500">Contact</Link>
          </div>  */
}
