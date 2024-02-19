import BlogTitleTags from "@/components/BlogTItleTags";
import { getBlogsMeta } from "@/lib/blogs";

export default async function Page({
  params,
}: {
  params: { courseId: string };
}) {
  const allBlogsMeta = await getBlogsMeta();
  const blogsWeekMeta: Meta[][] = [];
  const allWeeks = [];
  for (let i = 10; i >= 1; i--) {
    blogsWeekMeta[i] = allBlogsMeta.filter(
      (blog) => blog.week === i && blog.courseId === params.courseId
    );
    if (blogsWeekMeta[i].length > 0) {
      allWeeks.push(
        <div className="w-full flex flex-col">
          <div className="pr-8">
            <p className="text-pink-500 text-3xl font-semibold">week-{i}</p>
          </div>
          <hr className="my-3" />
          <div>
            {blogsWeekMeta[i].map((blog) => (
              <BlogTitleTags blog={blog} />
            ))}
          </div>
        </div>
      );
    }
  }
  return <div className="flex flex-col w-full mt-10">{allWeeks}</div>;
}
