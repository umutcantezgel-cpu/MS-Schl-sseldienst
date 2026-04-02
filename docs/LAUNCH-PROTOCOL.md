# 🚀 Finales Launch-Protokoll: `wetzlar-schluesseldienst.de`

Dieses Dokument beschreibt exakt und schrittweise, was von diesem Punkt an passieren muss, um die Webseite vollständig, DSGVO-konform und SEO-optimiert auf der neuen Domain live zu schalten.

---

## 🛑 Phase 1: Vercel Projekt-Setup & Environment

Bevor die Domain umgestellt wird, muss Vercel genau wissen, mit welchen API-Schlüsseln die Webseite arbeiten darf.

### 1.1 GitHub Import
- **WO:** Vercel Dashboard (Add New -> Project)
- **WAS:** Das verbundene GitHub-Repository importieren.
- **WIE:** Framework Preset auf `Next.js` belassen. Root Directory bleibt auf `./`.

### 1.2 Environment Variables (Umgebungsvariablen) eintragen
- **WO:** Im Vercel Deployment-Screen (oder unter Projekt "Settings" -> "Environment Variables").
- **WAS:** Alle Variablen aus unserer lokalen `.env.local` 1:1 in die Produktionsumgebung kopieren.
- **WIE:** Kopiere einfach den gesamten Inhalt deiner lokalen `.env.local` und füge ihn in das erste Feld bei Vercel ein. Vercel zerlegt die Liste automatisch:
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = `AIzaSyDGmJeJsMRAh3Z9PZWNJRTomvM3URcm5B8`
  - `NEXT_PUBLIC_SITE_URL` = `https://wetzlar-schluesseldienst.de` (Exakt so, **ohne** `/` am Ende)
  - `NEXT_PUBLIC_FORMSPREE_ID` = `(Deine Formspree-ID)`
  - `FORMSPREE_EMERGENCY_ENDPOINT` = `(Dein Formspree Notdienst-Link)`
  - `NEXT_PUBLIC_CALENDLY_URL` = `(Dein Calendly-Link)`
  - `NEXT_PUBLIC_APP_VERSION` = `1.0.0`
- **WICHTIG:** Ohne diese Variablen schlägt der Google Maps Aufruf sofort beim Build fehl.

### 1.3 Initiales Deployment anstoßen
- **Aktion:** Klicke auf "Deploy".
- Vercel baut die Webseite nun zusammen. Danach steht sie auf einer internen Preview-Domain (z.B. `dein-projekt.vercel.app`) bereit.

---

## 🌍 Phase 2: Domain-Verknüpfung & DNS-Live-Schaltung

Hier verbinden wir Vercel mit deiner neuen Domain.

### 2.1 Domain bei Vercel eintragen
- **WO:** Vercel Dashboard -> Dein Projekt -> Settings -> **Domains**
- **WAS:** Trage exakt `wetzlar-schluesseldienst.de` ein und klicke auf "Add".

### 2.2 Die "www"-Subdomain eintragen (Kritisch für SEO!)
- **WO:** Selbes Fenster bei Vercel.
- **WAS:** Trage nun in einem neuen Feld `www.wetzlar-schluesseldienst.de` ein.
- **WIE:** Wähle in dem darauffolgenden Dialog zwingend **Redirect to wetzlar-schluesseldienst.de (308 Permanent)**.
- **WARUM:** Verhindert Duplicate Content bei Google. Alle Kunden, die mit `www.` aufrufen, landen sauber und indexierbar auf deiner "nackten" Hauptdomain.

### 2.3 DNS-Einträge beim Domain-Anbieter konfigurieren
- **WO:** Das Dashboard deines Domain-Registrars (wo deine neue Domain liegt).
- **WAS:** Öffne die "DNS Einstellungen" oder "DNS Zone".
- **WIE:**
  1. Falls dort bereits **A-Records** (IPv4) oder **AAAA-Records** (IPv6) für das Ziel `@` existieren -> **Löschen**.
  2. Falls ein **CNAME** oder A-Record für `www` existiert -> **Löschen**.
  3. **Neu anlegen:** Einen **A-Record** für den Host `@` (oder das Feld leer lassen) mit dem Zielwert: `76.76.21.21` (Vercel Anycast Network).
  4. **Neu anlegen:** Einen **CNAME-Record** für den Host `www` mit dem Zielwert: `cname.vercel-dns.com`.

