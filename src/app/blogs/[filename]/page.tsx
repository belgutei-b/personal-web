import CustomBlog from "@/components/CustomBlog";
import { getCodeFrontmatter } from "@/lib/mdx";

export default async function Page({
  params,
}: {
  params: { filename: string };
}) {
  const { code, frontmatter, toc } = await getCodeFrontmatter(params.filename);
  return (
    <div>
      <CustomBlog code={code} frontmatter={frontmatter} toc={toc} />
    </div>
  );
}
