"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between p-3">
        {/* Left Section: Profile */}
        <div className="flex items-center space-x-3">
          <Image
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <span className="text-lg font-medium">Max Miehe</span>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Mensch2134" target="_blank">
            <Image src="/github.png" alt="GitHub" width={28} height={28} />
          </Link>
          <Link href="https://www.linkedin.com/in/max-miehe-dev" target="_blank">
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

