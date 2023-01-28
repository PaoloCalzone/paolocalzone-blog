import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Container } from "@/components/Container";
import MDXComponents from "@/components/MDXComponent";
import type { GetStaticProps, GetStaticPaths } from "next";

type PostProps = {
  post: Post;
};

export default function PostLayout({ post }: PostProps) {
  const Component = useMDXComponent(post.body.code);
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Component components={MDXComponents} />
        </div>
      </div>
    </Container>
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
