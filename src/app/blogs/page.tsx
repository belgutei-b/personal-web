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
          <div
            className="rounded-lg mb-7 relative group"
            key={frontmatter.fileName}
          >
            <div className="flex text-xs text-stone-400 pb-1">
              <div>{frontmatter.date}</div>
              <div className="pr-0.5 pl-2">•</div>
              <div className="flex">
                {frontmatter.tags.map((tag) => (
                  <Link href={`/tags/${tag}`} className="px-1.5 italic">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="justify-between mb-7">
              <Link
                href={`/blogs/${frontmatter.fileName}`}
                className="text-3xl text-custom-green hover:text-custom-green-h"
              >
                {frontmatter.title}
              </Link>
              <div className="text-sm mt-2 text-stone-400 tracking-tighter">
                {frontmatter.summary}
              </div>
            </div>
            {/*  */}
            <hr />
            <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-black via-custom-green to-black opacity-0 group-hover:opacity-100 transition"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
