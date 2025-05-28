import { getBlogsFrontmatter } from "@/lib/mdx";
import { FrontmatterType } from "@/types/blog.types";
import Link from "next/link";

function getTags(blogs: FrontmatterType[]) {
  const allTags = blogs
    .map((blog) => blog.tags)
    .flat()
    .sort();
  const uniqueTags: string[] = [];
  for (let tag of allTags) {
    if (!uniqueTags.includes(tag)) {
      uniqueTags.push(tag);
    }
  }
  return uniqueTags;
}

export default async function Page() {
  const allBlogsFrontmatter = await getBlogsFrontmatter();
  if (!allBlogsFrontmatter) {
    return <div>Error! 404.</div>;
  }
  const tags = getTags(allBlogsFrontmatter);
  return (
    <div className="flex flex-col md:flex-row-reverse items-start">
      <div className="flex flex-1 flex-col w-full md:ml-10">
        <div className="pl-4 md:pl-0 mb-10 md:mt-10 text-5xl font-bold w-full lg:w-2/3 lg:text-5xl">
          All blogs
        </div>
        {allBlogsFrontmatter
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((frontmatter) => (
            <div
              className="rounded-lg mb-7 relative group lg:w-10/12 w-full"
              key={frontmatter.fileName}
            >
              <div className="px-4 md:px-0 flex text-xs text-stone-400 pb-1">
                <div>{frontmatter.date}</div>
                <div className="pr-0.5 pl-2">•</div>
                <div className="flex flex-wrap">
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
              <div className="px-4 md:px-0 justify-between mb-7">
                <Link
                  href={`/blogs/${frontmatter.fileName}`}
                  className="text-3xl text-custom-green hover:text-custom-green-h"
                >
                  {frontmatter.title}
                </Link>
                <div className="text-sm mt-2 text-stone-300 tracking-tighter">
                  {frontmatter.summary}
                </div>
              </div>
              {/*  */}
              <hr />
              <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-black via-custom-green to-black opacity-0 group-hover:opacity-100 transition"></span>
            </div>
          ))}
      </div>
      {/* tags */}
      <div className="md:mt-10 md:w-60 px-4 md:px-0 mb-4 md:mb-0">
        <div className="text-2xl mb-3">Tags</div>
        <div className="flex flex-wrap space-x-2">
          {tags.map((tag) => (
            <Link
              className="border border-zinc-500 text-stone-300 mb-2 px-3 py-0.5 rounded-2xl text-sm hover:bg-zinc-400 hover:text-zinc-800 mr-1.2"
              key={tag}
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
