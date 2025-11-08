import React from "react";

export default function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SUL, o que ha de melhor nas cidades?</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/Paginas">Santa Catarina</a>
            <a className="nav-link" href="/PR">Paraná</a>
            <a className="nav-link" href="/RS.jsx">Rio Grande do Sul</a>
          </div>
        </div>
      </div>
    </nav>
  );
}