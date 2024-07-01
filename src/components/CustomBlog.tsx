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
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main className="prose dark:prose-invert">
        <Component />
      </main>
    </>
  );
}
