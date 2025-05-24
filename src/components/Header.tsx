"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

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
  const [showList, setShowList] = useState(false);
  const items = links.map((link) => (
    <div key={link.name} className="inline-block mr-12">
      <Link href={link.url} className="hover:text-blue-600">
        {link.name}
      </Link>
    </div>
  ));
  return (
    <div className="mt-8 w-full flex items-start flex-grow space-x-2">
      <div className="bg-neutral-950 flex-1 border rounded-md border-transparent flex flex-col py-1 pl-1">
        <div className="flex space-x-2">
          <p className="text-blue-300 text-sm">
            {">"} ls {"~"}
          </p>
          <p className="text-zinc-400 text-sm"># list links</p>
        </div>
        <div>
          {showList && (
            <div className="flex flex-col space-y-0.5">
              {links.map((link) => (
                <Link key={link.name} href={link.url} className="text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <button
        className="text-sm border border-transparent rounded-md py-1 px-2 bg-slate-900"
        onClick={() => setShowList(true)}
      >
        run
      </button>
    </div>
  );
  return (
    <div className="text-blue-300 navbar-links space-x-8 text-xl mt-6 flex w-full">
      <div>{items}</div>
      <div className="flex-1 flex justify-end">
        <Link href="https://github.com/bebe0323" target="_blank">
          <FaGithub size="28" />
        </Link>
      </div>
    </div>
  );
}
