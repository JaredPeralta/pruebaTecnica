class VotoDTO {
    constructor(candidatoId, partidoId, fechaVoto) {
        this.candidatoId = candidatoId;
        this.partidoId = partidoId;
        this.fechaVoto = fechaVoto;
    }
}

module.exports = VotoDTO;