import { allPosts, Post } from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import Head from "next/head";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { GitHubIcon, TwitterIcon, LensIcon } from "@/components/SocialIcons";
import type { GetStaticProps } from "next";
import { formatDate } from "@/lib/formatDate";

type HomeProps = {
  posts: Post[];
};

type SocialLinkProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  [x: string]: any;
};

function Post({ post }: { post: Post }) {
  console.log("Post Date:", post.date);
  return (
    <Card as="article">
      <Card.Title href={post.url}>{post.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={post.date} decorate>
        {formatDate(post.date)}
      </Card.Eyebrow>
      <Card.Description>{post.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function Home({ posts }: HomeProps) {
  const SocialLink = ({ icon: Icon, ...props }: SocialLinkProps) => {
    return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
    );
  };
  return (
    <>
      <Head>
        <title>Paolo Calzone - Decentralized App builder</title>
        <meta
          name="description"
          content="I’m Paolo, a decentralized App builder. Focused on bringing blockchain technology to real world use cases."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Web3 dApp builder 🌿
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Paolo, a <span className="font-semibold">decentralized</span>{" "}
            App builder. Focused on using blockchain and AI technologies to
            solve real world problems. Standing at the crossroad of cutting edge
            tech and old fashioned jobs and industries.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://lenster.xyz/u/paolocalzone"
              aria-label="Follow on GitHub"
              icon={LensIcon}
            />
            <SocialLink
              href="https://twitter.com/paolocalz"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />

            <SocialLink
              href="https://github.com/PaoloCalzone"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      {/*   <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/*  <Newsletter />
            <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((_, i) => i < 4)
    .map((post) => pick(post, ["url", "title", "date", "description"]));

  return { props: { posts } };
};
