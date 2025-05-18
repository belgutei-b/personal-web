import { getBlogsFrontmatter } from "@/lib/mdx";
import Link from "next/link";

export default async function Page() {
  const allBlogsFrontmatter = await getBlogsFrontmatter();
  if (!allBlogsFrontmatter) {
    return <div>Error! 404.</div>;
  }
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="my-10 text-5xl font-bold w-full md:w-4/5 lg:w-2/3 lg:text-7xl">
          All blogs
        </div>
        {allBlogsFrontmatter
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((frontmatter) => (
            <div
              className="rounded-lg mb-7 relative group lg:w-2/3 md:w-4/5 w-full"
              key={frontmatter.fileName}
            >
              <div className="flex text-xs text-stone-400 pb-1">
                <div>{frontmatter.date}</div>
                <div className="pr-0.5 pl-2">•</div>
                <div className="flex">
                  {frontmatter.tags.map((tag) => (
                    <Link
                      href={`/tags/${tag}`}
                      key={tag}
                      className="px-1.5 italic"
                    >
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
