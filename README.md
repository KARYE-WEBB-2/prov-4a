# Prov: lilla molntuss

**Fil att skriva i:** `molntuss.js`

**Mål:** Gör canvas-animationen interaktiv och rita ut objekten genom att lösa uppgifterna nedan.

## Del 1: inställningar och grundläggande

**1. Hämta element och sätt upp canvas**
* Hämta canvas-elementet från HTML-koden.
* Skapa en 2D-kontext (`ctx`) för att kunna rita.
* Hämta de tre knapparna `#pilv`, `#pilh` och `#moln` från DOM:en och spara dem i variabler.

**2. Ladda in bilden**
Skapa ett bildobjekt och ladda in bilden `./sun.png` så att den är redo att ritas ut senare.

**3. Skapa dina dataobjekt**
* Skapa ett objekt `moln` som innehåller startvärden för `x` (t.ex. 200), `y` (t.ex. 150) och en boolean `spela` som från början är `false`.
* Skapa ett objekt `sol` som innehåller startvärden för `x` och `y`. (Du kan slumpa startkoordinaterna med `Math.random()` om du vill, eller sätta fasta värden).

## Del 2: rita på canvas

**4. Rita solen**
* Skapa en funktion `ritaSol()`. I denna funktion ska du använda `drawImage` för att rita ut din sol-bild på canvasen baserat på x- och y-värdena i ditt `sol`-objekt. Sätt bredd och höjd till 100.

**5. Rita molnet**
* Skapa en funktion `ritaMoln()`. Använd ritmetoder (t.ex. `beginPath`, `arc` och `fill`) för att rita ut molnet. 
* *Tips: Ett moln kan bestå av tre överlappande halvcirklar som ritas bredvid varandra utifrån molnets `x`- och `y`-koordinater. Sätt färgen till `#999999`.*

## Del 3: interaktion och animering

**6. Styra solen med knappar**
Lägg till händelselyssnare (`click`) på knapparna för solen:
* När man klickar på knappen "Sol upp" (`#pilv`) ska solens y-värde minska.
* När man klickar på knappen "Sol ned" (`#pilh`) ska solens y-värde öka.

**7. Animera molnet (logik)**
* Skapa en händelselyssnare på knappen "Animera moln" (`#moln`) som ändrar molnets egenskap `spela` till `true`.
* Skapa funktionen `animeraMoln()`. 
    * **OM** molnets egenskap `spela` är `true`, öka molnets x-värde.
    * **OM** molnets x-värde blir större än canvasens bredd (plus lite marginal), återställ x-värdet till en minusposition (t.ex. -200) så det åker in från vänster igen.

**8. Skapa animationsloopen**
Skapa en funktion `gameLoop()` som körs kontinuerligt för att uppdatera skärmen:
* **a)** Rensa hela canvasen (`clearRect`).
* **b)** Anropa `ritaSol()`.
* **c)** Anropa `ritaMoln()`.
* **d)** Anropa `animeraMoln()`.
* **e)** Se till att loopen fortsätter snurra genom att använda `requestAnimationFrame`.
* Glöm inte att anropa loopen en första gång längst ner i din kod så att den startar!

