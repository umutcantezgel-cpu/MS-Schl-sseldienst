module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/', 'http://localhost:3000/preise', 'http://localhost:3000/kontakt'],
      numberOfRuns: 3,
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'started server',
    },
    assert: {
      assertions: {
        // ─── Performance Budgets (DEFCON-1) ───
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],

        // ─── Core Web Vitals ───
        'largest-contentful-paint': ['error', { maxNumericValue: 1200 }],  // LCP < 1.2s
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.01 }],   // CLS ≈ 0.00
        'interactive': ['error', { maxNumericValue: 2000 }],               // TTI < 2.0s

        // ─── SEO Hard Requirements ───
        'document-title': 'error',
        'meta-description': 'error',
        'link-text': 'warn',
        'crawlable-anchors': 'error',
        'is-crawlable': 'error',
        'robots-txt': 'error',
        'canonical': 'error',
        'hreflang': 'warn',
        'structured-data': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
