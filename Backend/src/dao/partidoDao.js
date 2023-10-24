class partidoDAO{
  constructor(dbConnection){
    this.dbConnection = dbConnection;
  }

  async getAllPartidos(){
    try {
      const partidos = await this.dbConnection.partido.findMany();
      return partidos;
    } catch (error) {
      throw error;
    }
  }

  async createPartido(nombre, plataforma){
    try {
      const partido = await this.dbConnection.partido.create({
        data: {
          nombre: nombre,
          plataformaPolitica: plataforma
        }
      });
      return partido;
    } catch (error) {
      throw error;
    }
  }

  async updatePartido(id, nombre, plataforma){
    try {
      const partido = await this.dbConnection.partido.update({
        where: {
          id: parseInt(id)
        },
        data: {
          nombre: nombre,
          plataformaPolitica: plataforma
        }
      });
      return partido;
    } catch (error) {
      throw error;
    }
  }

  async deletePartido(id){
    try {
      const partido = await this.dbConnection.partido.delete({
        where: {
          id: parseInt(id)
        }
      });
      return partido;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = partidoDAO;