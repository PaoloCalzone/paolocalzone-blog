import { GetStaticProps } from "next";
import { allPosts, Post } from "contentlayer/generated";
import { pick } from "contentlayer/utils";
import { formatDate } from "@/lib/formatDate";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import Head from "next/head";

type BlogProps = {
  posts: Post[];
};

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Paolo Calzone - Blog</title>
        <meta
          name="description"
          content="I write about web3, decentralized applications, and blockchain technology."
        />
      </Head>
      <Container className="mt-9">
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {posts.map((post, index) => (
            <Card key={index} as="article" href={`/blog/${post.slug}`}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Eyebrow as="time" dateTime={post.date} decorate>
                {formatDate(post.date)}
              </Card.Eyebrow>
              <Card.Description>{post.description}</Card.Description>
              <Card.Cta>Read article</Card.Cta>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => post._raw.sourceFileDir === "fr")
    .map((post) => pick(post, ["url", "title", "date", "description"]));

  return { props: { posts } };
};
