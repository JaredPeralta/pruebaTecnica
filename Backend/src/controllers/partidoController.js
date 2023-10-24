const partidoDAO = require('../dao/partidoDao.js');
const partidoDao = new partidoDAO();
const PartidoDTO = require('../dto/partidoDto.js');

exports.getAllPartidos = async (req, res) => {
    try {
        const result = await partidoDao.getAllPartidos();
        const partidosDTO = result.map(partido => {
            return new PartidoDTO(partido.id, partido.nombre, partido.plataformaPolitica);
        });

        res.status(200).json(partidosDTO);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createPartido = async (req, res) => {
    try {
        const { nombre, plataforma } = req.body;
        const partidoDTO = new PartidoDTO(null, nombre, plataforma);
        const result = await partidoDao.createPartido(partidoDTO);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.updatePartido = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, plataforma } = req.body;
        const partidoDTO = new PartidoDTO(id, nombre, plataforma);
        const result = await partidoDao.updatePartido(partidoDTO);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deletePartido = async (req, res) => {
    try {
        const { id } = req.params;
        const partidoDTO = new PartidoDTO(id, null, null);
        const result = await partidoDao.deletePartido(partidoDTO);
        res.status(200).json(result);
    } catch (error) {
      console.log(error);
        res.status(500).json(error);
    }
}