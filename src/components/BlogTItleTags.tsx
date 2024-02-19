import Link from "next/link";

export default function BlogTitleTags({ blog }: { blog: Meta }) {
  const { id, title, tags } = blog;
  return (
    <div className="mb-6">
      <Link
        href={`/blogs/${id}`}
        className="uppercase text-gray-100 font-bold tracking-tight lg:text-2xl md:text-xl text-base"
      >
        {title}
      </Link>
      <div className="flex">
        {tags.map((tag) => (
          <Link
            className="mr-2 text-custom-green hover:text-sky-500 uppercase text-sm"
            href={`/tags/${tag}`}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
