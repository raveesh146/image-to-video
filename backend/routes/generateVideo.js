const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/generate-video', async (req, res) => {
  const { imageUrl, text } = req.body;
  const apiKey = process.env.DID_API_KEY;
  const apiUrl = 'https://api.d-id.com/talks';
  
  try {
    const response = await axios.post(apiUrl, {
      source_url: imageUrl,
      script: {
        type: "text",
        input: text,
        subtitles: true,
        provider: {
          type: "microsoft",
          voice_id: "en-US-JennyNeural"
        }
      },
      config: {
        fluent: false,
        pad_audio: 0.0
      },
      webhook: "https://yourdomain.com/webhook"  // Your webhook URL
    }, {
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Basic ${apiKey}`
      }
    });

    const { status, id } = response.data;
    if (status === 'queued' || status === 'processing') {
      res.json({ status, id });  // Send status and ID back to frontend
    } else {
      res.status(500).json({ error: 'Error starting video generation' });
    }
  } catch (error) {
    console.error('Error generating video:', error);
    res.status(500).json({ error: 'Error generating video' });
  }
});

module.exports = router;
