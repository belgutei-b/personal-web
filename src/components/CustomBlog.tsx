"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import "highlight.js/styles/github-dark.css";
import { Toc } from "@/types/toc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

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
  const [showToc, setShowToc] = React.useState<Boolean>(true);
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center my-4">
        <div className="text-4xl lg:text-6xl  text-custom-green">
          {frontmatter.title}
        </div>
        <div className="mt-3">{frontmatter.date}</div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row w-full">
        <div className="flex flex-col text-sm space-y-3 lg:w-1/5 mb-10">
          <div
            className="text-lg flex cursor-pointer"
            onClick={() => setShowToc(!showToc)}
          >
            {showToc ? (
              <GoTriangleDown size={25} />
            ) : (
              <GoTriangleRight size={25} />
            )}
            <div>Table of Contents</div>
          </div>
          {showToc &&
            toc.map((heading, index) => (
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
        <div className="prose dark:prose-invert w-4/5 lg:ml-16">
          <Component />
        </div>
      </div>
    </div>
  );
}
