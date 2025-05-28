"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    url: "/",
    name: "~/Belgutei",
  },
  {
    url: "/blogs",
    name: "~/Blogs",
  },
  {
    url: "/courses",
    name: "~/Courses",
  },
  {
    url: "/tags",
    name: "~/Tags",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeSidebar = () => setIsOpen(false);
  return (
    <>
      {/* desktop navbar */}
      <div className="hidden md:flex flex-row h-14 justify-between items-end">
        <div className="text-blue-300 text-xl space-x-9 h-full flex items-end">
          {links.map((link) => (
            <Link href={link.url}>{link.name}</Link>
          ))}
        </div>
        <div>
          <Link href="https://github.com/bebe0323" target="_blank">
            <FaGithub className="mr-3 text-blue-300" size="28" />
          </Link>
        </div>
      </div>
      {/* mobile navbar */}
      {/* top section */}
      <div className="md:hidden w-full absolute h-14 z-10 flex flex-col justify-between bg-stone-900">
        <div className="flex justify-between">
          <AlignJustify
            onClick={() => setIsOpen(!isOpen)}
            strokeWidth={1.5}
            className="my-auto ml-3"
          />
          <Link href="https://github.com/bebe0323" target="_blank">
            <FaGithub className="my-3 mr-3 text-blue-300" size="28" />
          </Link>
        </div>
        <hr />
      </div>
      {/* mobile navbar - sidebar */}
      <div className="fixed z-50 md:hidden">
        {/* handling click outside navbar */}
        <div
          className={`fixed top-14 inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isOpen
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar}
        />
        {/* sidebar */}
        <div
          className={`fixed top-14 left-0 h-full w-2/4 bg-stone-900 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col px-2 pt-4 space-y-1 text-blue-300">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className={`w-full pl-4 py-2 ${
                  pathname === link.url ? "bg-stone-800" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <hr className="mt-2 mx-2 transition-opacity duration-300" />
        </div>
      </div>
    </>
  );
}
