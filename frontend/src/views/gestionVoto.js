import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/navBar';

const gestionVoto = () => {
  return (
    <div>
      <Nav/>
      <h1>Votar</h1>

      <h1>Listado de Votos</h1>
    </div>
  );
}

export default gestionVoto;