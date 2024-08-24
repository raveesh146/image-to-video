
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://raveeshGulati:A94LbyWTEzOyZHPy@cluster0.mhvurda.mongodb.net/MDG')

const UserPersonaSchema = new mongoose.Schema({
  name: String,
  traits: String,
  preferences: String
});

const UserPersona = mongoose.model('UserPersona', UserPersonaSchema);
module.exports = UserPersona;