/**
 * Represents a basic RSS feed item with core properties
 * @example
 * {
 *   title: "New Blog Post: Getting Started with TypeScript",
 *   link: "https://example.com/blog/typescript-intro",
 *   pubDate: new Date("2023-12-25T10:00:00Z"),
 *   description: "Learn the basics of TypeScript in this comprehensive guide"
 * }
 */
export type BaseFeedItem = {
  /** The title of the feed item */
  title: string;
  /** The URL where the full content can be found */
  link: string;
  /** The publication date and time of the feed item */
  pubDate: Date;
  /** A brief summary or full content of the feed item */
  description: string;
};

/**
 * Represents an RSS feed containing metadata and a list of feed items
 * @template T - Type extending BaseFeedItem
 * @example
 * {
 *   title: "My Tech Blog",
 *   description: "Latest articles about web development and programming",
 *   link: "https://example.com/blog",
 *   items: [
 *     {
 *       title: "New Blog Post: Getting Started with TypeScript",
 *       link: "https://example.com/blog/typescript-intro",
 *       pubDate: new Date("2023-12-25T10:00:00Z"),
 *       description: "Learn the basics of TypeScript in this comprehensive guide"
 *     }
 *   ]
 * }
 */
export type RssFeed<T extends BaseFeedItem> = {
  /** The title of the RSS feed */
  title: string;
  /** A brief description of the RSS feed's content */
  description: string;
  /** The URL of the RSS feed's website */
  link: string;
  /** An array of feed items */
  items: T[];
};
