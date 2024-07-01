import path from "path";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import "katex/dist/katex.min.css"; // preventing from rendered twice
import { FrontmatterType } from "@/types/blog.types";

// rehype packages
import rehypePrism from "rehype-prism-plus";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
// remark packages
import remarkMath from "remark-math";

const root = process.cwd();
const pathToBlogs = path.join(root, "blogposts");

export async function getCodeFrontmatter(fileName: string) {
  const filePath = path.join(pathToBlogs, fileName);
  const mdxSource = fs.readFileSync(filePath, "utf-8");
  const result = await bundleMDX({
    source: mdxSource,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        rehypeHighlight,
        rehypeKatex,
      ];

      return options;
    },
  });
  const { code, frontmatter } = result;
  return {
    code,
    frontmatter,
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
