const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { q } = req.query;
  const apiKey = process.env.BING_API_KEY;
  const searchUrl = "https://api.bing.microsoft.com/v7.0/images/search";

  try {
    const response = await axios.get(searchUrl, {
      headers: { "Ocp-Apim-Subscription-Key": apiKey },
      params: { q, count: 1, imageType: "photo", size: "Large" }
    });

    const imageUrl = response.data.value[0]?.contentUrl || '';
    res.json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching image' });
  }
});

module.exports = router;
