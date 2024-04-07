import Link from "next/link";

export default function BlogTitleTags({ blog }: { blog: Meta }) {
  const { id, title, tags } = blog;
  return (
    <div>
      <Link
        href={`/blogs/${id}`}
        className="text-gray-100 font-semibold tracking-tight lg:text-2xl md:text-xl text-base text-spacing"
      >
        {title}
      </Link>
      <div className="flex">
        {tags.map((tag) => (
          <Link
            className="mr-2 text-custom-green hover:text-custom-green-h uppercase text-sm"
            href={`/tags/${tag}`}
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
