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
  console.log(pathname);
  const items = links.map((link) => (
    <div key={link.name} className="inline-block mr-12">
      <Link href={link.url} className="hover:text-blue-600">
        {link.name}
      </Link>
    </div>
  ));
  const closeSidebar = () => setIsOpen(false);
  return (
    <div>
      {/* main / desktop navbar */}
      <div className="absolute h-14 z-10 flex flex-col justify-between w-full bg-stone-900">
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
      {/* mobile navbar */}
      {isOpen && (
        <div className="fixed z-50 md:hidden">
          {/* handling click outside navbar */}
          <div
            className="fixed top-14 inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeSidebar}
          />
          {/* sidebar */}
          <div className={`fixed top-14 inset-0 h-full w-2/4 bg-stone-900`}>
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
            <hr className="mt-2 mx-2" />
          </div>
        </div>
      )}
    </div>
  );
  // return (
  //   <div className="text-blue-300 navbar-links space-x-8 text-xl mt-6 flex w-full">
  //     <div>{items}</div>
  //     <div className="flex-1 flex justify-end">
  //       <Link href="https://github.com/bebe0323" target="_blank">
  //         <FaGithub size="28" />
  //       </Link>
  //     </div>
  //   </div>
  // );
}
