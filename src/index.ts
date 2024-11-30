import {RssFeedParser} from "./RssFeedParser";
import {writeFeedToFile} from "./utils/fileUtils";
import path from "path";
export type {BaseFeedItem, RssFeed} from "./types/RssTypes";

const feedUrl = "https://anchor.fm/s/e2cb03d0/podcast/rss";
const parser = new RssFeedParser();

async function main() {
  try {
    const feed = await parser.parseFeed(feedUrl);

    const outputPath = path.join(process.cwd(), "feed-output.json");
    await writeFeedToFile(feed, outputPath);
  } catch (error) {
    console.error("Error processing feed:", error);
    process.exit(1);
  }
}

main();
