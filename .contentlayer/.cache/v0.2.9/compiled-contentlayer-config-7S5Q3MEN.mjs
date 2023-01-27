// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var getLocale = (path) => {
  const pathArray = path.split(".");
  console.log(pathArray);
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : "en";
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    summary: {
      type: "string",
      required: true
    },
    tags: {
      type: "json",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.split(".")[0]}`
    },
    locale: {
      type: "string",
      resolve: (post) => {
        console.log("DOC", post);
        return getLocale(post._raw.sourceFileDir);
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "blog",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7S5Q3MEN.mjs.map
