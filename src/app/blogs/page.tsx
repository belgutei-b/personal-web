"use server";
import BlogListItem from "@/components/BlogListItem";
import { getBlogsMeta } from "@/lib/blogs";
import BlogTagUpper from "@/components/BlogTagUpper";
import CustomParticles from "@/components/CustomParticles";

export default async function Blogs() {
  const blogs = await getBlogsMeta();
  return (
    <div>
      <CustomParticles />
      <BlogTagUpper text={"All blogs"} />
      <ul>
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
