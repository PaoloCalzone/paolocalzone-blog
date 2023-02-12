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
        <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          {post.title}
        </h3>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {publicationDate}
        </p>
      </Link>
    </div>
  );
}
