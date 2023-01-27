import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponent";
import type { GetStaticProps, GetStaticPaths } from "next";

const PostLayout: React.FC<{ post: Post }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  console.log("POST", post);
  return (
    <div className="sans">
      {" "}
      <Component components={MDXComponents} />
    </div>
  );
};

export default PostLayout;

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