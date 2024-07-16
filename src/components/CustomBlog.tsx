"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import "highlight.js/styles/github-dark.css";
import { Toc } from "@/types/toc";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomBlog({
  code,
  frontmatter,
  toc,
}: {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
  toc: Toc;
}) {
  const pathname = usePathname();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center my-4">
        <div className="text-4xl lg:text-6xl  text-custom-green">
          {frontmatter.title}
        </div>
        <div className="mt-3">{frontmatter.date}</div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row w-full">
        <div className="flex flex-col text-sm space-y-3 w-1/5">
          <p className="text-lg">Table of Contents</p>
          {toc.map((heading, index) => (
            <Link
              href={`${pathname}${heading.url}`}
              key={heading.url}
              className="text-zinc-300 hover:text-zinc-50 pl-4 flex"
            >
              {index + 1}
              <p className="mr-1">.</p>
              {heading.value}
            </Link>
          ))}
        </div>
        <div className="prose dark:prose-invert w-4/5 ml-5">
          <Component />
        </div>
      </div>
    </div>
  );
}
