const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bingV7route= require('./routes/bingV7')
const creatPersonaRoute=require('./routes/createPersona')
require('dotenv').config();



const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/fetch-image',bingV7route)
app.use('/create-persona',creatPersonaRoute)







mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
