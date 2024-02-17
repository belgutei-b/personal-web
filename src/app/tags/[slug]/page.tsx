import BlogTagUpper from "@/components/BlogTagUpper";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <BlogTagUpper text={params.slug} />
    </div>
  );
}
