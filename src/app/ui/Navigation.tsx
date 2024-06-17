import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-gray-50 font-bold text-lg" prefetch={false}>
          Logo
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-400 hover:text-gray-50 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="/archive" className="text-gray-400 hover:text-gray-50 transition-colors" prefetch={false}>
            Work
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-50 transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-gray-400 hover:text-gray-50 transition-colors">
          {/* <MenuIcon className="h-6 w-6" /> */}
          menu
        </button>
      </div>
    </header>
  );
}
