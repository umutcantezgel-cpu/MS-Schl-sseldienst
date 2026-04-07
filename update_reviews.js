const fs = require('fs');

const reviewsRaw = `
    {
        authorName: "Leticia",
        rating: 5,
        text: "Sehr schnell vor Ort, professionell und schnelle Öffnung der Tür.",
        date: "Vor wenigen Tagen",
        source: "Google",
    },
    {
        authorName: "S.",
        rating: 5,
        text: "Kompetenz trifft Freundlichkeit und Fachwissen!",
        date: "Vor wenigen Tagen",
        source: "Google",
    },
    {
        authorName: "Celina Hartmann",
        rating: 5,
        text: "Alles in allem ein guter Eindruck komme bei Bedarf gerne wieder.",
        date: "Vor 1 Woche",
        source: "Google",
    },
    {
        authorName: "daniel sk",
        rating: 5,
        text: "Ich möchte gerne von meiner positiven Erfahrung berichten. Der Besuch war nicht nur schnell mal eben einen Schlüssel nachmachen lassen (welcher witziger Weise besser passt als das Original 😅) - sondern auch verbunden …",
        date: "Vor 1 Monat",
        source: "Google",
    }
`;

// Read original file
const content = fs.readFileSync('components/reviews/reviews.data.ts', 'utf8');

// Extract the reviews array using a simple regex since it's a JS object
let match = content.match(/export const reviewsData: Review\[\] = \[([\s\S]*?)\];/);
if (!match) {
    console.error("Could not find reviewsData array");
    process.exit(1);
}

// Evaluate the array
let originalReviews = eval('[' + match[1] + ']');

// Evaluate new reviews
let newReviews = eval('[' + reviewsRaw + ']');

// Filter out empty text reviews
originalReviews = originalReviews.filter(r => r.text && r.text.trim() !== "");

// Combine: new reviews first, then original reviews
let allReviews = [...newReviews, ...originalReviews];

// Slice exactly to 46 items to be sure
if (allReviews.length > 46) {
    allReviews = allReviews.slice(0, 46);
}

// Rewrite IDs sequentially
allReviews.forEach((r, idx) => {
    r.id = (idx + 1).toString();
});

// Construct new file content
let newContent = `export interface Review {
    id: string;
    authorName: string;
    rating: number;
    text: string;
    date: string;
    source: "Google" | "ProvenExpert";
    location?: string;
    avatarUrl?: string;
}

export const reviewsData: Review[] = [
`;

allReviews.forEach(r => {
    newContent += `    {
        id: "${r.id}",
        authorName: ${JSON.stringify(r.authorName)},
        rating: ${r.rating},
        text: ${JSON.stringify(r.text)},
        date: ${JSON.stringify(r.date)},
        source: ${JSON.stringify(r.source)},
${r.location ? `        location: ${JSON.stringify(r.location)},\n` : ''}${r.avatarUrl ? `        avatarUrl: ${JSON.stringify(r.avatarUrl)},\n` : ''}    },\n`;
});

newContent += `];

export const aggregateRating = {
    ratingValue: 5.0,
    reviewCount: 46,
};
`;

fs.writeFileSync('components/reviews/reviews.data.ts', newContent);
console.log("Successfully updated reviews.data.ts with length: " + allReviews.length);
