



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let admin = new Schema({
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
   collection: 'admins'
})
module.exports = mongoose.model('admin', admin)