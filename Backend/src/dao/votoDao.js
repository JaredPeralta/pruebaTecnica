const prisma = require('../db.js');

class votoDAO{
  constructor(){
    this.dbConnection = prisma;
  }

  async getAllVotos(){
    try {
      const votos = await this.dbConnection.voto.findMany();
      return votos;
    } catch (error) {
      throw error;
    }
  }

  async createVoto(votoDTO){
    try {
      const voto = await this.dbConnection.voto.create({
        data: {
          candidatoId: votoDTO.candidatoId,
          partidoId: votoDTO.partidoId,
          fechaVoto: votoDTO.fechaVoto
        }
      });
      return voto;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = votoDAO;