import { defineDocumentType, makeSource } from "contentlayer/source-files"; //eslint-disable-line
import rehypePrism from "rehype-prism-plus";
import codeTitle from "rehype-code-titles";

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
    rehypePlugins: [rehypePrism, codeTitle],
  },
});
