const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const results = [];

async function crawlPage(url, depth, maxDepth) {  
  if (depth > maxDepth) return;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // find images
    $('img').each((_, img) => {
      const imageUrl = $(img).attr('src');
      if (imageUrl) {
        results.push({
          imageUrl,
          sourceUrl: url,
          depth,
        });
      }
    });

    // find links
    const links = [];
    $('a').each((_, link) => {
      const href = $(link).attr('href');
      if (href && href.startsWith('http')) {
        links.push(href);
      }
    });

    // recursive to links
    for (const link of links) {
      await crawlPage(link, depth + 1, maxDepth);
    }
  } catch (error) {
    // if error log
    console.error(`Error crawling ${url}:`, error.message);
  }
}

async function main() {
  const [,, url, depth] = process.argv;

  if (!url || !depth) {
    console.error('Usage: node crawler.js <url> <depth>');
    return;
  }

  await crawlPage(url, 0, parseInt(depth, 10));

  // Save and export to JSON file
  fs.writeFileSync('results.json', JSON.stringify({ results }, null, 2));
  console.log('Results saved to results.json (End process)');
}

main();
