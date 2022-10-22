



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let emp = new Schema({
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
   diplome: {
      type: String
   },
   specialite: {
      type: String
   },
   image: {
      type: String
   }
}, {
   collection: 'emps'
})
module.exports = mongoose.model('emp', emp)