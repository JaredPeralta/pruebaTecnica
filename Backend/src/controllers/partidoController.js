const prisma = require('../db.js');

const partidoDAO = require('../dao/partidoDao.js');
const partidoDao = new partidoDAO(prisma);

exports.getAllPartidos = async (req, res) => {
    try {
        const partidos = await partidoDao.getAllPartidos();
        res.status(200).json(partidos);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createPartido = async (req, res) => {
    try {
        const { nombre, plataforma } = req.body;
        const partido = await partidoDao.createPartido(nombre, plataforma);
        res.status(200).json(partido);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updatePartido = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, plataforma } = req.body;
        const partido = await partidoDao.updatePartido(id, nombre, plataforma);
        res.status(200).json(partido);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deletePartido = async (req, res) => {
    try {
        const { id } = req.params;
        const partido = await partidoDao.deletePartido(id);
        res.status(200).json(partido);
    } catch (error) {
      console.log(error);
        res.status(500).json(error);
    }
}