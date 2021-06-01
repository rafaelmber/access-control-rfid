const path = require('path');
const express = require('express');
const router = express.Router();

router.get(
  '/:id',
  (req, res) => {
    res.sendFile(
      path.join(__dirname, `/../assets/pictures/worker-${req.params.id}.jpg`)
    );
    console.log(__dirname);
    //res.json({ status: 'Image sended' });
  },
  (err) => {
    if (err) {
      console.log('\nHubo un error\n' + err, '\n');
    }
  }
);
module.exports = router;
