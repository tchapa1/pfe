



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let avancementprojet = new Schema({
   titre: {
      type: String
   },
   description: {
      type: String
   },
   idprojet: {
      type: String
   },
   datecreation: {
      type: String
   }
}, {
   collection: 'avancementprojets'
})
module.exports = mongoose.model('avancementprojet', avancementprojet)