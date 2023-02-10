// write a component that takes in a post and renders it with
// the tilte, the description, the date and is wrapped in a link
// to the post
import type { Post } from ".contentlayer/generated";
import Link from "next/link";

type PostProps = {
  post: Post;
};

export default function PostCard({ post }: PostProps) {
  const { title, description, date, url } = post;
  const publicationDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div key={post.url}>
      <Link href={post.url}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{publicationDate}</p>
      </Link>
    </div>
  );
}
