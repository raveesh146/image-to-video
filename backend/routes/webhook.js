const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { status, result_url } = req.body;  // Extract data from the webhook notification

  if (status === 'done') {
    console.log('Video URL:', result_url);  // Log or process the video URL
    // Update your database or notify users here
  }

  res.status(200).send('Received webhook notification');
});

app.listen(5001, () => {
  console.log('Server is running on port 5000');
});
