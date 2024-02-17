import BlogTagUpper from "@/components/BlogTagUpper";
import { getBlogsTag } from "../../../../lib/blogs";
import BlogListItem from "@/components/BlogListItem";

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await getBlogsTag(params.slug);
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
