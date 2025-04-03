import path from "path";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import "katex/dist/katex.min.css"; // preventing from rendered twice
import type { FrontmatterType } from "@/types/blog.types";
import type { Toc } from "@/types/toc";

// rehype packages
// import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkTocHeadings from "./remark-toc-headings";
// remark packages
import remarkMath from "remark-math";

// Import Haskell language support
import haskell from "highlight.js/lib/languages/haskell";
import java from "highlight.js/lib/languages/java";

const root = process.cwd();
const pathToBlogs = path.join(root, "blogposts");

export async function getCodeFrontmatter(fileName: string) {
  const filePath = path.join(pathToBlogs, fileName);
  const mdxSource = fs.readFileSync(filePath, "utf-8");
  const toc: Toc = [];
  const result = await bundleMDX({
    source: mdxSource,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMath,
        [remarkTocHeadings, { exportRef: toc }],
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // rehypePrism,
        [
          rehypeHighlight,
          {
            languages: {
              haskell,
              java, // Register Haskell language
            },
            subset: false, // Include all languages from highlight.js
          },
        ],
        rehypeKatex,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ];
      return options;
    },
  });
  const { code, frontmatter } = result;
  return {
    code,
    frontmatter,
    toc,
  };
}

export async function getBlogsFrontmatter() {
  try {
    const fileNames = fs.readdirSync(pathToBlogs);
    const allBlogsFrontmatter: FrontmatterType[] = [];
    for (const fileName of fileNames) {
      const { code, frontmatter } = await getCodeFrontmatter(fileName);
      allBlogsFrontmatter.push(frontmatter as FrontmatterType);
    }
    return allBlogsFrontmatter;
  } catch (err) {
    console.log(err);
  }
  return null;
}
