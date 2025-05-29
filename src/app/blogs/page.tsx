import BlogList from "@/components/BlogList";
import { getBlogsFrontmatter } from "@/lib/mdx";
import { FrontmatterType } from "@/types/blog.types";

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
  return <BlogList tags={tags} allBlogsFrontmatter={allBlogsFrontmatter} />;
}
