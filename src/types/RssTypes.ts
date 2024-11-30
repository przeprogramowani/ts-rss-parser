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

// Example custom feed item type
export interface BlogPost extends BaseFeedItem {
  author?: string;
  category?: string[];
}
