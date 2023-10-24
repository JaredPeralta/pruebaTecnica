const prisma = require('../db.js');

class partidoDAO{
  constructor(){
    this.dbConnection = prisma;
  }

  async getAllPartidos(){
    try {
      const partidos = await this.dbConnection.partido.findMany();
      return partidos;
    } catch (error) {
      throw error;
    }
  }

  async createPartido(partidoDTO){
    try {
      const partido = await this.dbConnection.partido.create({
        data: {
          nombre: partidoDTO.nombre,
          plataformaPolitica: partidoDTO.plataformaPolitica
        }
      });
      return partido;
    } catch (error) {
      throw error;
    }
  }

  async updatePartido(partidoDTO){
    try {
      const partido = await this.dbConnection.partido.update({
        where: {
          id: parseInt(partidoDTO.id)
        },
        data: {
          nombre: partidoDTO.nombre,
          plataformaPolitica: partidoDTO.plataformaPolitica
        }
      });
      return partido;
    } catch (error) {
      throw error;
    }
  }

  async deletePartido(partidoDTO){
    try {
      const partido = await this.dbConnection.partido.delete({
        where: {
          id: parseInt(partidoDTO.id)
        }
      });
      return partido;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = partidoDAO;