



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let notif = new Schema({
   titre: {
      type: String
   },
   description: {
      type: String
   },
   datecreation: {
      type: String
   },
   etat: {
      type: String
   }
}, {
   collection: 'notifs'
})
module.exports = mongoose.model('notif', notif)