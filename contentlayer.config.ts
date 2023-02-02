import { defineDocumentType, makeSource } from "contentlayer/source-files"; //eslint-disable-line
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const getLocale = (path: string) => {
  const pathArray = path.split(".");
  console.log(pathArray);
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : "en";
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    ogSubtitle: {
      type: "string",
      required: false,
    },
    tags: {
      type: "json",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.split(".")[0],
    },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    locale: {
      type: "string",
      resolve: (post) => {
        return getLocale(post._raw.sourceFileDir);
      },
    },
    og: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}/og.jpg`,
    },
    image: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}/image.jpg`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blog",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          // theme: "material-theme-palenight",
          theme: "material-theme-palenight",

          // Keep the background or use a custom background color?
          keepBackground: true,

          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
