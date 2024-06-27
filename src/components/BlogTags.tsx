export default function BlogTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex space-x-3">
      {tags.map((tag) => (
        <div className="text-sm">{tag}</div>
      ))}
    </div>
  );
}
