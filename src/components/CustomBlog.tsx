"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import "highlight.js/styles/github-dark.css";
import "highlight.js/lib/languages/haskell";
import { Toc } from "@/types/toc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { mdxComponents } from "@/components/mdx-components";

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
        <div className="text-3xl lg:text-4xl font-bold  text-zinc-300">
          {frontmatter.title}
        </div>
        <div className="mt-3">{frontmatter.date}</div>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col text-sm space-y-3 mb-10 lg:w-1/5">
          <div
            className="text-lg flex cursor-pointer px-3 md:px-0"
            onClick={() => setShowToc(!showToc)}
          >
            {showToc ? (
              <GoTriangleDown size={25} />
            ) : (
              <GoTriangleRight size={25} />
            )}
            <div className="text-zinc-300">Table of Contents</div>
          </div>
          {showToc &&
            toc.map((heading, index) => (
              <Link
                href={`${pathname}${heading.url}`}
                key={heading.url}
                className="text-violet-400  hover:text-violet-200 pl-4 flex underline underline-offset-2"
              >
                {/* text-cyan-400 */}
                {/* {index + 1} */}
                {/* <p className="mr-1">.</p> */}
                {heading.value}
              </Link>
            ))}
          <hr />
          {/* tags */}
          <div className="px-3 md:px-0">
            <div className="text-lg text-zinc-300 mb-2">Tags</div>
            <div className="flex flex-wrap">
              {frontmatter.tags.map((tag: string) => (
                <Link
                  href={`/tags/${tag}`}
                  key={tag}
                  className="border mb-2 px-2 py-1 mr-3 text-xs rounded-2xl hover:bg-zinc-400 hover:text-zinc-800"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mdx-content prose dark:prose-invert px-3 md:px-5 mb-3">
          <Component components={mdxComponents} />
        </div>
      </div>
    </div>
  );
}
