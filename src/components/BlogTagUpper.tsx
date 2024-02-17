export default function BlogTagUpper({ text }: { text: string }) {
  return (
    <div>
      <p className="tracking-tight text-gray-50 my-6 text-6xl font-extrabold">
        {text}
      </p>
      <hr />
    </div>
  );
}
