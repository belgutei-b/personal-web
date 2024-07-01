import { getBlogsFrontmatter } from "@/lib/mdx";
import BlogTags from "@/components/BlogTags";
import Link from "next/link";

export default async function Page() {
  const allBlogsFrontmatter = await getBlogsFrontmatter();
  if (!allBlogsFrontmatter) {
    return <div>Error! 404.</div>;
  }
  return (
    <div className="">
      <p className="mb-5 text-5xl font-bold mt-10">All blogs</p>
      <div className="mt-10">
        {allBlogsFrontmatter.map((frontmatter) => (
          <div className="rounded-lg mb-7">
            <div className="flex text-xs text-stone-400 pb-1">
              <div>{frontmatter.date}</div>
              <div className="pr-0.5 pl-2">•</div>
              <div className="flex">
                {frontmatter.tags.map((tag) => (
                  <Link href={`/tags/${tag}`} className="px-1.5 italic">#{tag}</Link>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="justify-between mb-7">
              <Link href={`/blogs/${frontmatter.fileName}`} className="text-3xl">
                {frontmatter.title}
              </Link>
              <div className="text-sm mt-2 text-stone-400 tracking-tighter">{frontmatter.summary}</div>
            </div>
            {/*  */}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
