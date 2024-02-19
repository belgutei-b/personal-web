"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const links = [
  {
    url: "/",
    name: "~/Belgutei",
  },
  // {
  //   url: "/projects",
  //   name: "~/Projects",
  // },
  // {
  //   url: "/photos",
  //   name: "~/Photos",
  // },
  {
    url: "/blogs",
    name: "~/Blogs",
  },
  {
    url: "/courses",
    name: "~/Courses",
  },
];

export default function Navbar() {
  const { data: session } = useSession();

  const items = links.map((link) => (
    <div key={link.name} className="inline-block mr-12">
      <Link href={link.url} className="hover:text-blue-600">
        {link.name}
      </Link>
    </div>
  ));
  return (
    <div className="text-blue-300 navbar-links space-x-8 text-xl mt-6 flex w-full">
      <div>
        {items}
        {session ? <button onClick={() => signOut()}>Logout</button> : <></>}
      </div>
      <div className="flex-1 flex justify-end">
        <Link href="https://github.com/bebe0323" target="_blank">
          <FaGithub size="28" />
        </Link>
      </div>
    </div>
  );
}
