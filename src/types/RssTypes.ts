export type BaseFeedItem = {
  title: string;
  link: string;
  pubDate: Date;
  description: string;
};

export type RssFeed<T extends BaseFeedItem> = {
  title: string;
  description: string;
  link: string;
  items: T[];
};
