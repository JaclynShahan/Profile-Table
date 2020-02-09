const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const axios = require('axios')

require('dotenv').config()

app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/getPatients', (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance
    .getPatients(
      req.query.patient_id,
      req.query.first_name,
      req.query.last_name,
      req.query.doctor,
      req.query.insurance,
      req.query.amount_owed
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
      req.body.patient_id,
      req.body.first_name,
      req.body.last_name,
      req.body.doctor,
      req.body.insurance,
      req.body.amount_owed
    )
    .then(resp => {
      console.log(resp)
      console.log(req.body)
      dbInstance
        .getPatients(
          req.query.patient_id,
          req.query.first_name,
          req.query.last_name,
          req.query.doctor,
          req.query.insurance,
          req.query.amount_owed
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

const port = 3210
massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(port, () => console.log(`Server listening on port ${port}`))
})
