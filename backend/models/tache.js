



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let tache = new Schema({
   nom: {
      type: String
   },
   description: {
      type: String
   },
   datecreation: {
      type: String
   },
   idprojet: {
      type: String
   },
   etat: {
      type: String
   }
}, {
   collection: 'taches'
})
module.exports = mongoose.model('tache', tache)