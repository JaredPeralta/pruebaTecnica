const express = require('express')
const router = express.Router()

const candidatoController = require('../controllers/candidatoController.js')

router.get('/candidatos', async  (req, res) => {
    candidatoController.getAllCandidatos(req, res)
})

router.post('/candidato', async  (req, res) => {
    candidatoController.createCandidato(req, res)
})

router.put('/candidato/:id', async  (req, res) => {
    candidatoController.updateCandidato(req, res)
})

router.delete('/candidato/:id', async  (req, res) => {
    candidatoController.deleteCandidato(req, res)
})

module.exports = router