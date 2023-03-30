const express = require('express');
const router = express.Router();

//Worker Model
const { Worker } = require('../database.js');

//GET all Workers
router.get('/', async (req, res) => {
  try {
    const worker = await Worker.findAll();
    res.status(200).json(worker);
  } catch (error) {
    console.error('Failed to get workers', err);
    res.status(500).send('Failed to get workers');
  }
});

//Get just one Worker
router.get('/:id', async (req, res) => {
  try {
    const worker = await Worker.findByPk(req.params.id);
    if (!worker) {
      res.status(404).send('Worker not found');
    }
    res.status(200).json(worker);
  } catch (error) {
    console.error('Failed to get worker by Id', err);
    res.status(500).send('Failed to get worker by Id');
  }
});

//Add a new Worker
router.post('/', async (req, res) => {
  try {
    const { worker_id, name, position, area, starts, ends, card_id, picture } = req.body;
    await Worker.create({
      worker_id,
      name,
      position,
      area,
      starts,
      ends,
      card_id,
      picture,
    });
    res.status(201).send('Worker Added');
  } catch (err) {
    console.error('Failed to add a new worker', err);
    res.status(500).send('Failed to add a new worker');
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
    res.status(200).send('Worker Updated');
  } catch (err) {
    console.error('Failed to update the worker info', err);
    res.status(500).send('Failed to update the worker info');
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
    res.send(204).send('Worker Deleted');
  } catch (err) {
    console.error('Failed to delete the worker', err);
    res.status(500).send('Failed to delete the worker');
  }
});

module.exports = router;
