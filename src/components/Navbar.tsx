"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const links = [
  {
    url: "/",
    name: "~/Belgutei",
  },
  {
    url: "/projects",
    name: "~/Projects",
  },
  {
    url: "/photos",
    name: "~/Photos",
  },
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

  const listItems = links.map((link) => (
    <li key={link.name} className="inline-block mr-12">
      <Link href={link.url} className="hover:text-blue-600">
        {link.name}
      </Link>
    </li>
  ));
  return (
    <div className="text-blue-300 flex navbar-links space-x-8 text-xl mt-6">
      <ul>
        {listItems}
        {session ? <button onClick={() => signOut()}>Logout</button> : <></>}
      </ul>
    </div>
  );
}
