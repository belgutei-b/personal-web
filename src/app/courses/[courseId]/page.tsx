import { getBlogsMeta } from "@/lib/blogs";


export default async function Page({ params }: { params: { courseId: string } }) {
  const allBlogs = await getBlogsMeta();
  // const blogs = allBlogs.filter(blog => blog.courseId === params.courseId);
  return (
    <div className="flex w-full mb-10">
      <div className="border-r pr-8 ">
        <p className="text-pink-500 text-right text-2xl font-semibold">week-1</p>
      </div>
      <div className="pl-8">
        <div className="mb-4">
          
        </div>
      </div>
    </div>
  )
}