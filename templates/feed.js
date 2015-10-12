import { site, posts } from '../data';
import { escapeXML, stripHTML } from '../utils';

export default `<?xml version="1.0" encoding="UTF-8"?>
  <rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'>
    <channel>
      <title>${escapeXML(site.name)}</title>
      <description>${escapeXML(site.description)}</description>
      <link>${site.url + site.baseurl}/</link>
      <atom:link href='${site.url + site.baseurl}/feed.xml' rel='self' type='application/rss+xml' />
      <pubDate>${(new Date).toUTCString()}</pubDate>
      <lastBuildDate>${(new Date).toUTCString()}</lastBuildDate>${
        posts.map(post => `
          <item>
            <title>${escapeXML(post.title)}</title>
            <description>${escapeXML(stripHTML(post.__content))}</description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <link>${site.url + site.baseurl + post.path}</link>
            <guid isPermaLink='true'>${site.url + site.baseurl + post.path}</guid>
            <category>${escapeXML(post.category)}</category>
          </item>
        `).join('\n')
    }</channel>
  </rss>
`
