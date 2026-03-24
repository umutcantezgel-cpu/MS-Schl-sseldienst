# Content-Richtlinien — MS Schlüsseldienst Wetzlar

> Verbindliche Regeln für alle Texte auf der Website.

---

## 1. Miller's Law (7±2)

Das Arbeitsgedächtnis verarbeitet 7±2 Einheiten gleichzeitig.

| Element | Maximum |
|---|---|
| Navigation Top-Level | 7 Einträge |
| Dropdown-Unterpunkte | 7 pro Kategorie |
| Footer-Links pro Spalte | 7 |
| Vorteils-Listen | 3–5 gleichzeitig sichtbar |
| Prozess-Schritte | 3–5 (oder in Phasen gruppieren) |
| Service-Vorschau (Startseite) | 4–5 Karten |

**Dreier-Regel:** Wo möglich, Informationen in Dreiergruppen. Drei Vorteile, drei Schritte, drei Testimonials. Die Drei ist die kleinste Anzahl, die ein Muster bildet.

---

## 2. Umgekehrte Pyramide

Jede Sektion beginnt mit dem Wichtigsten:

1. **Überschrift:** Kernaussage in ≤8 Wörtern
2. **Lead-Absatz:** 1–2 Sätze Kontext
3. **Details:** Von wichtig zu weniger wichtig

Wer nur die Überschrift liest, versteht das Wesentliche. Wer weiterliest, bekommt Details.

---

## 3. Nutzen vor Merkmal

- ✅ „Sie sparen Zeit — durch unsere schnelle Anfahrt."
- ❌ „Unsere schnelle Anfahrt spart Ihnen Zeit."

Das Gehirn bewertet nach persönlicher Relevanz. Der **Nutzen** ist relevant, das **Merkmal** die Erklärung.

---

## 4. Satz-Rhythmus

Auf einen langen Satz (20–25 Wörter) folgt ein kurzer (5–8 Wörter).

> „Unsere zertifizierten Monteure öffnen Ihre Tür in 99% der Fälle komplett zerstörungsfrei — mit modernster Technik und jahrelanger Erfahrung. **Ohne Schäden. Garantiert.**"

- Kein Absatz >6 Sätze
- Kein Startseiten-Absatz >4 Sätze

---

## 5. Parallele Struktur

Alle Punkte einer Liste verwenden dieselbe grammatische Struktur:

- ✅ „Schnelle Anfahrt. Faire Preise. Saubere Arbeit."
- ❌ „Wir kommen schnell. Faire Preise. Die Arbeit ist sauber."

Wenn der erste Punkt mit einem Nomen beginnt, beginnen alle mit Nomen.

---

## 6. CTA-Texte

### Primäre CTAs (Handlungsversprechen)
- „06441 8056544 anrufen"
- „Jetzt Festpreis erfahren"
- „Kostenlose Beratung anfordern"

### Sekundäre CTAs (niedrigschwellig)
- „Mehr erfahren"
- „Details ansehen"
- „So funktioniert's"
- „Alle Fragen & Antworten anzeigen"

### Verboten
- „Senden", „Absenden", „Submit", „Hier klicken", „Klick mich"

---

## 7. Trust-Mikro-Copy unter CTAs

Direkt unter jedem primären CTA-Button (klein, tertiäre Farbe):

- „Kostenlos & unverbindlich"
- „Festpreis — keine versteckten Kosten"
- „In 20–30 Min. vor Ort"
- „24/7 — auch an Feiertagen"

---

## 8. Formular-Mikro-Copy

Unter komplexen Feldern (via `aria-describedby`):

- **Telefon:** „Für schnelle Rückmeldung — Pflichtfeld."
- **Name:** „Damit wir Sie persönlich ansprechen können."
- **Nachricht:** „Beschreiben Sie kurz Ihr Anliegen."

---

## 9. Alt-Texte für Bilder

| Bildtyp | Alt-Text |
|---|---|
| Content (informativ) | Beschreibung des Bildinhalts |
| Dekorativ (Schmuck) | `alt=""` + `aria-hidden="true"` |
| Funktional (Button, Link) | Aktion beschreiben, z.B. „Zur Startseite" |

---

## 10. Überschriften-Hierarchie

- **Eine H1 pro Seite** (immer sichtbar, nie nur sr-only)
- H2 für Hauptsektionen
- H3 für Unter-Sektionen
- Keine H-Stufe überspringen (kein H1→H3)
