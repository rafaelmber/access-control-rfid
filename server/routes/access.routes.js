const express = require('express');
const router = express.Router();

const { Access } = require('../database.js');

router.get('/', async (req, res) => {
  const accessList = await Access.findAll({
    include: 'Worker',
  });
  res.json(accessList);
});

module.exports = router;
