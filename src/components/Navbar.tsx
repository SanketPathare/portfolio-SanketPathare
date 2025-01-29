import Link from "next/link";

export default function Navbar() {
  return (
    // <nav className=" top-0  bg-neutral-900backdrop-blur-sm z-50 mt-4 border border-black ring-2 ring-neutral-700 ml-6 mr-6 rounded-lg ">
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-sm z-50 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Link href="/" className="text-2xl font-bold ">
          S<span className="text-neutral-600">P</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-400 transition text-md">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition text-md"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-400 transition text-md"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition text-md"
          >
            Contact
          </Link>
        </div>
        <Link href="/contact">
          <button className=" text-base bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700 transition">
            Let&apos;s talk
          </button>
        </Link>
      </div>
    </nav>
  );
}



