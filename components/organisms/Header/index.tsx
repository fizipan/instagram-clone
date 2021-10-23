import Image from 'next/image';

// Icons
import {
  SearchIcon,
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

// Component
import MenuHeader from './MenuHeader';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex justify-between items-center md:max-w-3xl xl:max-w-5xl mx-5 lg:mx-auto">
        {/* Left */}
        {/* Mobile Logo */}
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
        </div>

        {/* Dekstop Logo */}
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
        </div>

        {/* Middle */}
        <div className="relative mt-1 p-3 flex items-center">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 sm:text-sm w-full block border-gray-300 rounded-md focus:ring-black focus:border-black"
          />
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-5">
          <MenuHeader Icon={MenuIcon} showIn="mobile" />
          <MenuHeader Icon={HomeIcon} showIn="dekstop" isActive />
          <MenuHeader Icon={PaperAirplaneIcon} showIn="dekstop" message={2} />
          <MenuHeader Icon={PlusCircleIcon} showIn="dekstop" />
          <MenuHeader Icon={UserGroupIcon} showIn="dekstop" />
          <MenuHeader Icon={HeartIcon} showIn="dekstop" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile pic"
            className="h-10 rounded-full hidden lg:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
          />
        </div>
      </div>
    </header>
  );
}
