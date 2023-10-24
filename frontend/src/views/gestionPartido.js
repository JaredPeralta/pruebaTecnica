import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/navBar';

const GestionPartido = () => {

  const [partidos, setPartidos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try{
      const result = await axios.get(
        `${apiUrl}/partidos`,
      );
      setPartidos(result.data);
      }catch(e){
        alert(e.response.data.mensaje);
      }
    };
    fetchData();
  }, []);


  const handleSignup = async () => {
    try{
      const result = await axios.post(
        `${apiUrl}/partido`,
        {
          nombre,
          plataforma : descripcion
        }
      );
      if (result.status === 200) {
        alert('Partido creado con exito');
      }
      window.location.reload();
    }catch(e){
      alert(e.response.data.mensaje);
    }
  }


  const handleEdit = async (id) => {
    try{

      const nombre = prompt('Ingrese el nuevo nombre');
      const plataforma = prompt('Ingrese la nueva descripcion');

      const result = await axios.put(
        `${apiUrl}/partido/${id}`,
        {
          nombre,
          plataforma
        }
      );
      if (result.status === 200) {
        alert('Partido actualizado con exito');
      }
      window.location.reload();
    }catch(e){
      alert(e.response.data.mensaje);
    }
  };




  const handleDelete = async (id) => {
    try{
      const result = await axios.delete(
        `${apiUrl}/partido/${id}`,
      );
      if (result.status === 200) {
        alert('Partido borrado con exito');
        window.location.reload();
      }      
    }catch(e){
      alert('Error al borrar el partido, verifique que no haya candidatos asociados');
    }
  };


  return (
    <div>
      <Nav />
      <h1>Agregar partido</h1>
      <div className='container'>
            <div className="card m-auto my-5 py-5">
              <div className='set-middle'>
                <form onSubmit={(e) => e.preventDefault()} className='d-grid'>
                  <input className='inputReg' type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre' />
                  <input className='inputReg' type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='Descripcion' />
            
                  <button onClick={handleSignup} >Crear Partido</button>
                </form>
              </div>
            </div>
          </div>

      <h1> Lista de partidos </h1>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {!partidos.length ? (
              <tr>
                <td colSpan={3}>No hay partidos</td>
              </tr>
            ) : (
              partidos.map(partido => (
                <tr key={partido.id}>
                  <td>{partido.nombre}</td>
                  <td>{partido.plataformaPolitica}</td>
                  <td>
                    <button onClick={() => handleEdit(parseInt(partido.id))}>Editar</button>
                    <button onClick={() => handleDelete(parseInt(partido.id))}>Borrar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestionPartido;
