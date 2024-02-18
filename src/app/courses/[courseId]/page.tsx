import { getBlogsMeta } from "@/lib/blogs";


export default async function Page({ params }: { params: { courseId: string } }) {
  const allBlogs = getBlogsMeta();
  return (
    <div>

    </div>
  )
}