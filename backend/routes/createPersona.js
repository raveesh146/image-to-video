const express = require('express');
const router = express.Router();
const UserPersona = require('../db/UserPersona')

router.post('/', async (req, res) => {
  const { name, traits, preferences } = req.body;
  const newPersona = new UserPersona({ name, traits, preferences });

  try {
    await newPersona.save();
    res.status(201).json(newPersona);
  } catch (error) {
    res.status(500).json({ error: 'Error creating persona' });
  }
});

module.exports = router;
