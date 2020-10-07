# Aufgabe 12: Modulsystem

Werde die `script`-Tags (bis auf das Laden der index.js-DAtei) in der index.html-Datei los, indem du das ECMAScript-Modulsystem verwendest.

## Hinweis:

- type="module" im Script-Tag der index.js hilft.
- Um CORS-Probleme zu umgehen:
  - npm install http-servere
  - package.json: "scripts" > "start": "http-server ."
  - npm start
  - http://localhost:8080 im Browser öffnen
