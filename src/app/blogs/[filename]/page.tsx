import { getCodeFrontmatter } from "@/lib/mdx";

export default async function Page({ params }: { params: { filename: string } }) {
  const { code, frontmatter } = await getCodeFrontmatter(params.filename);
  
  return <div>{params.filename}</div>;
}
