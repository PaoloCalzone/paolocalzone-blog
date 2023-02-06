import { allPosts, Post } from "contentlayer/generated";
import Head from "next/head";
import Link from "next/link";
import { Container } from "@/components/Container";
import type {
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ posts: Post[] }>
> {
  console.log("POSTS", allPosts);
  return { props: { posts: allPosts } };
}
export default function Home({}) {
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
            gm, I&apos;m Paolo, a web3 App builder 🌿
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Paolo, a decentralized App builder. Focused on bringing
            blockchain technology to real world use cases. Web3 builder, project
            shipper, passionate about decentralization and open source.
          </p>
          <Link href="/blog/fr/premier-post">/blog/fr/premier-post</Link>

          <div className="mt-6 flex gap-6">
            {/*  <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      {/*   <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/*  {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
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
