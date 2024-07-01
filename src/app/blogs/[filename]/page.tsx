import CustomBlog from "@/components/CustomBlog";
import { getCodeFrontmatter } from "@/lib/mdx";

export default async function Page({ params }: { params: { filename: string } }) {
  const { code, frontmatter } = await getCodeFrontmatter(params.filename);
  return (
    <div>
      <div>{frontmatter.title}</div>
      <div>
        <CustomBlog code={code} frontmatter={frontmatter} />
      </div>
    </div>
  )
}
