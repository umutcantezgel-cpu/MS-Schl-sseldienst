const fs = require('fs');
const html = fs.readFileSync('.next/server/app/schluesseldienst-wetzlar.html', 'utf-8');

const bodyMatches = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const body = bodyMatches ? bodyMatches[1] : html;

// We need to extract the inner text of tags.
const cheerio = require('cheerio');
const $ = cheerio.load(body);

const counts = {};
$('*').each((i, el) => {
    // Only consider elements that have no child elements (leaf nodes)
    // or elements where we extract direct text.
    if ($(el).children().length === 0) {
        const text = $(el).text().trim();
        if (text.length > 5) {
            counts[text] = (counts[text] || 0) + 1;
        }
    }
});

const sorted = Object.entries(counts).filter(([k,v]) => v >= 3).sort((a,b) => b[1] - a[1]);
console.log("Counts of exact leaf node text:");
console.log(sorted);
