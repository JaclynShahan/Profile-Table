const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const Axios = require('axios')

require('dotenv').config()

app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/getPatients', (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance
    .getPatients(
      req.query.patientid,
      req.query.firstname,
      req.query.lastname,
      req.query.doctor,
      req.query.insurance,
      req.query.amountowed
    )
    .then(resp => {
      console.log(resp)
      res.status(200).send(resp)
    })
    .catch(err => {
      console.log(err)
    })
})

app.post('/api/createPatients', (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance
    .createPatients(
      req.body.patientid,
      req.body.firstname,
      req.body.lastname,
      req.body.doctor,
      req.body.insurance,
      req.body.amountowed
    )
    .then(resp => {
      console.log(resp)
      console.log(req.body)
      dbInstance
        .getPatients(
          req.query.patientid,
          req.query.firstname,
          req.query.lastname,
          req.query.doctor,
          req.query.insurance,
          req.query.amountowed
        )
        .then(resp => {
          res.status(200).send(resp)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

app.delete('/api/deletePatients:id', (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance
    .deletePatients(req.params.id)
    .then(() => {
      console.log('DeleteParams', req.params.id)
      dbInstance.getPatients().then(resp => {
        res.status(200).send(resp)
      })
    })
    .catch(err => {
      console.log(err)
    })
})

const port = 3777
massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(port, () => console.log(`Server listening on port ${port}`))
})
