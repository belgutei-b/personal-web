export default function Page({ params }: { params: { filename: string } }) {
  return <div>{params.filename}</div>;
}
