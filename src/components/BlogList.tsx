"use client";

import Link from "next/link";
import { FrontmatterType } from "@/types/blog.types";

export default function BlogList({
  allBlogsFrontmatter,
  tags,
}: {
  allBlogsFrontmatter: FrontmatterType[];
  tags: string[];
}) {
  return (
    <div className="flex flex-col md:flex-row-reverse items-start relative z-20">
      <div className="flex flex-1 flex-col w-full md:ml-10">
        <div className="pl-4 md:pl-0 mb-4 md:mb-10 md:mt-10 font-bold w-full lg:w-2/3 text-2xl md:text-3xl lg:text-5xl">
          All blogs
        </div>
        {allBlogsFrontmatter
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((frontmatter) => (
            <div
              className="rounded-lg mb-4 md:mb-7 relative group lg:w-10/12 w-full"
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
              {/* title & summary  */}
              <div className="px-4 md:px-0 justify-between mb-4 md:mb-7">
                <Link
                  href={`/blogs/${frontmatter.fileName}`}
                  className="text-xl md:text-2xl text-custom-green hover:text-custom-green-h"
                >
                  {frontmatter.title}
                </Link>
                <div className="text-sm mt-2 text-stone-300 tracking-tighter">
                  {frontmatter.summary}
                </div>
              </div>
              {/*  */}
              <hr />
              <span className="absolute w-px -inset-y-3 left-[0.5rem] md:left-[-1rem] bg-gradient-to-b from-black via-custom-green to-black opacity-0 group-hover:opacity-100 transition"></span>
            </div>
          ))}
      </div>
      {/* tags */}
      <div className="md:mt-10 md:w-60 px-4 md:px-0 mb-4 md:mb-0">
        <div className="md:text-xl mb-3">Tags</div>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              key={tag}
              className="border mb-2 px-2 py-1 mr-3 text-xs rounded-2xl hover:bg-zinc-400 hover:text-zinc-800"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

