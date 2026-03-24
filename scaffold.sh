#!/bin/bash
# Blueprint Scaffolder for 10X Expansion Pipeline Phase 1

BASE_DIR="app"

# 1. Marketing Group
mkdir -p "$BASE_DIR/(marketing)/leistungen/[slug]"
mkdir -p "$BASE_DIR/(marketing)/ueber-uns/team"
mkdir -p "$BASE_DIR/(marketing)/ueber-uns/philosophie"
mkdir -p "$BASE_DIR/(marketing)/ueber-uns/geschichte"
mkdir -p "$BASE_DIR/(marketing)/ueber-uns/karriere"
mkdir -p "$BASE_DIR/(marketing)/kontakt"
mkdir -p "$BASE_DIR/(marketing)/termin-buchen"
mkdir -p "$BASE_DIR/(marketing)/anfrage"
mkdir -p "$BASE_DIR/(marketing)/danke"
mkdir -p "$BASE_DIR/(marketing)/referenzen"
mkdir -p "$BASE_DIR/(marketing)/case-studies/[slug]"
mkdir -p "$BASE_DIR/(marketing)/partner"
mkdir -p "$BASE_DIR/(marketing)/auszeichnungen"
mkdir -p "$BASE_DIR/(marketing)/blog/[slug]"
mkdir -p "$BASE_DIR/(marketing)/blog/kategorie/[category]"
mkdir -p "$BASE_DIR/(marketing)/angebot/[slug]"
mkdir -p "$BASE_DIR/(marketing)/aktion"
mkdir -p "$BASE_DIR/(marketing)/ressourcen"
mkdir -p "$BASE_DIR/(marketing)/faq"
mkdir -p "$BASE_DIR/(marketing)/glossar"
mkdir -p "$BASE_DIR/(marketing)/checklisten"

# 2. Legal Group
mkdir -p "$BASE_DIR/(legal)/impressum"
mkdir -p "$BASE_DIR/(legal)/datenschutz"
mkdir -p "$BASE_DIR/(legal)/agb"
mkdir -p "$BASE_DIR/(legal)/widerruf"
mkdir -p "$BASE_DIR/(legal)/cookie-richtlinie"

# 3. Components Structure
mkdir -p "components/sections"
mkdir -p "components/forms"
mkdir -p "components/layout"
mkdir -p "components/common"
mkdir -p "components/blog"
mkdir -p "components/portfolio"

# 4. Lib Data Structure
mkdir -p "lib/data"
mkdir -p "lib/utils"
mkdir -p "lib/types"

# Generate Basic Layouts
echo 'export default function MarketingLayout({ children }: { children: React.ReactNode }) { return <>{children}</>; }' > "$BASE_DIR/(marketing)/layout.tsx"
echo 'export default function LegalLayout({ children }: { children: React.ReactNode }) { return <div className="legal-layout">{children}</div>; }' > "$BASE_DIR/(legal)/layout.tsx"

# Helper function to generate generic page.tsx
generate_page() {
  local path=$1
  local name=$2
  if [ ! -f "$path/page.tsx" ]; then
    echo "export default function ${name}Page() { return <main><h1>$name</h1></main>; }" > "$path/page.tsx"
  fi
}

# Generate Marketing Pages (Mock)
generate_page "$BASE_DIR/(marketing)/leistungen" "Leistungen"
generate_page "$BASE_DIR/(marketing)/leistungen/[slug]" "LeistungDetail"
generate_page "$BASE_DIR/(marketing)/ueber-uns" "About"
generate_page "$BASE_DIR/(marketing)/ueber-uns/team" "Team"
generate_page "$BASE_DIR/(marketing)/ueber-uns/philosophie" "Philosophie"
generate_page "$BASE_DIR/(marketing)/ueber-uns/geschichte" "Geschichte"
generate_page "$BASE_DIR/(marketing)/ueber-uns/karriere" "Karriere"
generate_page "$BASE_DIR/(marketing)/kontakt" "Kontakt"
generate_page "$BASE_DIR/(marketing)/termin-buchen" "TerminBuchen"
generate_page "$BASE_DIR/(marketing)/anfrage" "Anfrage"
generate_page "$BASE_DIR/(marketing)/danke" "Danke"
generate_page "$BASE_DIR/(marketing)/referenzen" "Referenzen"
generate_page "$BASE_DIR/(marketing)/case-studies" "CaseStudies"
generate_page "$BASE_DIR/(marketing)/case-studies/[slug]" "CaseStudyDetail"
generate_page "$BASE_DIR/(marketing)/partner" "Partner"
generate_page "$BASE_DIR/(marketing)/auszeichnungen" "Auszeichnungen"
generate_page "$BASE_DIR/(marketing)/blog" "Blog"
generate_page "$BASE_DIR/(marketing)/blog/[slug]" "BlogDetail"
generate_page "$BASE_DIR/(marketing)/blog/kategorie/[category]" "BlogCategory"
generate_page "$BASE_DIR/(marketing)/angebot/[slug]" "AngebotLandingPage"
generate_page "$BASE_DIR/(marketing)/aktion" "Aktion"
generate_page "$BASE_DIR/(marketing)/ressourcen" "Ressourcen"
generate_page "$BASE_DIR/(marketing)/faq" "Faq"
generate_page "$BASE_DIR/(marketing)/glossar" "Glossar"
generate_page "$BASE_DIR/(marketing)/checklisten" "Checklisten"

# Generate Legal Pages
generate_page "$BASE_DIR/(legal)/impressum" "Impressum"
generate_page "$BASE_DIR/(legal)/datenschutz" "Datenschutz"
generate_page "$BASE_DIR/(legal)/agb" "Agb"
generate_page "$BASE_DIR/(legal)/widerruf" "Widerruf"
generate_page "$BASE_DIR/(legal)/cookie-richtlinie" "CookieRichtlinie"

# Generate lib/data stubs
touch "lib/data/services.ts"
touch "lib/data/team.ts"
touch "lib/data/jobs.ts"
touch "lib/data/blog.ts"
touch "lib/data/caseStudies.ts"
touch "lib/data/partners.ts"
touch "lib/data/awards.ts"
touch "lib/data/resources.ts"
touch "lib/data/campaigns.ts"
touch "lib/data/faqs.ts"
touch "lib/types/index.ts"

# Done
echo "Scaffolding complete."
