import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

type Props = {
  blog: Meta;
};

export default function BlogListItem({ blog }: Props) {
  const { id, title, date, tags } = blog;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="my-6" key={blog.id}>
      <div className="flex md:flex-row flex-col">
        <div className="text-base font-medium leading-6 text-gray-400 md:mr-8 lg:mr-12">
          {formattedDate}
        </div>
        <div>
          <Link
            href={`/blogs/${id}`}
            className="uppercase text-gray-100 font-bold text-2xl tracking-tight"
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
      </div>
      <br />
    </li>
  );
}
