



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let pdg = new Schema({
   nom: {
      type: String
   },
   prenom: {
      type: String
   },
   email: {
      type: String
   },
   password: {
      type: String
   },
   image: {
      type: String
   }
}, {
   collection: 'pdgs'
})
module.exports = mongoose.model('pdg', pdg)