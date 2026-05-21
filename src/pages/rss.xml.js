import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';

export async function GET(context) {
  const posts = await getCollection('posts');

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.metaDescription ?? post.data.excerpt,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
