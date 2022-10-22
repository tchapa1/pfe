



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let message = new Schema({
   titre: {
      type: String
   },
   description: {
      type: String
   },
   idenvoie: {
      type: String
   },
   idreception: {
      type: String
   },
   datecreation: {
      type: String
   },
   etat: {
      type: String
   }
}, {
   collection: 'messages'
})
module.exports = mongoose.model('message', message)