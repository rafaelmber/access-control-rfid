const { response } = require('express');
const express = require('express');
const router = express.Router();
const { Parser } = require('../cardReader');

router.get('/', async (req, res) => {
  await Parser.on('data', (card_id) => {
    try {
      console.log(card_id);
      res.json({ card_id });
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
