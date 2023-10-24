const candidatoDAO = require('../dao/candidatoDao');
const candidatoDao = new candidatoDAO();
const CandidatoDTO = require('../dto/candidatoDto');

exports.getAllCandidatos = async (req, res) => {
    try {
        const result = await candidatoDao.getAllCandidatos();
        const candidatosDTO = result.map(candidato => {
            return new CandidatoDTO(candidato.documento, candidato.nombre, candidato.informacionPersonal, candidato.partidoId);
        });

        res.status(200).json(candidatosDTO);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createCandidato = async (req, res) => {
    try {
        const { documento, nombre, informacionPersonal, partidoId } = req.body;
        const candidatoDTO = new CandidatoDTO(documento, nombre, informacionPersonal, partidoId);
        const result = await candidatoDao.createCandidato(candidatoDTO);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.updateCandidato = async (req, res) => {
    try {
        const { id } = req.params;
        documento = id;
        const { nombre, informacionPersonal, partidoId} = req.body;
        const candidatoDTO = new CandidatoDTO(documento, nombre, informacionPersonal, partidoId);
        const result = await candidatoDao.updateCandidato(candidatoDTO);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteCandidato = async (req, res) => {
    try {
        const { id } = req.params;
        documento = id;
        const candidatoDTO = new CandidatoDTO(documento, null, null, null);
        const result = await candidatoDao.deleteCandidato(candidatoDTO);
        res.status(200).json(result);
    } catch (error) {
      console.log(error);
        res.status(500).json(error);
    }
}