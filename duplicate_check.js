const fs = require('fs');
const html = fs.readFileSync('.next/server/app/schluesseldienst-wetzlar.html', 'utf-8');

// A very naive text extractor
const bodyMatches = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const body = bodyMatches ? bodyMatches[1] : html;

// Remove script and style tags
const cleanHtml = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '');

// Split by tags
const texts = cleanHtml.split(/<[^>]+>/)
                       .map(s => s.trim())
                       .filter(s => s.length > 0);

const counts = {};
texts.forEach(t => {
    counts[t] = (counts[t] || 0) + 1;
});

const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
console.log(sorted.slice(0, 20));
