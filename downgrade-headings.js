const fs = require('fs');
const path = require('path');

const targetFiles = [
  'components/pricing/PriceCard.tsx',
  'components/pricing/PricingCalculator.tsx',
  'components/HeroSection.tsx',
  'components/cards/ServiceCard.tsx',
  'components/trust/ProcessSteps.tsx',
  'components/Footer.tsx',
  'components/maps/ContactPremiumMap.tsx',
  'components/sections/ClientLogos.tsx',
  'components/booking/CalendlyConsentGate.tsx',
  'components/forms/ContactForm.tsx',
  'components/contact/ContactForm.tsx',
  'components/locations/NeighborGrid.tsx',
  'components/locations/RouteVisualization.tsx',
  'components/locations/LocationServices.tsx',
  'components/locations/LocalPricing.tsx',
  'components/growth/PriceEstimator.tsx',
  'components/growth/RiskCalculator.tsx',
  'components/RelatedServices.tsx'
];

targetFiles.forEach(relPath => {
  const file = path.join(__dirname, relPath);
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace <h3 and </h3>
    // We add a 'typo-h3-fallback' or similar classes via the actual JSX? 
    // They usually already have classNames with styling! We just change the tag to div.
    content = content.replace(/<h3/g, '<div');
    content = content.replace(/<\/h3>/g, '</div>');
    
    // Replace <h4 and </h4>
    content = content.replace(/<h4/g, '<div');
    content = content.replace(/<\/h4>/g, '</div>');
    
    fs.writeFileSync(file, content);
    console.log(`Downgraded headings in ${relPath}`);
  }
});
