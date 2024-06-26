import getFormattedDate from "@/lib/getFormattedDate";
import BlogTitleTags from "./BlogTItleTags";

export default function BlogListItem({ blog }: { blog: Meta }) {
  const { date } = blog;
  const formattedDate = getFormattedDate(date);
  return (
    <li key={blog.id} className="py-6 border-b border-gray-400">
      <div className="flex md:flex-row flex-col">
        <div className="text-base font-medium leading-6 text-gray-400 md:mr-8 lg:mr-12 cursor-default w-48">
          {formattedDate}
        </div>
        <BlogTitleTags blog={blog} />
      </div>
    </li>
  );
}
