# Konfigurationshandbuch: Formspree & Calendly Integration

Dieses Handbuch ist die offizielle Schritt-für-Schritt-Anleitung für die Administration zur Einrichtung und Anbindung der externen SaaS-Dienste (Software as a Service) **Formspree** und **Calendly**. 

Da die Webseite ("Schlüsseldienst Wetzlar") auf statischem Next.js (`turbopack`) basiert und ohne eigene Backend-Datenbank arbeitet, übernehmen diese verifizierten Drittanbieter die sicherheitskritische Verarbeitung von Kundenanfragen und Terminbuchungen.

> [!IMPORTANT]
> **Sicherheits-Grundregel**
> Beide Schnittstellen verarbeiten personenbezogene Daten (Namen, E-Mail, Telefonnummern). Alle beschriebenen Datenschutzkonfigurationen (Phase 4) müssen **zwingend** vor dem offiziellen Live-Gang (Deployment) durchgeführt werden!

---

## ✅ Setup-Status (Stand: 31.03.2026)

| Dienst | Status | Details |
|--------|--------|---------|
| **Formspree Account** | ✅ Verifiziert | `schluesseldienst.wz@gmail.com` |
| **Formspree Projekt** | ✅ Angelegt | "Schlüsseldienst Wetzlar", Timezone `Europe/Berlin` |
| **Formular: Reguläre Anfrage** | ✅ Aktiv | Form-ID: `mgopyayb` |
| **Formular: Notdienst Einsatz** | ✅ Aktiv | Form-ID: `xkopbjzd` |
| **Calendly Account** | ✅ Verifiziert | `schluesseldienst.wz@gmail.com` |
| **Google Kalender** | ✅ Verknüpft | Doppelbuchungs-Schutz aktiv |
| **Event-Typ** | ✅ Konfiguriert | "Kostenlose Sicherheitsberatung (30 Min)" |
| **Pufferzeiten** | ✅ Konfiguriert | +15 Min vor / +15 Min nach |
| **Verfügbarkeit** | ✅ Konfiguriert | Mo–Fr 09:00–17:00 (CET) |
| **.env.local** | ✅ Angelegt | Alle 3 Keys eingetragen |
| **Server Action → Formspree** | ✅ Angebunden | `app/actions/contact.ts` → `mgopyayb` |
| **Calendly Widget** | ✅ Angebunden | `termin-buchen/page.tsx` → env-Variable |

---

## 📧 Teil 1: Formspree Konfiguration (Kontaktformulare)

Formspree dient als sicheres Backend für die Kontaktformulare (`Premium Kontakt` und `Notdienst`). Es fängt Formulardaten ab und leitet diese per E-Mail an den Administrator weiter.

