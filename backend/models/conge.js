



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let conge = new Schema({
   idemploye: {
      type: String
   },
   description: {
      type: String
   },
   datedebut: {
      type: String
   },
   datefin: {
      type: String
   },
   etat: {
      type: String
   }
}, {
   collection: 'conges'
})
module.exports = mongoose.model('conge', conge)