export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  published?: boolean;
};

export type Post = PostMeta & {
  content: string;
  readingTime: string;
};
