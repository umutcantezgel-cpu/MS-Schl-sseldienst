const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = [...walk('./app'), ...walk('./components')];
const linkMap = {}; // text -> Set of hrefs

const linkRegex = /<(?:Link|a)[^>]*href=["'{`]?([^"'{`>]+)["'{`]?[^>]*>([\s\S]*?)<\/(?:Link|a)>/g;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        let href = match[1];
        let text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        if (!text || text.includes('$')) continue; // Skip empty or dynamic text
        
        // clean href
        href = href.replace(/^\$\{[^}]+\}/, '').split('?')[0].split('#')[0];
        
        if (!linkMap[text]) linkMap[text] = new Set();
        linkMap[text].add(href);
    }
});

let found = false;
for (const [text, hrefs] of Object.entries(linkMap)) {
    if (hrefs.size > 1) {
        console.log(`Duplicate Link Text: "${text}" points to:`, Array.from(hrefs));
        found = true;
    }
}
if (!found) console.log("No exact duplicate link texts found.");
