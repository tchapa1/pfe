



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let chef = new Schema({
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
   collection: 'chefs'
})
module.exports = mongoose.model('chef', chef)