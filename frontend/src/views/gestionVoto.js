import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/navBar';


const GestionVoto = () => {

  const [votos, setVotos] = useState([]);
  const [candidatos, setCandidatos] = useState([]);
  const [partidos, setPartidos] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Función para obtener los candidatos
    const fetchCandidatos = async () => {
      try {
        const result = await axios.get(`${apiUrl}/candidatos`);
        setCandidatos(result.data);
      } catch (error) {
        alert(error.response.data.mensaje);
      }
    };

    // Función para obtener los partidos
    const fetchPartidos = async () => {
      try {
        const result = await axios.get(`${apiUrl}/partidos`);
        setPartidos(result.data);
      } catch (error) {
        alert(error.response.data.mensaje);
      }
    };

    const fetchVotos = async () => {
      try {
        const result = await axios.get(`${apiUrl}/votos`);
        setVotos(result.data);
      } catch (error) {
        alert(error.response.data.mensaje);
      }
    }

    // Llama a ambas funciones en paralelo
    Promise.all([fetchCandidatos(), fetchPartidos(), fetchVotos()]);
  }, []);

  
  const handleVote = async (candidatoId, partidoId) => {
    try {
      const result = await axios.post(
        `${apiUrl}/voto`,
        {
          candidatoId,
          partidoId
        }
      );
      if (result.status === 200) {
        alert('Voto creado con exito');
      }
      window.location.reload();
    } catch (error) {
      alert(error.response.data.mensaje);
    }
  }

  return (
    <div>
      <Nav/>
      <h1>Candidatos</h1>

      <div className='container'>
        <div className="card m-auto my-5 py-5">
          <div className='set-middle'>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Informacion Personal</th>
                  <th>Partido</th>
                </tr>
              </thead>
              <tbody>
                {candidatos.map((candidato) => (
                  <tr key={candidato.documento}>
                    <td>{candidato.nombre}</td>
                    <td>{candidato.informacionPersonal}</td>
                    <td>{ partidos.map((partido) => {
                          if (partido.id === candidato.partidoId) {
                            return partido.nombre;
                          }
                        })}</td>
                    <td>
                      <button onClick={() => handleVote(candidato.documento, candidato.partidoId)}>Votar</button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h1>Listado de Votos</h1>
      <div className='container'>
        <div className="card m-auto my-5 py-5">
          <div className='set-middle'>
            <table>
              <thead>
                <tr>
                  <th>Candidato</th>
                  <th>Partido</th>
                  <th>Fecha del voto</th>
                </tr>
              </thead>
              <tbody>
                {votos.map((voto) => (
                  <tr key={voto.id}>
                    <td>{voto.candidatoId}</td>
                    <td>{
                        partidos.map((partido) => {
                          if (partido.id === voto.partidoId) {
                            return partido.nombre;
                          }
                        })
                      }</td>
                    <td>{voto.fechaVoto}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionVoto;