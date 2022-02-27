export interface Post {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    excerpt: string;
  };
}
