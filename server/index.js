const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const Axios = require('axios')
const { json } = require('body-parser')
const session = require('express-session')
require('dotenv').config()

const controller = require(`${__dirname}/controller/controller`)

app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(
  session({
    secret: 'Here is my secret',
    resave: true,
    saveUninitialized: true
  })
)

app.get('/api/login', controller.loginUser)
app.put('/api/logout', controller.logoutUser)

app.post('/api/verifyUser', (req, res) => {
  console.log('User Request Received')
  const { username, password } = req.body
  console.log(process.env.username, process.env.password)
  console.log(username, password)
  if (username == process.env.username && password == process.env.password) {
    res.status(200).send(true)
  } else res.status(200).send(false)
})

const getPatients = (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.getPatients().then(resp => res.status(200).send(resp))
}
app.get('/api/getPatients', (req, res) => {
  getPatients(req, res)
})

const getCharges = (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.getCharges().then(resp => res.status(200).send(resp))
}
app.get('/api/getCharges', (req, res) => {
  getCharges(req, res)
})
// app.get('/api/getPatients', (req, res) => {
//   const dbInstance = req.app.get('db')
//   dbInstance
//     .getPatients(
//       req.query.patientid,
//       req.query.firstname,
//       req.query.lastname,
//       req.query.doctor,
//       req.query.insurance,
//       req.query.amountowed
//     )
//     .then(resp => {
//       console.log(resp)
//       res.status(200).send(resp)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })
// app.get('/api/getCharges', (req, res) => {
//   const dbInstance = req.app.get('db')
//   dbInstance
//     .getCharges(
//       req.query.date,
//       req.query.charge,
//       req.query.amountpaid,
//       req.query.amountdue,
//       req.query.balance
//     )
//     .then(resp => {
//       console.log(resp)
//       res.status(200).send(resp)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })
app.post(`/api/createPatients`, (req, res) => {
  const {
    patientid,
    firstname,
    lastname,
    doctor,
    insurance,
    amountowed
  } = req.body
  console.log(
    'Request received',
    patientid,
    firstname,
    lastname,
    doctor,
    insurance,
    amountowed
  )
  console.log(req.body)
  const dbInstance = req.app.get('db')
  dbInstance
    .createPatients(
      patientid,
      firstname,
      lastname,
      doctor,
      insurance,
      amountowed
    )
    .then(() => {
      getPatients(req, res)
    })
})
// app.post('/api/createPatients', (req, res) => {
//   const dbInstance = req.app.get('db')
//   dbInstance
//     .createPatients(
//       req.body.patientid,
//       req.body.firstname,
//       req.body.lastname,
//       req.body.doctor,
//       req.body.insurance,
//       req.body.amountowed
//     )
//     .then(resp => {
//       console.log(resp)
//       console.log(req.body)
//       dbInstance
//         .getPatients(
//           req.query.patientid,
//           req.query.firstname,
//           req.query.lastname,
//           req.query.doctor,
//           req.query.insurance,
//           req.query.amountowed
//         )
//         .then(resp => {
//           res.status(200).send(resp)
//         })
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })
app.post('/api/createCharges', (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance
    .createCharges(
      req.body.date,
      req.body.charge,
      req.body.amountdue,
      req.body.amountpaid,
      req.body.balance
    )
    .then(resp => {
      console.log(resp)
      console.log(req.body)
      dbInstance
        .getCharges(
          req.query.date,
          req.query.charges,
          req.query.amountdue,
          req.query.amountpaid,
          req.query.balance
        )
        .then(resp => {
          res.status(200).send(resp)
        })
    })
    .catch(err => {
      console.log(err)
    })
})

app.put('/api/updatePatient', (req, res) => {
  const {
    id,
    patientid,
    firstname,
    lastname,
    doctor,
    insurance,
    amountowed
  } = req.body
  console.log(req.body)
  console.log(
    'Updated:',
    id,
    patientid,
    firstname,
    lastname,
    doctor,
    insurance,
    amountowed
  )
  const dbInstance = req.app.get('db')
  dbInstance
    .updatePatient(
      id,
      patientid,
      firstname,
      lastname,
      doctor,
      insurance,
      amountowed
    )
    .then(() => {
      getPatients(req, res)
    })
})

app.put('/api/updateCharge', (req, res) => {
  const { id, date, charge, amountdue, amountpaid, balance } = req.body
  console.log(req.body)
  console.log('Updated:', id, date, charge, amountdue, amountpaid, balance)
  const dbInstance = req.app.get('db')
  dbInstance
    .updateCharge(id, date, charge, amountdue, amountpaid, balance)
    .then(() => {
      getCharges(req, res)
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
app.delete('/api/deleteCharges:id', (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance
    .deleteCharges(req.params.id)
    .then(() => {
      console.log('DeleteChargeParams', req.params.id)
      dbInstance.getCharges().then(resp => {
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
