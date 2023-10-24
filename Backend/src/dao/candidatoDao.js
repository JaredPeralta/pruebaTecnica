const prisma = require('../db.js');

class candidatoDAO{
  constructor(){
    this.dbConnection = prisma;
  }

  async getAllCandidatos(){
    try {
      const candidatos = await this.dbConnection.candidato.findMany();
      return candidatos;
    } catch (error) {
      throw error;
    }
  }

  async createCandidato(candidatoDTO){
    try {
      const candidato = await this.dbConnection.candidato.create({
        data: {
          documento: candidatoDTO.documento,
          nombre: candidatoDTO.nombre,
          informacionPersonal: candidatoDTO.informacionPersonal,
          partidoId: candidatoDTO.partidoId
        }
      });
      return candidato;
    } catch (error) {
      throw error;
    }
  }

  async updateCandidato(candidatoDTO){
    try {
      const candidato = await this.dbConnection.candidato.update({
        where: {
          documento: candidatoDTO.documento
        },
        data: {
          nombre: candidatoDTO.nombre,
          informacionPersonal: candidatoDTO.informacionPersonal,
          partidoId: parseInt(candidatoDTO.partidoId)
        }
      });
      return candidato;
    } catch (error) {
      throw error;
    }
  }

  async deleteCandidato(candidatoDTO){
    try {
      const candidato = await this.dbConnection.candidato.delete({
        where: {
          documento: candidatoDTO.documento
        }
      });
      return candidato;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = candidatoDAO;