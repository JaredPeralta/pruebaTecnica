const express = require('express')
const router = express.Router()

const votoController = require('../controllers/votoController.js')

router.get('/votos', async  (req, res) => {
    votoController.getAllVotos(req, res)
})

router.post('/voto', async  (req, res) => {
    votoController.createVoto(req, res)
})

router.delete('/voto/:id', async  (req, res) => {
    votoController.deleteVoto(req, res)
})

module.exports = router