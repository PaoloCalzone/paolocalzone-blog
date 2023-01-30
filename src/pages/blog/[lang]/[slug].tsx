import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Container } from "@/components/Container";
import MDXComponents from "@/components/MDXComponent";
import type { GetStaticProps, GetStaticPaths } from "next";
import { NextSeo } from "next-seo";
import { SITE_URL } from "@/lib/constants";

type PostProps = {
  post: Post;
};

export default function PostLayout({ post }: PostProps) {
  const seoTitle = `${post.title} | Paolo Calzone`;
  const seoDescription = post.description;
  const ogSubtitle = post.ogSubtitle;
  const lang = post.locale;
  const url = `${SITE_URL}/${lang}/${post.slug}`;

  const Component = useMDXComponent(post.body.code);
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={url}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url,
          type: "article",
          images: [
            {
              url: post.og
                ? `${url}/og`
                : `${SITE_URL}/api/og?title=${seoTitle}&ogSubtitle=${ogSubtitle}}`,
              alt: seoTitle,
            },
          ],
          article: {
            publishedTime: post.date,
            authors: ["https://paolocalzone.xyz"],
          },
        }}
      />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Component components={MDXComponents} />
          </div>
        </div>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => ({
    params: { lang: post._raw.sourceFileDir, slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug;
  const lang = context.params!.lang;
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `${lang}/${slug}`
  );
  return { props: { post } };
};