### 2.4 SSL-Zertifikat abwarten
- Geh zurück ins Vercel Dashboard zu den "Domains". Innerhalb von 2 bis 15 Minuten verschwinden die Ladebalken/Warnungen und es erscheinen **blaue Haken (✅)**.
- Die Seite ist ab jetzt verschlüsselt, live und abrufbar!

---

## 🔍 Phase 3: Qualitäts- und Live-Prüfung (Zero-Hour)

Sobald die blauen Haken bei Vercel sichtbar sind, gehen wir in den Testmodus.

- [ ] **Mobilfunk-Test:** Schalte das WLAN an deinem Smartphone **aus** und öffne `https://wetzlar-schluesseldienst.de` in einem **Inkognito-Tab** (verhindert lokales Caching).
- [ ] **Google Maps Check:** Rufe die Startseite auf und scrolle nach unten – die Servicegebietskarte mit den Polygonen muss korrekt laden.
- [ ] **Click-to-Call prüfen:** Klicke auf die rote Telefonnummer. Springt das Telefon sofort in den Nummernblock?
- [ ] **Kontaktformular (Formspree):** Fülle ein Formular aus (Name: "Launch Test") und klicke auf Absenden. Prüfe kurz darauf das E-Mail-Postfach `info@ms-schluesseldienst-wetzlar.de`. Kommt die Mail regulär an?
- [ ] **Cookie Banner (DSGVO):** Teste, ob das Cookie Banner unten erscheint und bei der Option "Nur Essentiell" korrekt verschwindet.

---

## 📈 Phase 4: Google Search Console (SEO-Start)

Teile Google die direkte URL deiner Webseite mit.

### 4.1 Property in der GSC anlegen
- **WO:** [Google Search Console (GSC)](https://search.google.com/search-console)
- **WAS:** Oben links auf "Property hinzufügen" -> **"Domain"**-Feld wählen und `wetzlar-schluesseldienst.de` eintragen.
- **WIE:** Google gibt dir eine Verifizierungs-TXT-Zeile (`google-site-verification=...`).
- Gehe zu deinem Domain-Anbieter in die DNS-Zone und erstelle dort einen **TXT-Record** für den Host `@` (oder leer) mit diesem Wert.
- Klicke danach in der GSC auf "Bestätigen".

### 4.2 Die Sitemap einreichen
- **WO:** GSC -> Linke Sidebar "Sitemaps"
- **WAS:** Trage rechts genau das ein: `sitemap.xml` und klicke auf "Senden".
- **Ergebnis:** Der Google-Bot liest nun in Sekundenbruchteilen die Sitemap und glättet alle dort hinterlegten 115 programmierten Stadtseiten für sein Index-Crawling.

### 4.3 Turbo-Indexierung der Top 5 Seiten (Die "Money Pages")
- Navigiere oben im Suchschlitz der GSC auf "URL-Prüfung", gib nacheinander diese Seiten ein und klicke auf **"Indexierung beantragen"**:
  1. `https://wetzlar-schluesseldienst.de/` (Startseite)
  2. `https://wetzlar-schluesseldienst.de/preise` 
  3. `https://wetzlar-schluesseldienst.de/kontakt`
  4. `https://wetzlar-schluesseldienst.de/leistungen/turoeffnung`
  5. `https://wetzlar-schluesseldienst.de/servicegebiet`

---

## 🎉 Herzlichen Glückwunsch!
Mit diesem Vorgehen ist das Projekt in der neuen Umgebung und unter der neuen, sauberen Domain komplett live. Jegliche Altlasten und Workarounds gehören damit endgültig der Vergangenheit an!
