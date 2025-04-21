# CV-Webbtjänst & Webbapplikation

Detta projekt består av en REST-webbtjänst samt en separat frontend-baserad webbapplikation där användaren kan se och hantera sin arbetslivserfarenhet (CV).

## Innehåll

- **REST API (Node.js + Express + PostgreSQL)**
- **Frontend (HTML, CSS, JavaScript)**
  - `index.html`: Lista alla jobbposter
  - `add.html`: Formulär för att lägga till ny post
  - `about.html`: Information om projektet och databasen

---

## Kom igång

### Backend (Webbtjänst)

1. Klona repot:
   ```bash
   git clone https://github.com/nathalievaster/rest-webbtjanst.git

2. Installera beroenden:
```bash
npm install
```

3. Skapa en .env-fil i projektets rotmapp och fyll i dina egna databasuppgifter:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rest_webbtjanst
DB_USER=
DB_PASSWORD=
```

4. Initiera databasen:
```bash
node initDB.js
```

5. Starta servern:
```bash
npm start
```

6. Använd sedan API: http://localhost:3000/api/workexperience

## Frontend-applikationen

Denna enkla hemsida innehåller en index.html som listar arbetserfarenheterna som lagts in, en add.html där
man kan lägga till fler erfarenheter, och en about.hml som beskriver projektet och syftet.

---

## Funktionella krav som uppfyllts

- [x] Läs in data via **GET**
- [x] Skicka data via **POST**
- [x] Radera data via **DELETE**
- [x] Separat frontend från Express
- [x] Tre undersidor (`index.html`, `add.html`, `about.html`)

---

## Slutsatser

Att bygga både backend och en helt fristående frontend gav en bättre förståelse för hur API:er fungerar i praktiken.  
En utmaning var att deploya databasen och API:t, samt hantera miljövariabler säkert. Jag testade med Render men fick det
inte att fungera.  
Projektet visar också vikten av tydlig validering i formulär och användarvänligt gränssnitt.

---

## Tekniker som använts

- Node.js & Express  
- PostgreSQL  
- HTML, CSS, JavaScript  