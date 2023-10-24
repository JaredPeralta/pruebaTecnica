const express = require('express')
const router = express.Router()

const partidoController = require('../controllers/partidoController.js')

router.get('/partidos', (req, res) => {
    partidoController.getAllPartidos(req, res)
})

router.post('/partido', (req, res) => {
    partidoController.createPartido(req, res)
})  

router.put('/partido/:id', (req, res) => {
    partidoController.updatePartido(req, res)
})

router.delete('/partido/:id', (req, res) => {
    partidoController.deletePartido(req, res)
})

module.exports = router