import { generateSharedMetadata } from "@/lib/metadata";
import { SeoContentImage } from "@/components/seo/SeoImage";
import { teamImages } from "@/lib/data/imageAssets";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Grid } from "@/components/ui/Grid";
import { TeamCard } from "@/components/cards/TeamCard";
import { getAllTeamMembers } from "@/lib/data/team";

export const metadata = generateSharedMetadata({
  title: "Unser Team Wetzlar | Festangestellte Monteure",
  description: "Lernen Sie das Team von Schlüssel Schmiede kennen! ✔️ Geprüftes Personal ✔️ Keine Subunternehmer. Regionale Experten für Ihre Sicherheit.",
  path: "/ueber-uns/team",
  exactTitle: true,
});

export default function TeamPage() { 
  const team = getAllTeamMembers();

  return (
    <main>
      <Section background="blue" spacing="lg">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unser lokales Einsatz-Team</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Bei Schlüssel Schmiede Wetzlar arbeiten keine Subunternehmer, sondern ausgebildete, 
              festangestellte Spezialisten. Lernen Sie unsere Mitarbeiter kennen.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Photo Gallery */}
      <Section spacing="md" background="white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamImages.slice(0, 4).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-sm">
                <SeoContentImage image={img} className="w-full h-[220px]" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="gray">
        <Container>
          <Grid columns={3} gap="lg">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  ); 
}

export const dynamic = "force-static";
