const fs = require('fs');
const html = fs.readFileSync('.next/server/app/schluesseldienst-wetzlar.html', 'utf-8');

// A very naive text extractor
const bodyMatches = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const body = bodyMatches ? bodyMatches[1] : html;

// Remove script, style, svg, and some header/footer
const cleanHtml = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
                      .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
                      .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '');

// Split by tags
const texts = cleanHtml.split(/<[^>]+>/)
                       .map(s => s.trim())
                       .filter(s => s.length > 20);

const counts = {};
texts.forEach(t => {
    counts[t] = (counts[t] || 0) + 1;
});

const sorted = Object.entries(counts).filter(([k,v]) => v > 1).sort((a,b) => b[1] - a[1]);
console.log(sorted);
