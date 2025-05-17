import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="top-0 z-50 mt-4 mx-6 border border-black rounded-lg bg-neutral-900  backdrop-blur-sm ring-2 ring-neutral-700">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto ">
        <Link href="/" className="text-3xl font-bold ">
          S<span className="text-neutral-600">P</span>
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link href="/" className="text-lg transition hover:text-gray-400">
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg transition hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-lg transition hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-lg transition hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
        <Link href="/contact">
          <button className="px-4 py-2 text-base transition rounded-full bg-neutral-800 hover:bg-neutral-700">
            Let&apos;s talk
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
