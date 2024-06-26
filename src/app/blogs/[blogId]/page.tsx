import { getBlogById } from "@/lib/blogs";
import CustomBlog from "./CustomBlog";

export default async function Page({ params }: { params: { blogId: string } }) {
  const result = await getBlogById({ blogId: params.blogId });
  if (result) {
    const { code, frontmatter } = result;
    return <CustomBlog code={code} frontmatter={frontmatter} />;
  }
  return (
    <div>Internal error. </div>
  )
}
