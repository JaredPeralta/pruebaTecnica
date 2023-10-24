const express = require('express')
const router = express.Router()

const partidoController = require('../controllers/partidoController.js')

router.get('/partidos', async  (req, res) => {
    partidoController.getAllPartidos(req, res)
})

router.post('/partido', async  (req, res) => {
    partidoController.createPartido(req, res)
})  

router.put('/partido/:id', async  (req, res) => {
    partidoController.updatePartido(req, res)
})

router.delete('/partido/:id', async  (req, res) => {
    partidoController.deletePartido(req, res)
})

module.exports = router