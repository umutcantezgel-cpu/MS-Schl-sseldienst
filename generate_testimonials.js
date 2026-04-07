const fs = require('fs');

// We can just read the TS file and extract the content using simple replacements or regex, 
// or since it's just TS objects we can use a simpler approach. But testimonials.ts includes some manual stuff.
// Let's just generate testimonials.ts to have standard formatting and export functions that draw from the same source? 
// Actually lib/data/testimonials.ts uses static data. Let's make it draw from reviews.data.ts and map it.
