import type {BaseFeedItem, RssFeed} from "./types/RssTypes";
import {JSDOM} from "jsdom";

export class RssFeedParser<T extends BaseFeedItem> {
  private async fetchXml(url: string): Promise<Document> {
    const response = await fetch(url);
    const text = await response.text();
    const dom = new JSDOM(text, {contentType: "text/xml"});
    return dom.window.document;
  }

  private parseItem(item: Element): T {
    const getTextContent = (tagName: string): string => {
      const element = item.getElementsByTagName(tagName)[0];
      return element?.textContent || "";
    };

    const pubDateStr = getTextContent("pubDate");

    const baseItem: BaseFeedItem = {
      title: getTextContent("title"),
      link: getTextContent("link"),
      pubDate: new Date(pubDateStr),
      description: getTextContent("description"),
    };

    return baseItem as T;
  }

  async parseFeed(url: string): Promise<RssFeed<T>> {
    const doc = await this.fetchXml(url);
    const channels = doc.getElementsByTagName("channel");

    if (!channels.length) {
      throw new Error("Invalid RSS feed: No channel element found");
    }

    const channel = channels[0];
    const itemElements = doc.getElementsByTagName("item");

    const items = Array.from(itemElements).map((item) =>
      this.parseItem(item as Element)
    );

    const getChannelContent = (tagName: string): string => {
      const element = channel.getElementsByTagName(tagName)[0];
      return element?.textContent || "";
    };

    return {
      title: getChannelContent("title"),
      description: getChannelContent("description"),
      link: getChannelContent("link"),
      items,
    };
  }
}
