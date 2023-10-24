import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/navBar';

const GestionCandidato = () => {

  const [candidatos, setCandidatos] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [informacionPersonal, setInformacionPersonal] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

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
        setSelectedOption(result.data[0].id);
      } catch (error) {
        alert(error.response.data.mensaje);
      }
    };

    // Llama a ambas funciones en paralelo
    Promise.all([fetchCandidatos(), fetchPartidos()]);
  }, []);



  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  
  const handleSignup = async () => {
    try {
      const result = await axios.post(
        `${apiUrl}/candidato`,
        {
          documento,
          nombre,
          informacionPersonal,
          partidoId: parseInt(selectedOption),
        }
      );
      if (result.status === 200) {
        alert('Candidato creado con exito');
      }
      window.location.reload();
    } catch (e) {
      alert(e.response.data.mensaje);
    }
  }


  const handleEdit = async (id) => {
    try {

      const nombre = prompt('Ingrese el nuevo nombre');
      const informacionPersonal = prompt('Ingrese la nueva descripcion');
      const idP = prompt('Ingrese el id del nuevo partido');
      const partidoId = parseInt(idP);

      const result = await axios.put(
        `${apiUrl}/candidato/${id}`,
        {
          nombre,
          informacionPersonal,
          partidoId
        }
      );
      if (result.status === 200) {
        alert('Candidato actualizado con exito');
      }
      window.location.reload();
    } catch (e) {
      alert(e.response.data.mensaje);
    }
  };


  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `${apiUrl}/candidato/${id}`,
      );
      if (result.status === 200) {
        alert('Candidato eliminado con exito');
      }
      window.location.reload();
    } catch (e) {
      alert('No se puede eliminar un candidato que ya tiene votos');
    }
  }

  return (
    <div>
      <Nav/>
      <h1>Resgistro Candidatos</h1>
      <div className='container'>
            <div className="card m-auto my-5 py-5">
              <div className='set-middle'>
                <form onSubmit={(e) => e.preventDefault()} className='d-grid'>
                  <input className='inputReg' type="text" id="documento" value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder='Documento' />
                  <input className='inputReg' type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre' />
                  <input className='inputReg' type="text" id="descripcion" value={informacionPersonal} onChange={(e) => setInformacionPersonal(e.target.value)} placeholder='Descripcion' />
                  <div>
                      <label htmlFor="tipoDoc">Partido politico</label>

                      <select onChange={handleChange}>
                          {partidos.map((partido, index) => (
                              <option key={index} value={partido.id}>{partido.nombre}</option>
                          ))}
                      </select>
                    </div>
                  <button onClick={handleSignup} >Registrar Candidato</button>
                </form>
              </div>
            </div>
          </div>

      <h1>Listado de Candidatos</h1>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Informacion Personal</th>
            <th>Partido</th>
          </tr>
        </thead>
        <tbody>
          {!candidatos.length ? <tr><td colSpan="4">No hay candidatos</td></tr> :
          
          candidatos.map(candidato => (
            <tr key={candidato.documento}>
              <td>{candidato.nombre}</td>
              <td>{candidato.informacionPersonal}</td>
              <td>{
                  partidos.map((partido) => (
                    partido.id === candidato.partidoId ? partido.nombre : null
                  ))
              }</td>
              <td>
                <button onClick={() => handleEdit(parseInt(candidato.documento))}>Editar</button>
                <button onClick={() => handleDelete(parseInt(candidato.documento))}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GestionCandidato;
