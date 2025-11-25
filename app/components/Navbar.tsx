import Link from 'next/link';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <Link href="#" className="hover:text-black transition-colors">Inspo</Link>
        <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
        <Link href="/manifesto" className="hover:text-black transition-colors">Mission</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#" className="text-gray-600 font-medium hover:text-black transition-colors">Login</Link>
        <button className="bg-[#2563EB] text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
          Get Started
        </button>
      </div>
    </nav>
  );
}
