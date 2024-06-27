import { getBlogsFrontmatter } from "@/lib/mdx";
import BlogTags from "@/components/BlogTags";
import Link from "next/link";

export default async function Page() {
  const allBlogsFrontmatter = await getBlogsFrontmatter();
  if (!allBlogsFrontmatter) {
    return <div>Error! 404.</div>;
  }
  return (
    <div>
      <p>All blogs</p>
      {allBlogsFrontmatter.map((frontmatter) => (
        <div className="border-solid border-2 rounded-lg mb-10 py-2 px-2">
          <div className="flex flex-row justify-between mb-1">
            <Link href={`/blogs/${frontmatter.fileName}`} className="text-2xl">
              {frontmatter.title}
            </Link>
            <div className="">{frontmatter.date}</div>
          </div>
          <BlogTags tags={frontmatter.tags} />
        </div>
      ))}
    </div>
  );
}
