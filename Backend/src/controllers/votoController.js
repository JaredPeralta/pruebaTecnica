const votoDAO = require('../dao/votoDao.js');
const votoDao = new votoDAO();
const VotoDTO = require('../dto/votoDTO.js');

exports.getAllVotos = async (req, res) => {
    try {
        const result = await votoDao.getAllVotos();
        const votosDTO = result.map(voto => {
            return new VotoDTO(voto.candidatoId, voto.partidoId, voto.fechaVoto);
        });

        res.status(200).json(votosDTO);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createVoto = async (req, res) => {
    try {
        const fechaVoto = new Date();   
        const { candidatoId, partidoId } = req.body;
        const votoDTO = new VotoDTO(candidatoId, partidoId, fechaVoto);
        const result = await votoDao.createVoto(votoDTO);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.deleteVoto = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await votoDao.deleteVoto(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

