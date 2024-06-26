"use client";
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";

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
    <div>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main className="prose dark:prose-invert">
        <Component />
      </main>
    </div>
  );
}
