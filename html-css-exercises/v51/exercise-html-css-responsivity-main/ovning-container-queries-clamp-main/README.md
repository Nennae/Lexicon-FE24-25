# 📚 **CSS Övningar: Container Queries och clamp()**

---

## **Övning 1: Skapa en Container och Använd Container Queries**

### **Beskrivning**
Du ska skapa en responsiv kortkomponent (`.card`) som ändrar utseende beroende på storleken på dess förälder (containern). Använd `@container` för att sätta olika stilar.

---

### **Mål**
1. Definiera en container med `container: inline-size;`.  
2. Använd **Container Queries** för att ändra bakgrundsfärg och textstorlek beroende på containerns storlek.  
3. Testa med olika storlekar på containern.

---

### **Steg-för-steg**
1. Skapa en HTML-fil med följande struktur:

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Övning 1 - Container Queries</title>
  <style>
    /* Din CSS här */
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card">Detta är ett kort.</div>
  </div>
</body>
</html>
```

2. I CSS, gör följande:  
   - Sätt `.card-container` till en viss bredd (ex. 300px eller 600px).  
   - Definiera `.card` som en **container** med `container: inline-size;`.  
   - Skapa två **Container Queries**:  
     - En för små containrar (mindre än 400px).  
     - En för stora containrar (mer än 400px).  

---

### **Exempeloutput**
- Om containern är **< 400px** → Bakgrund: **ljusblå**, textstorlek: **14px**.  
- Om containern är **>= 400px** → Bakgrund: **ljusgrön**, textstorlek: **18px**.

---

---

## **Övning 2: Responsiv Textstorlek med `clamp()`**

### **Beskrivning**
Använd `clamp()` för att skapa responsiv textstorlek som anpassar sig mellan en **minsta** och **största** storlek. Du ska applicera detta på en rubrik (`<h1>`) och en paragraf (`<p>`).

---

### **Mål**
1. Använd `clamp()` för att styra textstorleken.  
2. Kombinera med **viewport width (vw)** för att göra textstorleken dynamisk.  

---

### **Steg-för-steg**
1. Skapa en HTML-struktur:

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Övning 2 - clamp()</title>
  <style>
    /* Din CSS här */
  </style>
</head>
<body>
  <h1>Responsiv Rubrik med clamp()</h1>
  <p>Detta är en paragraf som också använder clamp för att styra textstorleken.</p>
</body>
</html>
```

2. I CSS:  
   - Sätt textstorleken på `<h1>` till `clamp(1.5rem, 5vw, 3rem);`.  
   - Sätt textstorleken på `<p>` till `clamp(1rem, 3vw, 1.5rem);`.  

---

### **Exempeloutput**
- När sidan är smal → Mindre text.  
- När sidan är bred → Större text, men max **3rem** för `<h1>` och **1.5rem** för `<p>`.

---

---

## **Övning 3: Kombinera Container Queries och `clamp()`**

### **Beskrivning**
Nu ska du kombinera **Container Queries** och **clamp()** för att skapa en responsiv kortkomponent med flexibel textstorlek.

---

### **Mål**
1. Använd `container: inline-size;` för att definiera containern.  
2. Skapa olika stilar för kortet med **Container Queries**.  
3. Använd `clamp()` för textstorlek så att den är responsiv oavsett containerns storlek.

---

### **Steg-för-steg**
1. Använd följande HTML-struktur:

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Övning 3 - Kombinera Container Queries & clamp()</title>
  <style>
    /* Din CSS här */
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card">
      <h2>Flexibelt kort</h2>
      <p>Texten är både responsiv och container-anpassad.</p>
    </div>
  </div>
</body>
</html>
```

2. I CSS:  
   - Definiera `.card-container` som en **container** med `container: inline-size;`.  
   - Använd **Container Queries** för att:  
     - Ändra bakgrundsfärg och padding på `.card`.  
   - Använd **`clamp()`** för att:  
     - Styra textstorleken på `<h2>` och `<p>`.

---

### **Exempeloutput**
- När containern är **smal (<400px)**:  
  - Bakgrund: **ljusgul**.  
  - Textstorlek: **Mindre** tack vare `clamp()`.  
- När containern är **bred (>400px)**:  
  - Bakgrund: **ljusgrön**.  
  - Textstorlek: **Större**, men maxgräns från `clamp()`.

---

---

## **Övning 4: Skapa en Responsiv Layout**

### **Beskrivning**
Skapa en layout med **flera kortkomponenter** (`.card`) i en flexbox/grid-layout. Använd **Container Queries** och `clamp()` för att göra korten och deras innehåll responsiva.

---

### **Mål**
1. Lägg flera `.card`-komponenter i en **flexbox** eller **CSS Grid**-layout.  
2. Applicera Container Queries för att ändra utseendet på korten.  
3. Använd `clamp()` för att göra textstorleken responsiv.

---

### **Steg-för-steg**
1. HTML-struktur:

```html
<div class="cards-container">
  <div class="card">
    <h3>Kort 1</h3>
    <p>Responsivt kort 1.</p>
  </div>
  <div class="card">
    <h3>Kort 2</h3>
    <p>Responsivt kort 2.</p>
  </div>
  <div class="card">
    <h3>Kort 3</h3>
    <p>Responsivt kort 3.</p>
  </div>
</div>
```

2. CSS:
   - Använd **Flexbox/Grid** för att layouta korten.  
   - Definiera containern som en **container**.  
   - Använd **Container Queries** och `clamp()` på kortens text.

---

### **Exempeloutput**
- Korten ska placeras i en **rad** på breda skärmar och **staplas vertikalt** på smala skärmar.  
- Texten ska vara responsiv med `clamp()`.

---

---

## 🎯 **Bonusövning: Utforska och Experimentera**
1. Skapa en ny komponent som använder **Container Queries** för att hantera olika typer av innehåll (t.ex. bild + text).  
2. Testa `clamp()` med andra CSS-egenskaper som **margins**, **paddings** eller **width**.  
