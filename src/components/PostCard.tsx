// write a component that takes in a post and renders it with
// the tilte, the description, the date and is wrapped in a link
// to the post
import type { Post } from ".contentlayer/generated";
import Link from "next/link";

type PostProps = {
  post: Post;
};

export default function PostCard({ post }: PostProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.date}</p>
      <Link href={post.url}>--nn</Link>
    </div>
  );
}
