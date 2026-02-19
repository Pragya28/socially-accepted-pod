const RSSParser = require('rss-parser');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const parser = new RSSParser();

function formatDateDDMMMYYYY(date) {
  const d = new Date(date);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  return formatter.format(d);
}

async function importRssToJson(rssUrl) {
  const feed = await parser.parseURL(rssUrl);

  const sortedItems = (feed.items || [])
    .slice()
    .sort((a, b) => new Date(b.pubDate || 0).getTime() - new Date(a.pubDate || 0).getTime());

  const episodes = sortedItems.map((item) => {
    const id = item.guid || uuidv4();
    const airDateIso = item.pubDate
      ? new Date(item.pubDate).toISOString()
      : new Date().toISOString();

    return {
      id,
      name: item.title || 'No Title',
      description: item.contentSnippet || item.content || '',
      airDate: formatDateDDMMMYYYY(airDateIso),
      coverImage: (item.itunes && item.itunes.image) || '',
      duration: (item.itunes && item.itunes.duration) || '',
      platforms: {},
    };
  });

  const outDir = path.resolve(process.cwd(), 'public', 'data');
  const outFile = path.resolve(outDir, 'episodes.json');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(outFile, JSON.stringify(episodes, null, 2) + '\n', 'utf-8');
  console.log(`Wrote ${episodes.length} episodes to ${outFile}`);
}

importRssToJson('https://anchor.fm/s/fb647c28/podcast/rss').catch((err) => {
  console.error('Failed to import RSS:', err);
  process.exitCode = 1;
});
