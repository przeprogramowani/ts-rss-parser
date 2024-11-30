import {writeFile} from "fs/promises";
import type {RssFeed, BaseFeedItem} from "../types/RssTypes";

export async function writeFeedToFile<T extends BaseFeedItem>(
  feed: RssFeed<T>,
  filePath: string
): Promise<void> {
  try {
    // Convert feed to pretty JSON
    const feedJson = JSON.stringify(feed, null, 2);
    await writeFile(filePath, feedJson, "utf-8");
    console.log(`Feed successfully written to ${filePath}`);
  } catch (error) {
    console.error("Error writing feed to file:", error);
    throw error;
  }
}
