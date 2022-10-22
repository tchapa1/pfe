



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let absence = new Schema({
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
   collection: 'absences'
})
module.exports = mongoose.model('absence', absence)