const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

const apiKey = process.env.API_KEY

app.post('/generate-video', async (req, res) => {
  //const imageUrl= req.body.imageUrl
  const { imageUrl, text } = req.body;

  try {
    const response = await axios.post('https://api.d-id.com/talks', {
      source_url: imageUrl,
      script: {
        type: 'text',
        input: "this is a test file 200",
        voice_id: 'en_us_male',
      },
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    res.json(response.data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
