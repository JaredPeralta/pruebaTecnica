import React from 'react'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Voto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/partido">Gestion Partidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidato">Gestion Candidatos</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;