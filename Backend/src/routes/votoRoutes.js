const express = require('express')
const router = express.Router()

const votoController = require('../controllers/votoController.js')

router.get('/votos', async  (req, res) => {
    votoController.getAllVotos(req, res)
})

router.post('/voto', async  (req, res) => {
    votoController.createVoto(req, res)
})

module.exports = router