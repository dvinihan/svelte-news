export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ArticleSource;
  title: string;
  url: string;
  urlToImage: string;
};

export type ArticleSource = {
  id: string;
  name: string;
};
