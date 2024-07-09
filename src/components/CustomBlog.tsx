"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import "highlight.js/styles/github-dark.css";

export default function CustomBlog({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
}) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <div>{frontmatter.title}</div>
      <main className="prose dark:prose-invert">
        <Component />
      </main>
    </>
  );
}
