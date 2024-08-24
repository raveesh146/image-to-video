const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bingV7route= require('./routes/bingV7')
const creatPersonaRoute=require('./routes/createPersona')
const generateVideoRoute= require('./routes/generateVideo')
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



app.use('/fetch-image',bingV7route)
app.use('/create-persona',creatPersonaRoute)
app.use('/generate-video',generateVideoRoute)

app.post('/webhook', (req, res) => {
  const { status, result_url } = req.body;

  if (status === 'done') {
    console.log('Video URL:', result_url);
    // Add your logic to handle the video URL here
  }

  res.status(200).send('Received webhook notification');
});







mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
