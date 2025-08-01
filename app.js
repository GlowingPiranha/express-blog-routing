// ! importo express
const express = require('express');

// ! definisco app
const app = express();

// ! definisco il port
const port = 3000;

// ! inserisco il middleware
app.use(express.static('public'));

// ! definisco la route base
app.get('/', (req, res) => {
  res.send('Server del mio blog');
})


// ! definisco la rotta per ottenere i post e creo un array di oggetti
app.get('/bacheca', (req, res) => {
  const bacheca = [
    {
      titolo: "A Quiet Place",
      contenuto: "Colonna sonora intensa e minimale tratta dal film horror 'A Quiet Place', perfetta per momenti di concentrazione o tensione.",
      immagine: "img/aquietplace.jpeg",
      tags: ["soundtrack", "horror", "strumentale"]
    },
    {
      titolo: "Cure",
      contenuto: "Un viaggio sonoro alternativo con i The Cure, tra malinconia, wave e introspezione. Icone degli anni '80.",
      immagine: "img/cure.jpeg",
      tags: ["rock", "new wave", "classici"]
    },
    {
      titolo: "Einaudi Essentials",
      contenuto: "Una raccolta delle composizioni più toccanti di Ludovico Einaudi, perfette per rilassarsi, studiare o riflettere.",
      immagine: "img/einaudi.jpeg",
      tags: ["piano", "classica moderna", "strumentale"]
    },
    {
      titolo: "Metal Lifting",
      contenuto: "Playlist energica per accompagnare allenamenti intensi. Chitarre pesanti, ritmi veloci, puro metallo.",
      immagine: "img/metal_lifting.jpg",
      tags: ["metal", "palestra", "energia"]
    },
    {
      titolo: "Radar Scoperte",
      contenuto: "Le uscite più recenti selezionate per te da Spotify. Un viaggio settimanale tra novità e nuove voci.",
      immagine: "img/radar.jpeg",
      tags: ["novità", "spotify", "scoperta"]
    },
    {
      titolo: "Sinister Soundscapes",
      contenuto: "Suoni inquietanti, ambienti oscuri e tensione crescente. La colonna sonora ideale per storie horror.",
      immagine: "img/sinister.jpeg",
      tags: ["dark ambient", "cinematica", "thriller"]
    },
    {
      titolo: "Split",
      contenuto: "Colonna sonora psicologica e disturbante del film 'Split', per esplorare la mente e le sue ombre.",
      immagine: "img/split.jpeg",
      tags: ["thriller", "psicologia", "colonna sonora"]
    },
    {
      titolo: "Stranger Things OST",
      contenuto: "Le sonorità synthwave e nostalgiche della serie Stranger Things, un ritorno agli anni '80.",
      immagine: "img/stranger.jpeg",
      tags: ["synth", "stranger things", "anni '80"]
    },
    {
      titolo: "Young & Beautiful",
      contenuto: "La canzone Young & Beautiful di Lana del Rey, tratta dal film 'Il Grande Gatsby'.",
      immagine: "img/youg.jpeg",
      tags: ["pop", "estate", "good vibes"]
    }
  ];

  res.json(bacheca);
})


// ! dico al server di rimanere in ascolto sulla porta indicata sopra
app.listen(port, () => {
  console.log(`Server della bacheca in ascolto su ${port}`);
})