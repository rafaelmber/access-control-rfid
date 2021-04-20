const express = require('express');
const router = express.Router();

//Worker Model
const { Worker } = require('../database.js');

//GET all Workers
router.get('/', async (req, res) => {
  const worker = await Worker.findAll();
  res.json(worker);
});

//Get just one Worker
router.get('/:id', async (req, res) => {
  const worker = await Worker.findByPk(req.params.id);
  res.json(worker);
});

//Add a new Worker
router.post('/', async (req, res) => {
  try {
    const {
      worker_id,
      name,
      position,
      area,
      starts,
      ends,
      card_id,
      picture,
    } = req.body;
    const worker = await Worker.create({
      worker_id,
      name,
      position,
      area,
      starts,
      ends,
      card_id,
      picture,
    });
    //console.log(worker);
    res.json({ status: 'Worker Added' });
  } catch (err) {
    console.log('Ha fallado\n', err);
    res.json({ status: 'Failed' });
  }
});

//Update a worker data
router.put('/:id', async (req, res) => {
  try {
    const { name, position, area, turn, card_id } = req.body;
    await Worker.update(
      {
        name,
        position,
        area,
        turn,
        card_id,
      },
      {
        where: {
          worker_id: req.params.id,
        },
      }
    );
    res.json({ status: 'Worker Updated' });
  } catch (err) {
    console.error('Update failed', err);
    res.json({ status: 'Update Failed' });
  }
});

//Delete a worker
router.delete('/:id', async (req, res) => {
  try {
    await Worker.destroy({
      where: {
        worker_id: req.params.id,
      },
    });
    res.json({ status: 'Worker Deleted' });
  } catch (err) {
    console.error('Delete failed', err);
    res.json({ status: 'Delete Failed' });
  }
});

module.exports = router;
