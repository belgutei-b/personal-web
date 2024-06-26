import fs from "fs"; // file system
import path from "path";
import { bundleMDX } from "mdx-bundler";

// process.cwd -> current working directory
const postsDirectory = path.join(process.cwd(), "blogposts");

export async function getBlogById({ blogId }: { blogId: string }) {
  try {
    const fullPath = path.join(postsDirectory, blogId + ".mdx");
    const mdxSource = fs.readFileSync(fullPath, "utf8");
    const result = await bundleMDX({
      source: mdxSource,
      mdxOptions(options, frontmatter) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
        ];
        return options;
      },
    });
    const { code, frontmatter } = result;
    return {
      code,
      frontmatter
    }
  }
  catch (err) {
    console.log(err);
  }
  
}

// export async function getBlogsMeta(): Promise<Meta[]> {
//   // get file names under /blogposts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const posts: Meta[] = [];
//   await Promise.all(
//     fileNames.map(async (fileName) => {
//       const post = await getBlogById({ blogId: fileName});
//       if (post && post.frontmatter.publish) {
//         const { frontmatter } = post;
//         posts.push(frontmatter);
//       }
//     })
//   );
//   return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
// }

// export async function getBlogsByTag(tag: string): Promise<Meta[]> {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const posts: Meta[] = [];
//   await Promise.all(
//     fileNames.map(async (fileName) => {
//       const post = await getPostByName(fileName);
//       if (
//         post &&
//         post.frontmatter.publish &&
//         post.frontmatter.tags.includes(tag)
//       ) {
//         const { frontmatter } = post;
//         posts.push(frontmatter);
//       }
//     })
//   );
//   return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
// }
