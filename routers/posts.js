// * importo express
const express = require('express');

// * definisco il router
const router = express.Router();

// * index
router.get('/', (req, res) => {
  res.send("Elenco dei post");
})

// * show
router.get('/:id', (req, res) => {
  res.send(`Dettaglio del post con id: ${req.params.id}`);
})

// * create
router.post('/', (req, res) => {
  res.send(`Creazione di un nuovo post`);
})

// * update
router.put('/:id', (req, res) => {
  res.send(`Modifica totale del post con id: ${req.params.id}`);
})

// * delete
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post con id: ${req.params.id}`);
})

module.exports = router;