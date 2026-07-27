import { allLocations } from './lib/data/allLocations';
import { MICRO_POIS } from './lib/data/pois';

const locNames = allLocations.map(l => l.name);
const locSlugs = allLocations.map(l => l.slug);
const poiNames = MICRO_POIS.map(p => p.name);
const poiSlugs = MICRO_POIS.map(p => p.slug);

console.log("Loc vs POI names:");
locNames.forEach(n => {
  if (poiNames.includes(n)) console.log("DUPE NAME:", n);
});

console.log("Loc vs POI slugs:");
locSlugs.forEach(s => {
  if (poiSlugs.includes(s)) console.log("DUPE SLUG:", s);
});
