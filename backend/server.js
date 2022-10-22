const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/gestiondeprojet')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
// Setting up port with express js
const adminabsenceRoute = require('../backend/routes/adminabsence.route')
const adminadminRoute = require('../backend/routes/adminadmin.route')
const adminavancementprojetRoute = require('../backend/routes/adminavancementprojet.route')
const adminavancementtacheRoute = require('../backend/routes/adminavancementtache.route')
const adminchefRoute = require('../backend/routes/adminchef.route')
const admincongeRoute = require('../backend/routes/adminconge.route')
const adminempRoute = require('../backend/routes/adminemp.route')
const admingroupeRoute = require('../backend/routes/admingroupe.route')
const adminmessageRoute = require('../backend/routes/adminmessage.route')
const adminnotifRoute = require('../backend/routes/adminnotif.route')
const adminpdgRoute = require('../backend/routes/adminpdg.route')
const adminprojetRoute = require('../backend/routes/adminprojet.route')
const admintacheRoute = require('../backend/routes/admintache.route')

const chefabsenceRoute = require('../backend/routes/chefabsence.route')
const chefadminRoute = require('../backend/routes/chefadmin.route')
const chefavancementprojetRoute = require('../backend/routes/chefavancementprojet.route')
const chefavancementtacheRoute = require('../backend/routes/chefavancementtache.route')
const chefchefRoute = require('../backend/routes/chefchef.route')
const chefcongeRoute = require('../backend/routes/chefconge.route')
const chefempRoute = require('../backend/routes/chefemp.route')
const chefgroupeRoute = require('../backend/routes/chefgroupe.route')
const chefmessageRoute = require('../backend/routes/chefmessage.route')
const chefnotifRoute = require('../backend/routes/chefnotif.route')
const chefpdgRoute = require('../backend/routes/chefpdg.route')
const chefprojetRoute = require('../backend/routes/chefprojet.route')
const cheftacheRoute = require('../backend/routes/cheftache.route')


const empabsenceRoute = require('../backend/routes/empabsence.route')
const empadminRoute = require('../backend/routes/empadmin.route')
const empavancementprojetRoute = require('../backend/routes/empavancementprojet.route')
const empavancementtacheRoute = require('../backend/routes/empavancementtache.route')
const empchefRoute = require('../backend/routes/empchef.route')
const empcongeRoute = require('../backend/routes/empconge.route')
const empempRoute = require('../backend/routes/empemp.route')
const empgroupeRoute = require('../backend/routes/empgroupe.route')
const empmessageRoute = require('../backend/routes/empmessage.route')
const empnotifRoute = require('../backend/routes/empnotif.route')
const emppdgRoute = require('../backend/routes/emppdg.route')
const empprojetRoute = require('../backend/routes/empprojet.route')
const emptacheRoute = require('../backend/routes/emptache.route')

const pdgabsenceRoute = require('../backend/routes/pdgabsence.route')
const pdgadminRoute = require('../backend/routes/pdgadmin.route')
const pdgavancementprojetRoute = require('../backend/routes/pdgavancementprojet.route')
const pdgavancementtacheRoute = require('../backend/routes/pdgavancementtache.route')
const pdgchefRoute = require('../backend/routes/pdgchef.route')
const pdgcongeRoute = require('../backend/routes/pdgconge.route')
const pdgempRoute = require('../backend/routes/pdgemp.route')
const pdggroupeRoute = require('../backend/routes/pdggroupe.route')
const pdgmessageRoute = require('../backend/routes/pdgmessage.route')
const pdgnotifRoute = require('../backend/routes/pdgnotif.route')
const pdgpdgRoute = require('../backend/routes/pdgpdg.route')
const pdgprojetRoute = require('../backend/routes/pdgprojet.route')
const pdgtacheRoute = require('../backend/routes/pdgtache.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))



app.use('/adminapiabsence', adminabsenceRoute)
app.use('/adminapiadmin', adminadminRoute)
app.use('/adminapiavancementprojet', adminavancementprojetRoute)
app.use('/adminapiavancementtache', adminavancementtacheRoute)
app.use('/adminapichef', adminchefRoute)
app.use('/adminapiconge', admincongeRoute)
app.use('/adminapiemp', adminempRoute)
app.use('/adminapigroupe', admingroupeRoute)
app.use('/adminapimessage', adminmessageRoute)
app.use('/adminapinotif', adminnotifRoute)
app.use('/adminapipdg', adminpdgRoute)
app.use('/adminapiprojet', adminprojetRoute)
app.use('/adminapitache', admintacheRoute)

app.use('/chefapiabsence', chefabsenceRoute)
app.use('/chefapiadmin', chefadminRoute)
app.use('/chefapiavancementprojet', chefavancementprojetRoute)
app.use('/chefapiavancementtache', chefavancementtacheRoute)
app.use('/chefapichef', chefchefRoute)
app.use('/chefapiconge', chefcongeRoute)
app.use('/chefapiemp', chefempRoute)
app.use('/chefapigroupe', chefgroupeRoute)
app.use('/chefapimessage', chefmessageRoute)
app.use('/chefapinotif', chefnotifRoute)
app.use('/chefapipdg', chefpdgRoute)
app.use('/chefapiprojet', chefprojetRoute)
app.use('/chefapitache', cheftacheRoute)

app.use('/empapiabsence', empabsenceRoute)
app.use('/empapiadmin', empadminRoute)
app.use('/empapiavancementprojet', empavancementprojetRoute)
app.use('/empapiavancementtache', empavancementtacheRoute)
app.use('/empapichef', empchefRoute)
app.use('/empapiconge', empcongeRoute)
app.use('/empapiemp', empempRoute)
app.use('/empapigroupe', empgroupeRoute)
app.use('/empapimessage', empmessageRoute)
app.use('/empapinotif', empnotifRoute)
app.use('/empapipdg', emppdgRoute)
app.use('/empapiprojet', empprojetRoute)
app.use('/empapitache', emptacheRoute)


app.use('/pdgapiabsence', pdgabsenceRoute)
app.use('/pdgapiadmin', pdgadminRoute)
app.use('/pdgapiavancementprojet', pdgavancementprojetRoute)
app.use('/pdgapiavancementtache', pdgavancementtacheRoute)
app.use('/pdgapichef', pdgchefRoute)
app.use('/pdgapiconge', pdgcongeRoute)
app.use('/pdgapiemp', pdgempRoute)
app.use('/pdgapigroupe', pdggroupeRoute)
app.use('/pdgapimessage', pdgmessageRoute)
app.use('/pdgapinotif', pdgnotifRoute)
app.use('/pdgapipdg', pdgpdgRoute)
app.use('/pdgapiprojet', pdgprojetRoute)
app.use('/pdgapitache', pdgtacheRoute)

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message) // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message
})