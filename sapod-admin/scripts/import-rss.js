import rssParser from 'rss-parser';
import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const parser = new rssParser();
const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_CREATE_UPDATE_API_KEY, // Required to create/update docs
  useCdn: false,
});

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphen
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars except hyphen
    .replace(/\-\-+/g, '-') // Replace multiple hyphens by single
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, ''); // Trim hyphens from end
}

async function importRssToSanity(rssUrl) {
  const feed = await parser.parseURL(rssUrl);
  for (const item of feed.items) {
    // console.log(item);
    const doc = {
      _id: item.guid || uuidv4(),
      _type: 'episode',
      title: item.title || 'No Title',
      slug: {
        _type: 'slug',
        current: generateSlug(item.title || `episode-${uuidv4().slice(0, 8)}`),
      },
      description: item.contentSnippet || '',
      airDate: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
      image: item.itunes?.image,
      duration: item.itunes?.duration,
    };

    await sanity.createOrReplace(doc);
  }
}

importRssToSanity('https://anchor.fm/s/fb647c28/podcast/rss');
