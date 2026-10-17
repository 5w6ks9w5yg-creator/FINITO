# Sauberhippo – Website

Statische Einzeldatei-Website (kein Build-Prozess nötig). Alles – HTML, CSS, JS und Bilder – steckt in `index.html`.

## Kostenlos hosten mit GitHub Pages

1. Auf github.com einloggen (Account kostenlos anlegen, falls noch nicht vorhanden).
2. Oben rechts auf **"+" → "New repository"** klicken.
   - Repository-Name z. B. `sauberhippo-website`
   - **Public** auswählen (für kostenloses GitHub Pages nötig)
   - "Create repository" klicken
3. Im neuen, leeren Repository auf **"uploading an existing file"** klicken.
4. Die Datei `index.html` aus diesem Ordner per Drag & Drop hochladen (Dateiname muss genau `index.html` heißen, klein geschrieben).
5. Unten auf **"Commit changes"** klicken.
6. Im Repository oben auf **Settings → Pages** (linkes Menü).
7. Unter "Build and deployment" → "Source" **"Deploy from a branch"** wählen, Branch **main**, Ordner **/ (root)**, dann **Save**.
8. Nach ca. 1 Minute erscheint oben eine grüne Meldung mit dem Link, z. B.:
   `https://DEIN-BENUTZERNAME.github.io/sauberhippo-website/`

Das ist dann die kostenlose, öffentliche Adresse der Seite. Jede erneute Änderung: Datei in GitHub ersetzen ("Add file → Upload files", alte `index.html` überschreiben) – die Seite aktualisiert sich automatisch nach kurzer Zeit.

## Eigene Domain (optional)

Falls später eine eigene Domain (z. B. sauberhippo.de) verwendet werden soll:
- Settings → Pages → "Custom domain" eintragen
- Beim Domain-Anbieter einen CNAME/A-Record auf GitHub Pages setzen (GitHub zeigt die nötigen Werte an)
