import { createContentLoader } from "vitepress";

export default createContentLoader("blog/*.md", {
  includeSrc: false,
  transform(data) {
    return data
      .filter((post) => post.url !== "/blog/")
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
      });
  },
});
