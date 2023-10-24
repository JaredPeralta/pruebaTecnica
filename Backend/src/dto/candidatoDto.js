class CandidatoDTO {
    constructor(documento, nombre, informacionPersonal, partidoId) {
        this.documento = documento;
        this.nombre = nombre;
        this.informacionPersonal = informacionPersonal;
        this.partidoId = partidoId;
    }
}

module.exports = CandidatoDTO;