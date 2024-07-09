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
        <div className="text-4xl">{frontmatter.title}</div>
        <div>{frontmatter.date}</div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col mr-5 text-sm space-y-3">
          {toc.map((heading) => (
            <Link
              href={`${pathname}${heading.url}`}
              key={heading.url}
              className="text-zinc-300 hover:text-zinc-50"
            >
              {heading.value}
            </Link>
          ))}
        </div>
        <div className="prose dark:prose-invert">
          <Component />
        </div>
      </div>
    </div>
  );
}
