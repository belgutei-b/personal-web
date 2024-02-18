import { getPostByName } from "@/lib/blogs";
import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import "highlight.js/styles/github-dark.css";
import { rehype } from "rehype";
import rehypeSlug from "rehype-slug";

export default async function Page({ params }: { params: { blogId: string } }) {
  const post = await getPostByName(params.blogId + ".mdx");
  const formattedDate = getFormattedDate(post!.meta.date);
  if (post) {
    return (
      <div className="mt-10">
        <div className="text-center">
          <p className="text-base text-gray-400 leading-2 font-medium">
            {formattedDate}
          </p>
          <p className="text-5xl">{post.meta.title}</p>
          <hr className="my-6" />
        </div>

        <div className="prose prose-Stone text-gray-300 leading-6">
          {post.content}
        </div>
      </div>
    );
  }
}