### Schritt 1: Account- & Projekt-Erstellung
1. Öffne im Browser [https://formspree.io/](https://formspree.io/) und registriere dich mit der offiziellen Administrations-E-Mail-Adresse (z.B. `info@deinedomain.de`).
2. Bestätige deine E-Mail-Adresse durch den Bestätigungslink im Postfach.
3. Klicke im Dashboard auf **+ New Project** (Neues Projekt).
4. Benenne das Projekt **"Schlüsseldienst Wetzlar"** und klicke auf `Create Project`.

### Schritt 2: Formulare anlegen (Endpoints erstellen)
Wir benötigen zwei getrennte Endpunkte, um Notfälle von regulären Anfragen zu trennen.

**A. Das "Premium Kontakt" Formular:**
1. Klicke in deinem neuen Projekt auf **+ New Form**.
2. Wähle als Name: **"Reguläre Anfrage (Premium)"**.
3. Kopiere nach der Erstellung den Teil der URL (Endpoint URL), der wie eine zufällige Zeichenfolge aussieht (z.B. `xqkkwbrz`). Dies ist die `Form ID`.
4. Speichere diesen Schlüssel in einer separaten Textdatei zwischen.

**B. Das "Notdienst" Formular:**
1. Gehe wieder auf die Projektübersicht und klicke auf **+ New Form**.
2. Wähle als Name: **"Notdienst Einsatz"**.
3. Extrahiere auch hier die spezifische `Form ID` aus der generierten Endpoint-URL. Gehe sicher, dass du diese ID als "Notdienst-Formular" markierst.

### Schritt 3: Benachrichtigungsrouting konfigurieren
Ohne dieses Setup schickt Formspree keine E-Mails an dich!
1. Klicke bei einem Formular (z.B. "Notdienst Einsatz") oben rechts auf den Reiter **Settings**.
2. Gehe im linken Menü auf **Emails**.
3. Füge unter "Add Email" die E-Mail ein, die bei einem Einsatz benachrichtigt werden soll (z.B. `notruf@deinedomain.de`).
4. Klicke auf **Send Verification** und bestätige den Link in diesem E-Mail-Postfach.
5. In Formspree kannst du unter dem Reiter "Target Emails" auf **Subject Rules** klicken, um festzulegen, wie der Betreff für dich aussieht (z.B. `🚨 NEUER NOTDIENST EINSATZ: {{name}}`).

### Schritt 4: Spam-Schutz aktivieren (Honeypot/ReCAPTCHA)
Formspree schützt dich automatisch vor massenhaften Spam-Mails.
1. Unter **Settings -> Spam Protection** stelle sicher, dass das normale Custom Backend (AJAX Catch) aktiv ist.
2. Formspree wendet per Default automatische AI-basierte Spam-Identifikation an. Ein Custom-ReCaptcha in Next.js ist nicht zwingend erforderlich, da wir die `lib/forms/formspree.ts` AJAX-Route mit serverseitigen Parametern nutzen.
3. **Optional (Strikter Modus):** Unter **Form Settings** kannst du die Eingänge auf deine Live-Domain (z.B. `deinedomain.de`) beschränken (Restricted Domains).

---

## 📅 Teil 2: Calendly Konfiguration (Online-Buchung)

Calendly steuert die asynchronen Premium-Sicherheitsberatungen. Der User kann verfügbare Slots des Administrators direkt in das UI buchen.

### Schritt 1: Account & Kalender-Kopplung
1. Rufe [https://calendly.com/](https://calendly.com/) auf und registriere dich mit derselben Administrations-E-Mail (am besten Google Calendar oder Outlook 365, welches als Tageskalender benutzt wird).
2. Befolge die Onboarding-Schritte, bei denen Calendly nach einer Verknüpfung zu deinem Apple/Google/Microsoft Kalender fragt. **Dies ist essenziell**, da Calendly Termine nur dann als verfügbar anzeigt, wenn in deinem verknüpften Kalender kein anderer Termin (z.B. Notdienst-Einsatz) liegt!

### Schritt 2: Den Buchungstypen (Event-Type) erstellen
1. Klicke im Dashboard auf den blauen Button **+ Anlegen** (oder Create) -> **Ereignistyp** (Event Type).
2. Wähle "One-on-One" (1:1 Termin).
3. Benenne das Ereignis: **"Kostenlose Sicherheitsberatung (30 Min)"**.
4. Setze die Dauer auf `30 Minuten`.
5. Passe den öffentlichen Link (URL) an, z.B. zu `/sicherheitsberatung`.

### Schritt 3: Verfügbarkeitsregeln anpassen (Pufferzeiten)
1. Im Event-Typ Editor: Geh zum Menüpunkt **Zeitpläne / Verfügbarkeit**.
2. Lege deine "Regulären Zeiten" fest (z.B. Mo-Fr, 09:00 - 17:00 Uhr).
3. **Sehr Wichtig:** Konfiguriere unter dem Begriff "Pufferzeiten" zwingend vorher und nachher Puffer (z.B. +15 Min vor und nach jedem Termin). Dies verhindert, dass du direkt von einer Beratung in einen stornierten Einsatz geworfen wirst.

### Schritt 4: Den Integrations-Link extrahieren
1. Auf deinem Calendly Dashboard beim soeben erstellten Event-Typ: Klicke auf "Teilen" (Share).
2. Kopiere den regulären Buchungs-Link, welcher z.B. so aussieht:
   `https://calendly.com/deinname/sicherheitsberatung`
3. Kopiere **nur** deinen User-Namen oder die vollständige URL für die `.env` Datei. 

> [!TIP]
> Unser System in `components/booking/CalendlyWidget.tsx` zieht dynamisch über eine Next.js Variable diesen Link und bindet Calendly als optimiertes Iframe nahtlos im "Klares Vertrauen"-Design in die Webseite ein.

---

## 💻 Teil 3: Systemintegration im Next.js Projekt (.env.local)

Damit das Web-Projekt den Kontakt zu dem frisch konfigurierten Formspree und Calendly Server herstellt, müssen die Keys im Vercel, Netlify oder der `.env.local` Datei sicher injiziert werden.

1. Erstelle lokal eine `.env.local` Datei im Hauptordner des Codes (bzw. navigiere in den Projekt-Einstellungen deines Hosts (Vercel) unter "Environment Variables").
2. Füge folgende Schlüssel ein:

```env
# ─── Finale Live-Werte (Stand: 31.03.2026) ───

# Formspree – Premium Kontaktformular (Reguläre Anfrage)
NEXT_PUBLIC_FORMSPREE_ID="mgopyayb"

# Formspree – Notdienst-Formular (Einsatz-Anfragen)
FORMSPREE_EMERGENCY_ENDPOINT="https://formspree.io/f/xkopbjzd"

# Calendly – Sicherheitsberatung Buchung
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/schluesseldienst-wz/sicherheitsberatung"
```

3. Die Next.js Umgebung (`app/actions/contact.ts` Server Action) und das Widget (`components/booking/CalendlyWidget.tsx`) greifen nun statisch und typensicher beim Build auf diese Ressourcen zu.

### Integrations-Architektur

| Datenpfad | Datei | Funktion |
|-----------|-------|----------|
| Kontaktformular → Formspree | `app/actions/contact.ts` | Server Action mit Zod-Validation + Honeypot → `fetch()` an Formspree API |
| Fallback AJAX → Formspree | `lib/forms/formspree.ts` | Client-seitige `submitToFormspree()` mit Retry-Logik |
| Calendly Widget | `components/booking/CalendlyWidget.tsx` | `react-calendly` InlineWidget mit Design-System Theming |
| DSGVO Consent Gate | `components/booking/CalendlyConsentGate.tsx` | Two-Click-Solution: Calendly erst nach Marketing-Cookie-Zustimmung |

---

## ⚖️ Teil 4: Datenschutz (DSGVO) & Auftragsverarbeitung (AVV)

Da Daten deiner Kunden bei Drittanbietern verarbeitet werden (USA-Transfer / TFP Mechanismen), bist du gemäß DSGVO (Art. 28) verpflichtet, **Auftragsverarbeitungsverträge (AVV, engl: DPA)** abzuschließen. Diese Verträge werden vollständig digital via Checkbox/Signatur im Account bestätigt.

### 1. Formspree DPA & IP-Abschaltung
1. Gehe in deinem Formspree Account zu den offiziellen "Legal/GDPR" Unterlagen und unterschreibe den online DPA (Data Processing Addendum).
2. Gehe in die Settings deines jeweiligen Formulars.
3. Aktiviere in den Einstellungen zwingend **"Do not store IP address"**.
4. Wähle nach Möglichkeit in Formspree **Data Storage: EU (European Union)** aus, falls der gebuchte Plan dies erlaubt.

### 2. Calendly DPA
1. In den Calendly Profileinstellungen findest du das Dokument **Data Processing Addendum (DPA)**. Signiere dies digital.
2. Das Next.js Projekt hat in der Datei `components/booking/CalendlyConsentGate.tsx` die Vorarbeit geleistet. Calendly wird erst geladen (bzw. der User zum Klick aufgefordert), wenn er mindestens explizit den "Marketing/Analytics"-Cookies im zentralen Consent-Banner (`/lib/cookie-inventory`) zugestimmt hat. Damit ist jegliches Tracking (und das Laden der Widget-Sensoren) rechtlich wasserdicht abgesichert!

> [!NOTE]
> **Setup Abgeschlossen**
> Sobald du alle Schritte dieses Handbuchs konsequent abgeschlossen und die Keys im System hinterlegt hast, betreibst du eine vollautomatisierte, rechtssichere Lead- und Termingenerierungs-Maschine, die mit deinem Kalender synchronisiert ist!

---

## 🔲 Offene DSGVO-Aufgaben (vor Deployment)

- [ ] Formspree DPA unterschreiben (Settings → Legal/GDPR)
- [ ] IP-Speicherung deaktivieren (Form Settings → "Do not store IP")
- [ ] Restricted Domain auf die Live-Domain setzen
- [ ] Calendly DPA unterschreiben (Profil → Legal)
- [ ] Deployment: Environment Variables in Vercel/Netlify spiegeln
