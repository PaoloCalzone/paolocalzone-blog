import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/MDXComponent";
import type { GetStaticProps } from "next";

export const getStaticPaths = () => {
  const paths = allPosts.map((post) => `/blog/${post._raw.flattenedPath}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params!.slug;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  return { props: { post } };
};

const PostLayout: React.FC<{ post: Post }> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <div className="sans">
      {" "}
      <Component components={MDXComponents} />
    </div>
  );
};

export default PostLayout;
