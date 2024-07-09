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
  console.log(toc);
  const pathname = usePathname();
  console.log(pathname);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <div>{frontmatter.title}</div>
      <div className="flex">
        <div className="text-white">
          {toc.map((heading) => (
            <Link href={`${pathname}${heading.url}`} key={heading.url}>
              {heading.value}
            </Link>
          ))}
        </div>
        <div className="prose dark:prose-invert">
          <Component />
        </div>
      </div>
    </>
  );
}
