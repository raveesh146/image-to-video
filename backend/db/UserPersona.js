const mongoose = require('mongoose');
require('dotenv').config(); 
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('MongoDB connected successfully'))
// .catch((err) => console.error('MongoDB connection error:', err));
const UserPersonaSchema = new mongoose.Schema({
  name: String,
  traits: String,
  preferences: String
});

const UserPersona = mongoose.model('UserPersona', UserPersonaSchema);
module.exports = UserPersona;