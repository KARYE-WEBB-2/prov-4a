// --- Del 1: inställningar och grundläggande ---

// 1. Setup
// Ställ in canvas för 2d

// Hämta knapparna .pilv, .pilh och .moln här:


// 2. Ladda in bilden
// Skapa ett Image-objekt för solen och sätt src till "./sun.png"


// 3. Skapa dina dataobjekt
// Skapa objektet 'moln' med x, y och variabeln spela (som ska vara false från början)

// Skapa objektet 'sol' med x och y (du kan slumpa dessa eller sätta fasta värden)



// --- Del 2: rita på canvas ---

// 4. Rita solen
function ritaSol() {
    // Använd drawImage för att rita ut sol-bilden baserat på sol-objektets x och y
    // Sätt bredd och höjd till 100
    
}

// 5. Rita molnet
function ritaMoln() {
    // Använd canvas-metoder (som beginPath, arc och fill) för att rita ut molnet.
    // Sätt färgen till #999999
    
}


// --- Del 3: interaktion och animering ---

// 6. Styra solen med knappar
// Lägg till en eventlistener för "Sol upp" (.pilv) som minskar solens y-värde

// Lägg till en eventlistener för "Sol ned" (.pilh) som ökar solens y-värde


// 7. Animera molnet (logik)
// Lägg till en eventlistener för "Animera moln" (.moln) som sätter molnets 'spela' till true


function animeraMoln() {
    // Gör en if-sats: Om molnet ska spelas (spela är true):
    // 1. Öka molnets x-värde
    // 2. Gör en ny if-sats: Om x-värdet blir större än canvasens bredd, 
    //    återställ x till ett minusvärde (t.ex. -200) så det åker in från vänster igen.
    
}


// 8. Skapa animationsloopen
function gameLoop() {
    // a) Rensa hela canvasen
    
    // b) Anropa ritaSol()
    
    // c) Anropa ritaMoln()
    
    // d) Anropa animeraMoln()
    
    // e) Använd requestAnimationFrame för att anropa gameLoop igen och hålla igång loopen
    
}

// Starta loopen för första gången här!
