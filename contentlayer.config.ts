import { defineDocumentType, makeSource } from "@contentlayer/source-files";

/** Blog post schema */
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title:   { type: "string", required: true },
    date:    { type: "date",   required: true },
    summary: { type: "string", required: true },
    cover:   { type: "string", required: false },
    tags:    { type: "list",   of: { type: "string" }, required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, "")
    }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
