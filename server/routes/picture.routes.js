const path = require('path');
const express = require('express');
const router = express.Router();
const fs = require('fs');

const IMAGES_PATH = '/assets/pictures';

router.get('/:id', async (req, res) => {
  const imageFilePath = path.join(__dirname, '..', IMAGES_PATH, 'worker-${req.params.id}.jpg');

  //Check if image file exists
  if (!fs.existsSync(imageFilePath)) {
    return res.status(404).json({ error: 'Image not Found' });
  }
  // Sending the image
  res.sendFile(imageFilePath, (err) => {
    if (err) {
      console.error('Error while sending file:', err);
      res.status(500).json({ error: 'Error while sending file' });
    }
  });
});

module.exports = router;
