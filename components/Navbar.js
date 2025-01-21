"use client";
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

const Navbar = () => {
    // const user = useUser();
    // console.log(user.user?.id);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ChatMe
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/chat" className="hover:text-gray-200">
              UserChat
            </Link>
          </li>
          <li>
            <Link href="/forums" className="hover:text-gray-200">
              Forums
            </Link>
          </li>
          <li>
            <UserButton/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;