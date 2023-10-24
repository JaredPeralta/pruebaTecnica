import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GestionVoto from './views/gestionVoto';
import GestionCandidato from './views/gestionCandidato';
import GestionPartido from './views/gestionPartido';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<GestionVoto />} />
        <Route path="/voto" element={<GestionVoto />} />
        <Route path="/candidato" element={<GestionCandidato />} />
        <Route path="/partido" element={<GestionPartido />} />
        <Route path="*" element={<GestionVoto />} />
      </Routes>
    </div>
  );
}

export default App;
