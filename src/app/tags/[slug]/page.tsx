import BlogTagUpper from "@/components/BlogTagUpper";
import { getBlogsByTag } from "@/lib/blogs";
import BlogListItem from "@/components/BlogListItem";

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await getBlogsByTag(params.slug);
  return (
    <div>
      <BlogTagUpper text={params.slug} />
      <ul>
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
